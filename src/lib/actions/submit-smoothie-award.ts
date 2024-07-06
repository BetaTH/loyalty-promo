"use server";

import { ActionParams } from "@premieroctet/next-admin";
import { NextAdminRepository } from "@/db/prisma/repositories/next-admin-repository";
import { CardLoyaltyRepository } from "@/db/prisma/repositories/card-loyalt-repository";

export const submitSmoothieAward = async (
  params: ActionParams,
  formData: FormData,
  cardLoyaltyRepository: CardLoyaltyRepository,
  nextAdminRepository: NextAdminRepository
) => {
  const customerId = Number(formData.get("customer"));

  const smoothieCard =
    await cardLoyaltyRepository.getSmoothieCardWithAValidRound(
      customerId,
      new Date()
    );

  let updatedSmoothieCard = {
    ...smoothieCard,
    roundStartAt: null,
    roundEndAt: null,
    points: 0,
  };

  if (
    smoothieCard.roundStartAt === null ||
    smoothieCard.roundEndAt === null ||
    smoothieCard.points < 10
  ) {
    return {
      created: false,
      error: "Só possível adicionar prêmios para clientes elegíveis",
    };
  }

  formData.append(
    "awardRoundStartedAt",
    smoothieCard.roundStartAt.toISOString()
  );

  return nextAdminRepository.updateCardLoyalty({
    params,
    formData,
    cardLoyalty: updatedSmoothieCard,
  });
};
