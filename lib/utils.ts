import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Central Indian Rupee (INR / ₹) currency formatting utility
 * Formats numbers in standard Indian numerical groupings (lakhs, crores)
 * e.g., 12500 -> ₹12,500 | 280000 -> ₹2,80,000 | 1450000 -> ₹14,50,000
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
