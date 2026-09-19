import { redirect } from "next/navigation";

// /capabilities has been renamed to /solutions
// Redirect all capabilities traffic to solutions
export default function CapabilitiesRedirect() {
  redirect("/solutions");
}
