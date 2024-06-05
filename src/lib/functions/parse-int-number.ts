export function parseIntNumber(value: string): string {
  return value.replace(/\D/g, '')
}
