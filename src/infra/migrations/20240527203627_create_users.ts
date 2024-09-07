import type { Knex } from "knex";
import { hashPassword } from "../../domains";
import { env } from "../config";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary().unsigned().notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("administrator").notNullable();
  });

  const password = await hashPassword(
    env.DEFAULT_ADMIN_PASSWORD || "password",
  );
  const email = env.DEFAULT_ADMIN_EMAIL || "admin@example.com";
  const data = {
    administrator: true,
    name: "admin",
    password,
    email,
  };

  await knex("users").insert(data);
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}
