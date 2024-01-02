import { match } from "assert";
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

/*
CASE UTILS
*/

export const caseTypes = {
  CAMEL: 'CAMEL',
  KEBAB: 'KEBAB',
  PASCAL: 'PASCAL',
  SPACE: 'SPACE',
  UNKNOWN: 'UNKNOWN',
};

export function camelToKebab(str: string) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

export function kebabToCamel(str: string) {
  return str.replace(/-./g, match => match.charAt(1).toUpperCase());
}

export function toPascalCase(str: string) {
  return str.replace(/(^\w|-\w)/g, match => match.charAt(match.length - 1).toUpperCase())
}
export function camelToTitleCase(str: string) {
  return toPascalCase(str).replace(/([A-Z])/g, ' $1').trim();
}

export function toCamelCase(str: string, sourceCase: string) {
  if (sourceCase === caseTypes.PASCAL) {
      return str.charAt(0).toLowerCase() + str.slice(1);
  } else {
      return str.replace(/(^\w|-\w)/g, match => match.charAt(match.length - 1).toUpperCase());
  }
}

export const hasSpace = (str: string) => /\s/.test(str);
export const isKebab = (str: string) => /-/.test(str);
export const isPascal = (str: string) => /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(str);
export const isCamel = (str: string) => /^[a-z]+(?:[A-Z][a-z]*)*$/.test(str);

export function detectStringCasing(str: string) {
  if (hasSpace(str)) {
      return caseTypes.SPACE
  } else if (isKebab(str)) {
      return caseTypes.KEBAB
  } else if (isPascal(str)) {
      return caseTypes.PASCAL
  } else if (isCamel(str)) {
      return caseTypes.CAMEL
  } else {
      return caseTypes.UNKNOWN
  }
}

const RE_REG_EXP_CHARS = /[\\^$.*+?()[\]{}|]/g;
export function escapeRegExp(string: string) {
  return string && string.replace(RE_REG_EXP_CHARS, '\\$&') || ''
}
