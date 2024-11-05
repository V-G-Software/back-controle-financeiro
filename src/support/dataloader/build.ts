import DataLoader from 'dataloader';
import { type Knex } from 'knex';

import {
  select,
  notDeleted,
  type QueryConstructorFunction,
  type QueryOptions,
} from '../query-builder/ultils';
import { flow, isEmpty } from '../utils';

interface CodeDescription {
  codigo: number;
  descricao: string;
}

interface Config {
  table: string;
  field: string;
  parsedField: string;
  baseQuery?: QueryConstructorFunction;
  softDelete?: boolean;
  select: string[];
}

const buildQuery = (
  baseQuery: QueryConstructorFunction,
  isSoftDelete: boolean,
  selectStatement: string[]
): QueryConstructorFunction => {
  const statements: QueryConstructorFunction[] = [baseQuery];

  if (isSoftDelete) {
    statements.push(notDeleted);
  }

  if (!isEmpty(selectStatement)) {
    statements.push((query) => query.select(selectStatement));
  }

  return flow<Knex.QueryBuilder, QueryOptions>(statements);
};

export const buildDataloader = <Input extends string | number, Output>(
  conn: Knex,
  config: Config
): DataLoader<Input, Output> => {
  const {
    table,
    field,
    parsedField,
    baseQuery = select,
    softDelete = false,
    select: selectStatement,
  } = config;
  const query = buildQuery(baseQuery, softDelete, selectStatement);
  const handler = async (keys: Input[]): Promise<Output[]> => {
    const list = await query(conn, {
      table,
      field,
      keys,
    });

    return keys.map((key) => {
      return list.find((row) => row[parsedField] === key);
    });
  };

  return new DataLoader<Input, Output>(handler);
};

export const buildERPStatusDataloder = (
  tipo: 'PROJETO' | 'DESENVOLVIMENTO'
) => {
  return (conn: Knex) => {
    const handler = async (keys: number[]): Promise<string[]> => {
      const list: CodeDescription[] = await conn('codigos_descricoes')
        .whereIn('codigo', keys)
        .where({ tipo })
        .select(['codigo', 'descricao']);

      return keys.map((key: number): string => {
        const status = list.find(
          (row) => row.codigo === key
        ) as CodeDescription;
        return status.descricao;
      });
    };

    return new DataLoader(handler);
  };
};
