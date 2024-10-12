-- CreateEnum
CREATE TYPE "Type" AS ENUM ('shake', 'comum');

-- CreateTable
CREATE TABLE "usuarios_admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "usuarios_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "data_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimo_ciclo_de_premio_shake" TIMESTAMP(3),
    "ultimo_ciclo_de_premio_comum" TIMESTAMP(3),

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compra" (
    "id" SERIAL NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" "Type" NOT NULL DEFAULT 'shake',
    "valor" DOUBLE PRECISION NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "premio" (
    "id" SERIAL NOT NULL,
    "tipo" "Type" NOT NULL DEFAULT 'shake',
    "data_inicio_do_ciclo_de_premio" TIMESTAMP(3) NOT NULL,
    "data_fim_do_ciclo_de_premio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "premio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_admin_email_key" ON "usuarios_admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");

-- AddForeignKey
ALTER TABLE "compra" ADD CONSTRAINT "compra_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premio" ADD CONSTRAINT "premio_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
