import { options } from "@/next-admin-options";
import { TransactionPrismaClient, prisma as prismaClient } from "@/db/prisma";
import { ActionParams, ModelName } from "@premieroctet/next-admin";
import {
  searchPaginatedResource as nextAdminSearchPaginatedResource,
  deleteResourceItems as nextAdminDeleteResourceItems,
  submitForm as nextAdminSubmitForm,
  SearchPaginatedResourceParams,
} from "@premieroctet/next-admin/dist/actions";
import { PrismaClient } from "@prisma/client";

type UpdateSmoothieAwardRoundWithPurchaseProps = {
  params: ActionParams;
  formData: FormData;
  customerId: number;
  createdAt: Date;
};

export class NextAdminRepository {
  async submitForm(
    params: ActionParams,
    formData: FormData,
    transactionPrisma?: TransactionPrismaClient
  ) {
    const prisma = this.getPrismaClient(transactionPrisma);
    return nextAdminSubmitForm({ ...params, options, prisma }, formData);
  }

  async deleteResourceItems(
    model: ModelName,
    ids: string[] | number[],
    transactionPrisma?: TransactionPrismaClient
  ) {
    const prisma = this.getPrismaClient(transactionPrisma);
    return nextAdminDeleteResourceItems(prisma, model, ids);
  }

  async searchPaginatedResource(
    actionParams: ActionParams,
    params: SearchPaginatedResourceParams,
    transactionPrisma?: TransactionPrismaClient
  ) {
    const prisma = this.getPrismaClient(transactionPrisma);
    return nextAdminSearchPaginatedResource(
      { ...actionParams, options, prisma },
      params
    );
  }

  async updateSmoothieAwardRoundWithPurchase({
    customerId,
    createdAt,
    formData,
    params,
  }: UpdateSmoothieAwardRoundWithPurchaseProps) {
    return prismaClient.$transaction(async (tx) => {
      await tx.customer.update({
        where: {
          id: customerId,
        },
        data: {
          lastSmoothieAwardRound: createdAt,
        },
      });
      return this.submitForm(params, formData, tx);
    });
  }

  async updateSmoothieAwardRoundWithAward(
    params: ActionParams,
    formData: FormData,
    customerId: number
  ) {
    return this.getPrismaClient().$transaction(async (tx) => {
      await tx.customer.update({
        where: {
          id: customerId,
        },
        data: {
          lastSmoothieAwardRound: null,
        },
      });
      return this.submitForm(params, formData, tx);
    });
  }

  private getPrismaClient(
    transactionPrisma?: TransactionPrismaClient
  ): PrismaClient {
    if (transactionPrisma) {
      return transactionPrisma as PrismaClient;
    }
    return prismaClient;
  }
}
