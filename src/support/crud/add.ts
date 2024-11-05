import { type Context } from "@/server/context";


export async function applyInsert<T>(
  context: Context,
  table: string,
  data: T
): Promise<boolean> {
  const { database } = context;

  const result: number[] = await database(table).insert(data);

  if (result.length === 0) {
    throw new Error("Erro na inserção de dados!");
  }

  return true;
}
