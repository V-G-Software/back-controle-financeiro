import type { Knex } from "knex";
import { hashPassword } from "../../../domains";
import { ENV } from "../../../server/config";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary().unsigned().notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string('phone', 12)
    table.string('cpf', 11).notNullable();
    table.boolean("administrador");
    table.boolean("autorizado").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}
