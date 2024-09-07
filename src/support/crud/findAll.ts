import { Context } from "@/server/contracts";

export async function applyFindAll(
    context: Context,
    table: string,
    id:   string | number,
    select: string[]
): Promise<Array<Record<string, string | number>>> {
    const { database } = context
    
    return  database(table).select(select)
}