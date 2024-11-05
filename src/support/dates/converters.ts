import { DateTime } from 'luxon';

const isoToIsoDate = (value: string): string | null => {
  return DateTime.fromISO(value).toUTC().toISODate();
};

const jsToIsoDate = (value: Date): string | null => {
  return DateTime.fromJSDate(value).toUTC().toISODate();
};

export { isoToIsoDate, jsToIsoDate };
