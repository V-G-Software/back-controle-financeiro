export const isNil = (val: unknown): val is null | undefined => {
  return val === undefined || val === null;
};

export const isUndefined = (val: unknown): val is undefined => {
  return val === undefined;
};

export const isBoolean = (val: unknown): boolean => {
  return val === true || val === false;
};

export const isEmpty = (val: unknown): boolean => {
  if (Array.isArray(val) || typeof val === 'string') {
    return val.length === 0;
  }

  if (!(val instanceof Object)) {
    return true;
  }

  if (val instanceof Set || val instanceof Map) {
    return val.size === 0;
  }

  return Object.keys(val).length === 0;
};

export const some = <Type>(
  list: Type[],
  callback: (item: Type) => boolean
): boolean => {
  if (!Array.isArray(list)) {
    return false;
  }

  return list.findIndex(callback) !== -1;
};

export const flow = <Params, Config>(
  functions: Array<(params: Params, config?: Config) => Params>
): ((params: Params, config?: Config) => Params) => {
  let value: Params;

  return (params: Params, config?: Config): Params => {
    value = params;

    for (const func of functions) {
      value = func(value, config);
    }

    return value;
  };
};

export const uniqBy = <Type>(list: Type[], key: string): Type[] => {
  const keys = new Set();
  const uniqueList: Type[] = [];

  for (const item of list) {
    if (keys.has(item[key])) {
      continue;
    }

    keys.add(item[key]);
    uniqueList.push(item);
  }

  return uniqueList;
};

export const uniq = <Type>(list: Type[]): Type[] => {
  const aux = new Set();
  const uniqueList: Type[] = [];

  for (const item of list) {
    if (aux.has(item)) {
      continue;
    }

    aux.add(item);
    uniqueList.push(item);
  }

  return uniqueList;
};

export function pick<T, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> | Record<string, undefined> {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }

  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return {};
  }

  if (!Array.isArray(keys)) {
    return {};
  }

  const isValidKeys = some(keys, (key) => typeof key === 'string');

  if (!isValidKeys) {
    return {};
  }

  if (Object.keys(obj).length === 0) {
    return {};
  }

  const copy: Partial<Pick<T, K>> = {};

  for (const key of keys) {
    const hasProperty = Object.prototype.hasOwnProperty.call(
      obj,
      key
    ) as boolean;

    if (hasProperty) {
      copy[key] = obj[key];
    }
  }

  return copy as Pick<T, K>;
}

type FunctionCallback = (args: any) => any;

export function mapKeys<Type>(obj: Type, callback: FunctionCallback): Type {
  if (typeof callback !== 'function') {
    throw new Error('Callback must be a function');
  }

  const newObject = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) as boolean) {
      const newKey = callback(key);
      newObject[newKey] = obj[key];
    }
  }

  return newObject as Type;
}
