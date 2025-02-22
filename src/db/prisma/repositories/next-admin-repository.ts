import { options } from '@/next-admin-options'
import { TransactionPrismaClient, prisma as prismaClient } from '@/db/prisma'
import { ActionParams, ModelName } from '@premieroctet/next-admin'
import {
  searchPaginatedResource as nextAdminSearchPaginatedResource,
  deleteResourceItems as nextAdminDeleteResourceItems,
  submitForm as nextAdminSubmitForm,
  SearchPaginatedResourceParams,
} from '@premieroctet/next-admin/dist/actions'
import { CardLoyalty, PrismaClient } from '@prisma/client'

type updateCardLoyaltyWithPurchaseProps = {
  params: ActionParams
  formData: FormData
  cardLoyalty: CardLoyalty
}

export class NextAdminRepository {
  async submitForm(
    params: ActionParams,
    formData: FormData,
    transactionPrisma?: TransactionPrismaClient,
  ) {
    const prisma = this.getPrismaClient(transactionPrisma)
    return nextAdminSubmitForm({ ...params, options, prisma }, formData)
  }

  async deleteResourceItems(
    model: ModelName,
    ids: string[] | number[],
    transactionPrisma?: TransactionPrismaClient,
  ) {
    const prisma = this.getPrismaClient(transactionPrisma)
    return nextAdminDeleteResourceItems(prisma, model, ids)
  }

  async searchPaginatedResource(
    actionParams: ActionParams,
    params: SearchPaginatedResourceParams,
    transactionPrisma?: TransactionPrismaClient,
  ) {
    const prisma = this.getPrismaClient(transactionPrisma)
    return nextAdminSearchPaginatedResource(
      { ...actionParams, options, prisma },
      params,
    )
  }

  async updateCardLoyalty({
    cardLoyalty,
    formData,
    params,
  }: updateCardLoyaltyWithPurchaseProps) {
    return prismaClient.$transaction(async (tx) => {
      const result = await this.submitForm(params, formData, tx)
      if (result && (result.created || result.updated)) {
        await tx.cardLoyalty.upsert({
          where: {
            customerId_type: {
              customerId: cardLoyalty.customerId,
              type: cardLoyalty.type,
            },
          },
          update: cardLoyalty,
          create: cardLoyalty,
        })
      }

      return result
    })
  }

  private getPrismaClient(
    transactionPrisma?: TransactionPrismaClient,
  ): PrismaClient {
    if (transactionPrisma) {
      return transactionPrisma as PrismaClient
    }
    return prismaClient
  }
}
