import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("help", (table) => {
    table.increments("id").primary().unsigned().notNullable(); // ID autoincremental
    table.string("description").notNullable(); // Descrição não nula
    table.string("title").notNullable(); // Título não nulo
    table.integer("status").notNullable(); // Status como inteiro e não nulo

    // Chave estrangeira para a tabela 'users' com `unsigned` (caso o id na tabela 'users' também seja unsigned)
    table.integer("user_attendant_id").unsigned().references('id').inTable('users');
    table.integer("user_updated_id").unsigned().references('id').inTable('users');
    table.integer("user_deleted_id").unsigned().references('id').inTable('users');
    table.integer("client_created_id").unsigned().references('id').inTable('users');

    // Timestamps automáticos para `created_at` e `updated_at`
    table.timestamps(true, true);

    // Campo opcional para a data de exclusão lógica
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("help");
}
