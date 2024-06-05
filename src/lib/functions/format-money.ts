import { parseIntNumber } from './parse-int-number'

export function formatMoney(value: string) {
  const money = parseIntNumber(value)
  const formattedMoney = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(Number(money) / 100)

  return formattedMoney
}
