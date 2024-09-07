import { Context } from "@/server/contracts";

export async function applyFindOne(
    context: Context,
    table: string,
    id:   string | number,
    select: string[]
): Promise<Record<string, string | number>> {
    const { database } = context
    
    return await database(table).where(id).select(select)
}