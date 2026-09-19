import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

const origin = process.env.QA_ORIGIN || "http://localhost:3000";
const browser = await chromium.launch({ channel: process.env.QA_BROWSER || "msedge", headless: true });
const report = { pages: [], issues: [], interactions: [] };
await mkdir(".qa", { recursive: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, colorScheme: "light", reducedMotion: "reduce" });
const page = await context.newPage();
page.on("pageerror", (error) => report.issues.push(`Page error: ${error.message}`));
page.on("console", (message) => {
  if (["error", "warning"].includes(message.type()) && !message.text().includes("Download the React DevTools")) report.issues.push(`${message.type()}: ${message.text()}`);
});

async function inspect(path, size, theme, screenshot) {
  await page.setViewportSize(size);
  if (page.url() === "about:blank") await page.goto(origin);
  await page.evaluate((value) => localStorage.setItem("layzox-theme", value), theme);
  const response = await page.goto(`${origin}${path}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  assert.equal(response.status(), 200, `${path} responds successfully`);
  assert.equal(await page.locator("html").getAttribute("data-theme"), theme);
  const metrics = await page.evaluate(() => ({
    width: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
    h1: [...document.querySelectorAll("h1")].map((element) => element.textContent),
    overflowing: [...document.querySelectorAll("main *")].filter((element) => {
      const rect = element.getBoundingClientRect();
      return rect.width && (rect.right > innerWidth + 1 || rect.left < -1) && !element.closest(".hero-art, svg, .product-paths, [hidden]");
    }).slice(0, 8).map((element) => `${element.tagName}.${String(element.className).slice(0, 100)}`),
  }));
  report.pages.push({ path, size, theme, ...metrics });
  if (metrics.scrollWidth > metrics.width) report.issues.push(`Horizontal overflow: ${path} ${size.width} ${theme} (${metrics.scrollWidth})`);
  if (metrics.brokenImages.length) report.issues.push(`Missing images: ${path} ${metrics.brokenImages}`);
  if (screenshot) await page.screenshot({ path: `.qa/${screenshot}.png`, fullPage: true });
}

try {
  for (const [label, size] of Object.entries({ desktop: { width: 1440, height: 1000 }, laptop: { width: 1024, height: 900 }, tablet: { width: 768, height: 1024 }, mobile: { width: 390, height: 844 }, compact: { width: 320, height: 740 } })) {
    for (const theme of ["light", "dark"]) await inspect("/", size, theme, `home-${label}-${theme}`);
  }
  // Verify hydration-safe persistence through the real control and a full reload.
  await page.getByRole("button", { name: "Switch to light mode", exact: true }).first().click();
  assert.equal(await page.locator("html").getAttribute("data-theme"), "light");
  await page.reload({ waitUntil: "networkidle" });
  assert.equal(await page.locator("html").getAttribute("data-theme"), "light");
  report.interactions.push("Theme toggle persists across reload");

  await page.getByRole("button", { name: /Open (navigation|menu)/i }).click();
  const dialog = page.getByRole("dialog");
  await dialog.waitFor({ state: "visible" });
  assert.equal(await page.evaluate(() => document.querySelector("dialog[open]")?.contains(document.activeElement)), true);
  await page.keyboard.press("Escape");
  assert.equal(await dialog.isVisible(), false);
  report.interactions.push("Mobile navigation opens, focuses, and closes with Escape");

  await page.getByRole("button", { name: /02 LAYZOX REVENUE/i }).click();
  assert.equal(await page.locator("#product-panel-revenue").isVisible(), true);
  assert.equal(await page.locator("#product-panel-growth").isVisible(), false);
  await page.getByRole("link", { name: "Explore REVENUE", exact: true }).click();
  await page.waitForURL("**/products/revenue");
  report.interactions.push("Product disclosure and Revenue detail navigation work");

  for (const route of ["/products", "/products/growth", "/products/revenue", "/products/accounts", "/solutions", "/company", "/intelligence", "/contact", "/start-a-project", "/careers", "/work", "/work/businessflow", "/demo/businessflow", "/legal/privacy", "/legal/terms", "/legal/cookies"]) {
    await inspect(route, { width: 390, height: 844 }, "dark", route === "/products" ? "products-mobile-dark" : undefined);
  }
  await inspect("/products", { width: 1440, height: 1000 }, "light", "products-desktop-light");
  await inspect("/solutions", { width: 1440, height: 1000 }, "dark", "solutions-desktop-dark");
} catch (error) {
  report.issues.push(error.stack || error.message);
} finally {
  report.issues = [...new Set(report.issues)];
  await writeFile(".qa/report.json", JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
}
if (report.issues.length) process.exitCode = 1;
