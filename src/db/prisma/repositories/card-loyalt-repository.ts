import { prisma } from "..";

export class CardLoyaltyRepository {
  constructor() {}

  async getSmoothieCardWithAValidRound(customerId: number, dateNow: Date) {
    const smoothieRound = await prisma.cardLoyalty.findUnique({
      where: {
        customerId_type: {
          customerId: customerId,
          type: "smoothie",
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
    });
    console.log(new Date());
    console.log(smoothieRound);
    return (
      smoothieRound || {
        customerId: customerId,
        type: "smoothie",
        points: 0,
        roundEndAt: null,
        roundStartAt: null,
      }
    );
  }
}
