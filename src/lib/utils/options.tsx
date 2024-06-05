import { NextAdminOptions } from '@premieroctet/next-admin'
import { InputPhoneNumber } from '@/components/admin-custom-inputs/input-phone-number'
import { formatPhoneNumber } from '../functions/format-phone-number'
import { formatMoney } from '../functions/format-money'
import { InputMoney } from '@/components/admin-custom-inputs/input-money'
import { formatCPF } from '../functions/format-cpf'
import { InputCPF } from '@/components/admin-custom-inputs/input-cpf'

export const options: NextAdminOptions = {
  basePath: '/admin',
  title: 'SA Admin',
  model: {
    User: {
      toString: (user) => `${user.name} (${user.email})`,
      title: 'Clientes',
      icon: 'UsersIcon',
      aliases: {
        cpf: 'CPF',
        name: 'Nome',
        phoneNumber: 'Telefone',
        created_at: 'Data de Cadastro',
        purchase: 'Compras',
      },
      list: {
        fields: {
          created_at: {
            formatter: (date) => {
              return new Date(date as unknown as string)
                ?.toLocaleString('pt-BR')
                .split(/[\s,]+/)[0]
            },
          },
          phoneNumber: {
            formatter: formatPhoneNumber,
          },
          cpf: {
            formatter: formatCPF,
          },
        },
      },
      edit: {
        display: ['name', 'email', 'cpf', 'phoneNumber'],
        fields: {
          phoneNumber: {
            input: <InputPhoneNumber />,
          },
          cpf: {
            input: <InputCPF />,
          },
        },
      },
    },
    Purchase: {
      toString: (purchase) =>
        `${purchase.user.name} ${purchase.user.created_at.toLocaleString('pt-BR').split(/[\s,]+/)[0]}`,
      title: 'Compras',
      icon: 'CreditCardIcon',
      aliases: {
        type: 'Tipo',
        isGift: 'É Premio',
        amount: 'Valor',
        created_at: 'Data da Compra',
        user: 'Cliente',
      },
      list: {
        display: ['id', 'type', 'amount', 'created_at', 'isGift', 'user'],
        fields: {
          user: {
            formatter: (user) => {
              return user.name
            },
          },
          amount: {
            formatter: (amount) => {
              return formatMoney(amount.toFixed(2))
            },
          },
          created_at: {
            formatter: (date) => {
              return new Date(date).toLocaleString('pt-BR').split(/[\s,]+/)[0]
            },
          },
        },
      },
      edit: {
        fields: {
          amount: {
            input: <InputMoney />,
          },
        },
      },
    },
  },
  forceColorScheme: 'system',
}
