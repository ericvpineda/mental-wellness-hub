import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function print(text, ...values) {
  console.log(`DEBUG: ${text}=`, values.join(", "));
}
