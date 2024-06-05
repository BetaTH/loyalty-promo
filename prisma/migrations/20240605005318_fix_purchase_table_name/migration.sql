/*
  Warnings:

  - You are about to drop the `purshaces` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "purshaces" DROP CONSTRAINT "purshaces_user_id_fkey";

-- DropTable
DROP TABLE "purshaces";

-- CreateTable
CREATE TABLE "purchases" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "Type" NOT NULL DEFAULT 'shake',
    "amount" DECIMAL(65,30) NOT NULL,
    "isGift" BOOLEAN NOT NULL DEFAULT false,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
