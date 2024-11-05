import { type Context } from "@/server/context";
import type { Knex } from "knex";

export async function applyDelete<T extends Record<string, any>>(
    context: Context,
    table: string,
    softDelete: boolean,
    where: T
): Promise<boolean> {
    const { database } = context;

    const result = await applyDeleteOrSoftDelete(database, table, where, softDelete);

    if (result === 0) {
        throw new Error("Erro na deleção dos dados!");
    }

    return true;
}

async function applyDeleteOrSoftDelete<T extends Record<string, any>>(
    database: Knex,
    table: string,
    where: T,
    softDelete: boolean
): Promise<number> {
    if (softDelete) {
        return await database(table)
            .where(where)
            .update({ deleted_at: new Date() });
    }

    return await database(table)
        .where(where)
        .del();
}
