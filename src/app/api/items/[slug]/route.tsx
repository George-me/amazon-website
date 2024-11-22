import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params: { slug: asin } }: { params: { slug: string } }
) {
  const item = await prisma.items.findUnique({
    where: {
      item_asin: asin,
    },
  });

  if (!item) {
    return NextResponse.json({ error: "Item Not Found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
