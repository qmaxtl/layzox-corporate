import { redirect } from "next/navigation";

// The Insights section has been renamed to Intelligence
// Redirect all /insights/* requests to /intelligence/*
export default function InsightsRedirect() {
  redirect("/intelligence");
}
