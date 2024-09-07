import { Context } from "@/server/contracts";

export async function applyUpdate(
    context: Context,
    table: string,
    where: Record<string, string | number>,
    data:  Record<string, string | number>
): Promise<Boolean> {
    const { database } = context
    
    const result = await database(table).where(where).update(data)

    if (result === 0) {
        throw new Error("Erro na edição dos dados!")
    }

    return true
}