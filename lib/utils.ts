import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hoverInteractive =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg";
