import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params: { slug: asin } }: { params: { slug: string } }
) {
  const itemImages = await prisma.itemImages.findFirst({
    where: {
      item_asin: asin,
    },
  });

  if (!itemImages) {
    return NextResponse.json({ error: "Item Not Found" }, { status: 404 });
  }

  return NextResponse.json(itemImages);
}
