import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";

export async function GET(request: NextRequest) {
  const itemImages = await prisma.itemImages.findMany();

  return NextResponse.json(itemImages);
}