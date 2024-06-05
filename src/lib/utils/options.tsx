import { NextAdminOptions } from '@premieroctet/next-admin'
import { formatPhoneNumber } from '../functions/format-phone-number'
import InputPhoneNumber from '@/components/input-phone-number'

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
        },
      },
      edit: {
        display: ['name', 'email', 'cpf', 'phoneNumber'],
        fields: {
          phoneNumber: {
            input: <InputPhoneNumber />,
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
          created_at: {
            formatter: (date) => {
              return new Date(date).toLocaleString('pt-BR').split(/[\s,]+/)[0]
            },
          },
        },
      },
    },
  },
  forceColorScheme: 'system',
}
