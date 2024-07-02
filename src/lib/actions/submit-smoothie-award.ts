"use server";

import { CustomersRepository } from "@/db/prisma/repositories/customers-repository";
import { ActionParams } from "@premieroctet/next-admin";
import { getFinalAwardRoundDate } from "../functions/get-final-round-date";
import { NextAdminRepository } from "@/db/prisma/repositories/next-admin-repository";

export const submitSmoothieAward = async (
  params: ActionParams,
  formData: FormData,
  customersRepository: CustomersRepository,
  nextAdminRepository: NextAdminRepository
) => {
  const customerId = Number(formData.get("customer"));

  const lastSmoothieAwardRound =
    await customersRepository.getLastSmoothieAwardRound(customerId);

  if (lastSmoothieAwardRound === null) {
    return {
      created: false,
      error: "Só possível adicionar prêmios para clientes elegíveis",
    };
  }

  const finalSmoothieAwardRound = getFinalAwardRoundDate(
    lastSmoothieAwardRound,
    30
  );

  const purchaseCountInARound =
    await customersRepository.getSmoothiePurchaseCountInARound(
      customerId,
      lastSmoothieAwardRound,
      finalSmoothieAwardRound
    );

  if (purchaseCountInARound < 10) {
    return {
      created: false,
      error: "Só possível adicionar prêmios para clientes elegíveis",
    };
  }
  formData.append("awardRoundStartedAt", lastSmoothieAwardRound.toISOString());

  return nextAdminRepository.updateSmoothieAwardRoundWithAward(
    params,
    formData,
    customerId
  );
};
