import { $Enums } from '@prisma/client'
import { prisma } from '..'

export class CardLoyaltyRepository {
  constructor() {}

  async getSmoothieCardWithAValidRound(customerId: number, dateNow: Date) {
    const smoothieRound = await prisma.cardLoyalty.findUnique({
      where: {
        customerId_type: {
          customerId,
          type: 'smoothie',
        },
        OR: [
          {
            AND: [
              {
                roundStartAt: {
                  lte: dateNow,
                },
              },
              {
                roundEndAt: {
                  gte: dateNow,
                },
              },
            ],
          },
          {
            points: {
              gte: 10,
            },
          },
        ],
      },
    })
    return (
      smoothieRound || {
        customerId,
        type: 'smoothie',
        points: 0,
        roundEndAt: null,
        roundStartAt: null,
      }
    )
  }

  async getCardsWithAValidRound(customerId: number, dateNow: Date) {
    const cards = await prisma.cardLoyalty.findMany({
      where: {
        customerId,
        OR: [
          {
            AND: [
              {
                roundStartAt: {
                  lte: dateNow,
                },
              },
              {
                roundEndAt: {
                  gte: dateNow,
                },
              },
            ],
          },
          {
            points: {
              gte: 10,
            },
          },
        ],
      },
      select: {
        type: true,
        points: true,
      },
    })

    const cardTypes = Object.values($Enums.Type)
    cardTypes.forEach((cardType) => {
      const card = cards.find((card) => card.type === cardType)
      if (!card) {
        cards.push({
          type: cardType,
          points: 0,
        })
      }
    })

    return cards
  }
}
