'use client'
import { formatPhoneNumber } from '@/lib/functions/format-phone-number'
import { parseIntNumber } from '@/lib/functions/parse-int-number'
import { CustomInputProps } from '@premieroctet/next-admin'
import { ChangeEvent } from 'react'
import { Input } from './input'

type Props = CustomInputProps

export function InputPhoneNumber({
  value,
  name,
  onChange,
  disabled,
  required,
}: Props) {
  function handleChange({ target, ...e }: ChangeEvent<HTMLInputElement>) {
    const phoneNumber = parseIntNumber(target.value)
    onChange?.({
      ...e,
      target: { ...target, value: phoneNumber },
    })
  }

  return (
    <>
      <Input
        disabled={disabled}
        required={required}
        value={formatPhoneNumber(value ?? '')}
        onChange={handleChange}
        placeholder="(00) 90000-0000"
      />
      <input type="hidden" name={name} value={value ?? ''} />
    </>
  )
}
