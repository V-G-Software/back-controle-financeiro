import { type Context } from "@/server/context";

export async function applyFindAll<T>(
    context: Context,
    table: string,
    select: string[]
): Promise<T[]> {
    const { database } = context

    const result = await database(table).select(select);

    return result as T[]
}
