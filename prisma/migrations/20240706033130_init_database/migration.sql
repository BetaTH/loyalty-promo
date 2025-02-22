-- CreateEnum
CREATE TYPE "Type" AS ENUM ('smoothie', 'suplemento');

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

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compra" (
    "id" SERIAL NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" "Type" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "premio" (
    "id" SERIAL NOT NULL,
    "tipo" "Type" NOT NULL,
    "data_inicio_do_ciclo_de_premio" TIMESTAMP(3) NOT NULL,
    "data_fim_do_ciclo_de_premio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "premio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartao_fidelidade" (
    "tipo" "Type" NOT NULL,
    "data_inicio_do_ciclo" TIMESTAMP(3),
    "data_fim_do_ciclo" TIMESTAMP(3),
    "pontos" INTEGER NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "cartao_fidelidade_pkey" PRIMARY KEY ("cliente_id","tipo")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_admin_email_key" ON "usuarios_admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "cartao_fidelidade_cliente_id_tipo_key" ON "cartao_fidelidade"("cliente_id", "tipo");

-- AddForeignKey
ALTER TABLE "compra" ADD CONSTRAINT "compra_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "premio" ADD CONSTRAINT "premio_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartao_fidelidade" ADD CONSTRAINT "cartao_fidelidade_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
