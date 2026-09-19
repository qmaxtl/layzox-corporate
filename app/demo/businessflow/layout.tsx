import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "BusinessFlow — Interactive demonstration",
  description: "Explore a fictional commercial operations workspace built to demonstrate LAYZOX’s approach to business systems.",
  robots: { index: false, follow: true },
};

export default function DemoLayout({ children }: { children: ReactNode }) {
  return children;
}
