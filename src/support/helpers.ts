import { mapKeys } from './utils';

const camelCaseToSnakeCase = (key: string): string => {
  let snakeCaseKey = '';

  for (let i = 0; i < key.length; i++) {
    if (i > 0 && key[i] === key[i].toUpperCase()) {
      snakeCaseKey += '_';
    }

    snakeCaseKey += key[i].toLowerCase();
  }

  return snakeCaseKey;
};

const convertObjectKeysToSnakeCase = (
  obj: Record<string, any>
): Record<string, any> =>
  mapKeys<Record<string, any>>(obj, (key) => camelCaseToSnakeCase(key));

export { camelCaseToSnakeCase, convertObjectKeysToSnakeCase };
