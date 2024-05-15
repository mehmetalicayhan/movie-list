import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

type NumberWithUnit = string | null

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isEmpty(value: unknown) {
  return value === "N/A" || value === null || value === undefined
}

export function formatToUnits(num: string): NumberWithUnit {

  const number = num?.replace(/,/g, '');

  let parsedNum = parseInt(number);

  if (isNaN(parsedNum)) {
    return null;
  }

  const suffixes = ['', 'K', 'M', 'B'];
  let magnitude = 0;

  while (parsedNum >= 1000) {
    parsedNum /= 1000;
    magnitude++;
  }

  const formattedNum = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(parsedNum);
  return formattedNum + suffixes[magnitude];
}