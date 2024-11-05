import { type Knex } from 'knex';
interface QueryOptions {
  table: string;
  field: string;
  keys: Array<string | number>;
}

type QueryConstructorFunction = (
  qb: Knex.QueryBuilder | Knex,
  options: QueryOptions
) => Knex.QueryBuilder;

interface TableDefinition<DatabaseColumns, EntityProperties> {
  tableName: string;
  typeRaw: DatabaseColumns[];
  parsedEntity: EntityProperties[];
  primaryKey: string;
  getIdentifier: (id: string | number) => Record<string, string | number>;
  parseKeysFromRaw: () => Array<string | null>;
}

const notDeleted = (query: Knex.QueryBuilder): Knex.QueryBuilder =>
  query.whereNull('deletedAt');

const select = (
  database: Knex,
  { table, field, keys }: QueryOptions
): Knex.QueryBuilder => database(table).whereIn(field, keys);

const constructQuery = {
  tableName: '',
  typeRaw: [],
  parsedEntity: [],
  primaryKey: '',
  getIdentifier: function (id: string | number) {
    return { [this.primaryKey]: id };
  },
  parseKeysFromRaw: function () {
    if (this.typeRaw.length !== this.parsedEntity.length) {
      return [this.primaryKey];
    }
    return this.typeRaw.map(
      (key: string, i: number) => `${key} as ${this.parsedEntity[i] as string}`
    );
  },
};

export {
  select,
  notDeleted,
  constructQuery,
  type QueryOptions,
  type QueryConstructorFunction,
  type TableDefinition,
};
