import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const env = (varname: string) => {
  const value = process.env[varname];
  if (value === undefined) {
    throw new Error(`Missing env. variable ${varname}`);
  }
  return value;
}