import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("movements", (table) => {
    table.increments("id").primary().unsigned().notNullable(); // ID autoincremental
    table.string("name").notNullable(); // Nome não nulo
    table.string("description").notNullable(); // Descrição não nula
    table.integer("status").notNullable(); // Status como inteiro e não nulo
    table.float("rate").notNullable(); // Taxa não nula
    table.float("sale").notNullable(); // Venda não nula
    
    // Chave estrangeira para a tabela 'users' com `unsigned`
    table.integer("user_id").unsigned().notNullable().references('id').inTable('users');
    table.integer("user_updated_id").unsigned().references('id').inTable('users');
    table.integer("user_deleted_id").unsigned().references('id').inTable('users');
    
    // Timestamps automáticos para `created_at` e `updated_at`
    table.timestamps(true, true); 
    
    // Campo opcional para data de exclusão lógica
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("movements");
}
