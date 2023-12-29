import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toTitleCase = (str: string): string =>
  str.replace(/_/g, " ").replace(/\b(\w)/g, (s) => s.toUpperCase());

export const convertCmToFeet = (cm: number): string => {
  const realFeet = (cm * 0.3937) / 12;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);
  return `${feet}'${inches}"`;
}

const WHITE_IN_BASE_10 = 16777215;
export function getRandomColor() {
  const hexColor = Math.floor(Math.random() * WHITE_IN_BASE_10).toString(16);
  return '#' + hexColor;
}