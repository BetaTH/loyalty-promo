/*
  Warnings:

  - The primary key for the `admin_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `admin_users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `purshaces` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `purshaces` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `user_id` on the `purshaces` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "purshaces" DROP CONSTRAINT "purshaces_user_id_fkey";

-- AlterTable
ALTER TABLE "admin_users" DROP CONSTRAINT "admin_users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "admin_users_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "purshaces" DROP CONSTRAINT "purshaces_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "purshaces_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "purshaces" ADD CONSTRAINT "purshaces_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
