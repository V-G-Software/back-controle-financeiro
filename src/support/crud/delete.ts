import { Context } from "@/server/contracts";
import type { Knex } from "knex";

export async function applyDelete(
    context: Context,
    table: string,
    where: Record<string, string | number>,
    softDelete: boolean
): Promise<Boolean> {
    const { database } = context
    
    const result = await applyDeleteOrSoftDelete(database, table, where, softDelete);

    if (result === 0) {
        throw new Error("Erro na deleção dos dados!")
    }
    return true
}

async function applyDeleteOrSoftDelete(database: Knex, table: string, where: Record<string, string | number>, softDelete: boolean): Promise<number> {
    if (softDelete) {
        return await database(table).where(where).update({ deleted_at: new Date() })
    }
    return await database(table).where(where).del()
}
