export function normalizePhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, '') // Remove tudo que não é dígito
}
