import { type Knex } from 'knex';

import { ValidationError } from '@/errors';
import { isNil } from '@/support/utils';

export const findOrFail = async <Type>(
  conn: Knex,
  table: string,
  value: string | number,
  key: string = 'id'
): Promise<Type> => {
  const result = await conn(table).where(key, value).first();

  if (isNil(result)) {
    return await Promise.reject(
      ValidationError.build('recordNotAlreadyExists')
    );
  }

  return result;
};
