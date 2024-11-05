export function getVariable(key: string, fallback: string | number): string {
  const variable = process.env[key];
  if (variable != null) {
    return variable;
  }
  return fallback as string;
}
