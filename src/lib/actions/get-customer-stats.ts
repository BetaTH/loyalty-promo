"use server";

import { CustomersRepository } from "@/db/prisma/repositories/customers-repository";
import { getSession } from "../sessions";
import { CardLoyaltyRepository } from "@/db/prisma/repositories/card-loyalt-repository";

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
  const cardLoyaltyRepository = new CardLoyaltyRepository();
  const customer = await customersRepository.getCustomerById(customerId);

  if (!customer) {
    return null;
  }

  const dateNow = new Date();
  const smoothieCard =
    await cardLoyaltyRepository.getSmoothieCardWithAValidRound(
      customerId,
      dateNow
    );

  const customerResponse = {
    name: customer.name,
    email: customer.email,
    phoneNumber: customer.phoneNumber,
  };

  return {
    customer: customerResponse,
    smoothieCount: smoothieCard.points,
  };
}
