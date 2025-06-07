import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names with tailwind-merge and clsx.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
