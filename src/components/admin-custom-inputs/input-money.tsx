'use client'
import { CustomInputProps } from '@premieroctet/next-admin'
import { ChangeEvent } from 'react'
import { Input } from './input'
import { formatMoney } from '@/lib/functions/format-money'
import { parseMoney } from '@/lib/functions/parse-money'

type Props = CustomInputProps

export function InputMoney({
  value,
  name,
  onChange,
  disabled,
  required,
}: Props) {
  const handleChange = ({ target, ...e }: ChangeEvent<HTMLInputElement>) => {
    const rawValue = target.value
    const parsedValue = parseMoney(formatMoney(rawValue))
    onChange?.({
      ...e,
      target: { ...target, value: String(parsedValue) },
    })
  }
  return (
    <>
      <Input
        disabled={disabled}
        required={required}
        value={formatMoney(Number(value ?? 0).toFixed(2))}
        onChange={handleChange}
      />
      <input type="hidden" name={name} value={value} defaultValue={0} />
    </>
  )
}
