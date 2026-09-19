import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { COMPANY } from "@/data/company";

// Best-effort protection per server instance. Hosting-level limits should cover
// distributed deployments; this map is deliberately bounded.
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const MAX_BODY_BYTES = 16_384;

function error(message: string, status: number) {
  return NextResponse.json(
    { error: message, contactEmail: COMPANY.contact.projects },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return error("Please submit a JSON enquiry.", 415);
  }

  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return error("Please submit your enquiry from this website.", 403);
  }

  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (entry.expiresAt <= now) rateLimitMap.delete(key);
  }
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const entry = rateLimitMap.get(ip);
  if (entry && entry.count >= 6) {
    return error("Too many requests. Please wait a minute before submitting again.", 429);
  }
  if (entry) entry.count += 1;
  else {
    if (rateLimitMap.size >= 10_000) return error("Please try again shortly.", 503);
    rateLimitMap.set(ip, { count: 1, expiresAt: now + 60_000 });
  }

  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    return error("Your enquiry is too long. Please shorten the project description.", 413);
  }

  let body: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return error("Please include your enquiry details.", 400);
    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BODY_BYTES) {
        await reader.cancel();
        return error("Your enquiry is too long. Please shorten the project description.", 413);
      }
      chunks.push(value);
    }
    const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return error("Please include valid enquiry details.", 400);
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return error("Please include valid enquiry details.", 400);
  }

  const text = (key: string, maximum: number) => {
    const value = body[key];
    return typeof value === "string" && value.trim().length <= maximum ? value.trim() : null;
  };
  const name = text("name", 100);
  const email = text("email", 254);
  const description = text("description", 3000);
  if (!name || name.length < 2) return error("Please provide your full name (2–100 characters).", 400);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return error("Please provide a valid email address.", 400);
  }
  if (!description || description.length < 10) {
    return error("Please provide a project description of 10–3,000 characters.", 400);
  }
  const optionalFields = ["buildingType", "stage", "budget", "timeline", "company", "country"] as const;
  if (optionalFields.some((key) => body[key] !== undefined && text(key, 150) === null)) {
    return error("Please check your project and company details.", 400);
  }
  if (body.needs !== undefined && (!Array.isArray(body.needs) || body.needs.length > 12 ||
    body.needs.some((value) => typeof value !== "string" || value.length > 150))) {
    return error("Please choose valid areas of support.", 400);
  }

  // A successful UI state means an actual delivery destination accepted the
  // enquiry. Never acknowledge a submission that was only written to logs.
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    return error(`Online submission is unavailable. Please email ${COMPANY.contact.projects}.`, 503);
  }
  try {
    if (new URL(webhook).protocol !== "https:") throw new Error("Invalid destination");
    const enquiryId = `inq_${randomUUID()}`;
    const record = {
      id: enquiryId,
      receivedAt: new Date().toISOString(),
      name,
      email: email.toLowerCase(),
      description,
      ...Object.fromEntries(optionalFields.map((key) => [key, text(key, 150) ?? ""])),
      needs: Array.isArray(body.needs) ? body.needs.map((value: string) => value.trim()) : [],
    };
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.ENQUIRY_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(record),
      signal: AbortSignal.timeout(10_000),
      redirect: "error",
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Delivery rejected");
    return NextResponse.json(
      { success: true, enquiryId, message: "Your enquiry has been delivered." },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return error(`We could not deliver your enquiry. Please email ${COMPANY.contact.projects}.`, 502);
  }
}
