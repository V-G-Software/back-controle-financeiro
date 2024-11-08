import type { Knex } from 'knex';
import { resolve } from 'node:path';
import knex from 'knex';
import { DATABASE as config } from '../../server/config';

const buildConnectionConfig = (): Knex.Config => {
  return {
    client: 'pg',
    pool: { min: 0, max: 5, idleTimeoutMillis: 60000 },
    connection: {
      host: config.DB_HOST,
      port: config.DB_PORT,
      user: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
    },
    migrations: {
      directory: resolve(__dirname, './migrations'),
      extension: 'ts',
      loadExtensions: ['.ts', '.js'],
    },
    seeds: {
      directory: resolve(__dirname, './seeds'),
      extension: 'ts',
      loadExtensions: ['.js', '.ts'],
    },
  };
};

const createConnection = (): Knex => {
  return knex(buildConnectionConfig());
};

export { createConnection, buildConnectionConfig };
