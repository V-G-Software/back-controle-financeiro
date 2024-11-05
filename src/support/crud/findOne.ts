import { type Context } from "@/server/context";

export async function applyFindOne<T>(
    context: Context,
    table: string,
    id:   string | number,
    select: string[]
): Promise<T> {
    const { database } = context

    return await database(table).where(id).select(select).first()
}
