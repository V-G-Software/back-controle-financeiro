import { isoToIsoDate, jsToIsoDate } from './converters';

export const convertToIsoDate = (value: string | Date): string | null => {
  return typeof value === 'string' ? isoToIsoDate(value) : jsToIsoDate(value);
};
