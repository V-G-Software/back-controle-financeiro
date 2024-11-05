import { type Context } from "@/server/context";

export async function applyUpdate<TWhere extends Record<string, string | number | boolean>, TData>(
    context: Context,
    table: string,
    where: TWhere,
    data: TData
): Promise<boolean> {
    const { database } = context;

    const result = await database(table).where(where).update(data);

    if (result === 0) {
        throw new Error("Erro na edição dos dados!");
    }

    return true;
}
