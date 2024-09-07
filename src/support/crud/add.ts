import { Context } from "@/server/contracts";

export async function applyInsert(
    context: Context,
    table: string,
    data: Record<string, string | number>,
): Promise<Boolean> {
    const { database } = context

  const result: number = await database(table).insert(data) 

  if (result === 0) {
    throw new Error("Erro na inserção de dados!")
  }

  return true
}
