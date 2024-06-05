'use client'
import { formatPhoneNumber } from '@/lib/functions/format-phone-number'
import { normalizePhoneNumber } from '@/lib/functions/normalize-phone-number'
import { CustomInputProps } from '@premieroctet/next-admin'
import { ChangeEvent } from 'react'

type Props = CustomInputProps

const InputPhoneNumber = ({
  value,
  name,
  onChange,
  disabled,
  required,
}: Props) => {
  function onValueChange({ target, ...e }: ChangeEvent<HTMLInputElement>) {
    const phoneNumber = normalizePhoneNumber(target.value)
    onChange?.({
      ...e,
      target: { ...target, value: phoneNumber },
    })
  }

  return (
    <>
      <input
        disabled={disabled}
        required={required}
        value={formatPhoneNumber(value ?? '')}
        onChange={onValueChange}
        maxLength={16}
        className="dark:bg-dark-nextadmin-background-subtle text-nextadmin-content-inverted dark:text-dark-nextadmin-content-inverted ring-nextadmin-border-default focus:ring-nextadmin-brand-default dark:focus:ring-dark-nextadmin-brand-default dark:ring-dark-nextadmin-border-strong block w-full rounded-md border-0 px-2 py-1.5 text-sm shadow-sm ring-1 ring-inset transition-colors duration-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:leading-6"
      />
      <input type="hidden" name={name} value={value ?? ''} />
    </>
  )
}
export default InputPhoneNumber
