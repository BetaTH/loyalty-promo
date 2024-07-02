import { AdminsRepository } from "@/db/prisma/repositories/admins-repository";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET() {
  const adminsRepository = new AdminsRepository();
  const adminExists = await adminsRepository.getFirst();

  return NextResponse.json({ adminExists: !!adminExists });
}
