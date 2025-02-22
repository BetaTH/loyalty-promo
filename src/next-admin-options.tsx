import { NextAdminOptions } from '@premieroctet/next-admin'
import { InputPhoneNumber } from '@/components/admin-custom-inputs/input-phone-number'
import { InputMoney } from '@/components/admin-custom-inputs/input-money'
import { InputCPF } from '@/components/admin-custom-inputs/input-cpf'
import { formatMoney } from './lib/functions/format-money'
import { formatPhoneNumber } from './lib/functions/format-phone-number'
import { formatCPF } from './lib/functions/format-cpf'

export const options: NextAdminOptions = {
  basePath: '/admin',
  title: 'Admin',
  model: {
    Customer: {
      toString: (customer) => `${customer.cpf} (${customer.email})`,
      title: 'Clientes',
      icon: 'UsersIcon',
      aliases: {
        cpf: 'CPF',
        name: 'Nome',
        email: 'Email',
        phoneNumber: 'Telefone',
        purchase: 'Compras',
        award: ' Prêmios',
        createdAt: 'Data de Cadastro',
      },
      list: {
        display: [
          'cpf',
          'name',
          'email',
          'phoneNumber',
          'purchase',
          'award',
          'createdAt',
        ],
        fields: {
          createdAt: {
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
        `${purchase.customer.name} ${purchase.customer.createdAt.toLocaleString('pt-BR').split(/[\s,]+/)[0]}`,
      title: 'Compras',
      icon: 'CreditCardIcon',
      aliases: {
        type: 'Tipo',
        amount: 'Valor',
        createdAt: 'Data da Compra',
        customer: 'Cliente',
      },
      list: {
        display: ['id', 'type', 'amount', 'createdAt', 'customer'],
        fields: {
          customer: {
            formatter: (customer) => {
              return customer.name
            },
          },
          amount: {
            formatter: (amount) => {
              return formatMoney(amount.toFixed(2))
            },
          },
          createdAt: {
            formatter: (date) => {
              return new Date(date).toLocaleString('pt-BR').split(/[\s,]+/)[0]
            },
          },
        },
        defaultSort: {
          field: 'id',
          direction: 'desc',
        },
      },
      edit: {
        fields: {
          amount: {
            input: <InputMoney />,
            validate: (value) => {
              if (!value || value <= 0) {
                return 'O valor deve ser maior que 0'
              }
              return true
            },
          },
        },
      },
    },
    Award: {
      title: 'Prêmios',
      icon: 'GiftIcon',
      aliases: {
        type: 'Tipo',
        customer: 'Cliente',
        awardRoundStartedAt: 'Data de Início do Ciclo',
        awardRoundEndedAt: 'Data de Encerramento do Ciclo',
      },
      list: {
        display: [
          'id',
          'type',
          'awardRoundStartedAt',
          'awardRoundEndedAt',
          'customer',
        ],
        fields: {
          awardRoundStartedAt: {
            formatter: (date) => {
              return new Date(date as unknown as string)
                ?.toLocaleString('pt-BR')
                .split(/[\s,]+/)[0]
            },
          },
          awardRoundEndedAt: {
            formatter: (date) => {
              return new Date(date as unknown as string)
                ?.toLocaleString('pt-BR')
                .split(/[\s,]+/)[0]
            },
          },
        },
      },
      edit: {
        display: ['id', 'type', 'customer'],
        fields: {},
      },
    },
  },
  forceColorScheme: 'system',
}
