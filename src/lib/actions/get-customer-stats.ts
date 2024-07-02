"use server";

import { CustomersRepository } from "@/db/prisma/repositories/customers-repository";
import { getSession } from "../sessions";
import { getFinalAwardRoundDate } from "../functions/get-final-round-date";

export async function getCustomerStats() {
  const session = await getSession();
  if (!session.hasSession) {
    return null;
  }
  if (session.role !== "COMMON") {
    return null;
  }

  const customerId = Number(session.sub);
  const customersRepository = new CustomersRepository();
  const customer = await customersRepository.getCustomerById(customerId);

  if (!customer) {
    return null;
  }
  const customerResponse = {
    name: customer.name,
    email: customer.email,
    phoneNumber: customer.phoneNumber,
  };

  const lastSmoothieAwardRound = customer.lastSmoothieAwardRound;

  if (lastSmoothieAwardRound === null) {
    return {
      customer: customerResponse,
      smoothieCount: 0,
    };
  }
  const dateNow = new Date();
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

  if (purchaseCountInARound < 10 && dateNow > finalSmoothieAwardRound) {
    return {
      customer: customerResponse,
      smoothieCount: 0,
    };
  }

  return {
    customer: customerResponse,
    smoothieCount: purchaseCountInARound,
  };
}
