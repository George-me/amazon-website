import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";

export async function GET(request: NextRequest) {
  const buyWith = await prisma.buyWith.findMany();

  return NextResponse.json(buyWith);
}
