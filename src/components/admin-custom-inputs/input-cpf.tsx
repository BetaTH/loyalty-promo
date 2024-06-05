'use client'
import { CustomInputProps } from '@premieroctet/next-admin'
import { ChangeEvent } from 'react'
import { Input } from './input'
import { formatCPF } from '@/lib/functions/format-cpf'
import { parseIntNumber } from '@/lib/functions/parse-int-number'

type Props = CustomInputProps

export function InputCPF({ value, name, onChange, disabled, required }: Props) {
  const handleChange = ({ target, ...e }: ChangeEvent<HTMLInputElement>) => {
    const rawValue = target.value
    const parsedValue = parseIntNumber(formatCPF(rawValue))
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
        value={formatCPF(value ?? '')}
        onChange={handleChange}
        placeholder="000.000.000-00"
      />
      <input type="hidden" name={name} value={value} />
    </>
  )
}
