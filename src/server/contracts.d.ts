import { Knex } from "knex";

export interface Context {
  database: Knex;
  [key: string]: any;
}
