/*
  Warnings:

  - The values [shake,comum] on the enum `Type` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `ultimo_ciclo_de_premio_comum` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `ultimo_ciclo_de_premio_shake` on the `clientes` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Type_new" AS ENUM ('smoothie', 'suplemento');
ALTER TABLE "premio" ALTER COLUMN "tipo" DROP DEFAULT;
ALTER TABLE "compra" ALTER COLUMN "tipo" DROP DEFAULT;
ALTER TABLE "compra" ALTER COLUMN "tipo" TYPE "Type_new" USING ("tipo"::text::"Type_new");
ALTER TABLE "premio" ALTER COLUMN "tipo" TYPE "Type_new" USING ("tipo"::text::"Type_new");
ALTER TYPE "Type" RENAME TO "Type_old";
ALTER TYPE "Type_new" RENAME TO "Type";
DROP TYPE "Type_old";
COMMIT;

-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "ultimo_ciclo_de_premio_comum",
DROP COLUMN "ultimo_ciclo_de_premio_shake",
ADD COLUMN     "ultimo_ciclo_de_premio_smoothie" TIMESTAMP(3),
ADD COLUMN     "ultimo_ciclo_de_premio_suplemento" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "compra" ALTER COLUMN "tipo" DROP DEFAULT;

-- AlterTable
ALTER TABLE "premio" ALTER COLUMN "tipo" DROP DEFAULT;
