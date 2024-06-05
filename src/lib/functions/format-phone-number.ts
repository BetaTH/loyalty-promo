export function formatPhoneNumber(value: string): string {
  if (value.length <= 9) {
    return value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2')
  }
  if (value.length <= 11) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
  }
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}
