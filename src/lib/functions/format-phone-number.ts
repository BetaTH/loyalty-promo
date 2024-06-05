export function formatPhoneNumber(phoneNumber: string): string {
  if (phoneNumber.length <= 11) {
    // Formato para números de 11 dígitos
    return phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
  } else if (phoneNumber.length <= 12) {
    // Formato para números de 12 dígitos
    return phoneNumber.replace(/^(\d{3})(\d{5})(\d{4})$/, '($1) $2-$3')
  }
  return phoneNumber
}
