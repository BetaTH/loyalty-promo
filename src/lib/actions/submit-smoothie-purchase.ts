"use server";

import { CustomersRepository } from "@/db/prisma/repositories/customers-repository";
import { ActionParams } from "@premieroctet/next-admin";
import { getFinalAwardRoundDate } from "../functions/get-final-round-date";
import { NextAdminRepository } from "@/db/prisma/repositories/next-admin-repository";

export const submitSmoothiePurchase = async (
  params: ActionParams,
  formData: FormData,
  customersRepository: CustomersRepository,
  nextAdminRepository: NextAdminRepository
) => {
  const customerId = Number(formData.get("customer"));
  const lastSmoothieAwardRound =
    await customersRepository.getLastSmoothieAwardRound(customerId);
  const createdAt = new Date();
  formData.append("createdAt", createdAt.toISOString());

  if (lastSmoothieAwardRound === null) {
    return nextAdminRepository.updateSmoothieAwardRoundWithPurchase({
      params,
      formData,
      customerId,
      createdAt,
    });
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

  if (purchaseCountInARound >= 10) {
    const award = await customersRepository.getCustomerAward(
      customerId,
      lastSmoothieAwardRound,
      "smoothie"
    );
    if (award === null) {
      return {
        created: false,
        error: "Cliente elegível, adicionar prêmio",
      };
    }
    return nextAdminRepository.updateSmoothieAwardRoundWithPurchase({
      params,
      formData,
      customerId,
      createdAt,
    });
  }
  if (createdAt > finalSmoothieAwardRound) {
    return nextAdminRepository.updateSmoothieAwardRoundWithPurchase({
      params,
      formData,
      customerId,
      createdAt,
    });
  }
  return nextAdminRepository.submitForm(params, formData);
};
