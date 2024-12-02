// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "../../../../../../prisma/client";

// export async function GET(
//   request: NextRequest,
//   { params: { slug: asin } }: { params: { slug: string } }
// ) {
//   const buyWith = await prisma.buyWith.findMany({
//     where: {
//       item_asin: asin,
//     },
//   });

//   if (!buyWith) {
//     return NextResponse.json({ error: "Item Not Found" }, { status: 404 });
//   }

//   return NextResponse.json(buyWith);
// }

// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "../../../../../../prisma/client";

// export async function GET(
//   request: NextRequest,
//   { params: { slug: asin } }: { params: { slug: string } }
// ) {
//   const buyWith = await prisma.buyWith.findMany({
//     where: {
//       item_asin: asin,
//     },
//     include: {
//       item: {
//         // Include the related item
//         include: {
//           ItemImages: true, // Include item images
//         },
//       },
//     },
//   });

//   if (!buyWith || buyWith.length === 0) {
//     return NextResponse.json(
//       { error: "No related items found" },
//       { status: 404 }
//     );
//   }

//   return NextResponse.json(buyWith);
// }

//Second
// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "../../../../../../prisma/client";

// export async function GET(
//   request: NextRequest,
//   { params: { slug: asin } }: { params: { slug: string } }
// ) {
//   const buyWith = await prisma.buyWith.findMany({
//     where: {
//       item_asin: asin,
//     },
//     include: {
//       item: true, // Include the original `item` relation if needed
//     },
//   });

//   // Fetch details of the `grouped_item_asin`
//   const groupedItems = await Promise.all(
//     buyWith.map(async (relation) => {
//       const groupedItem = await prisma.items.findUnique({
//         where: {
//           item_asin: relation.grouped_item_asin,
//         },
//         include: {
//           ItemImages: true, // Include item images
//         },
//       });
//       return {
//         ...relation,
//         groupedItem,
//       };
//     })
//   );

//   if (!groupedItems || groupedItems.length === 0) {
//     return NextResponse.json(
//       { error: "No related items found" },
//       { status: 404 }
//     );
//   }

//   return NextResponse.json(groupedItems);
// }

//Third
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params: { slug: asin } }: { params: { slug: string } }
) {
  // Fetch the main item
  const mainItem = await prisma.items.findUnique({
    where: {
      item_asin: asin,
    },
    include: {
      ItemImages: true, // Include item images for the main item
    },
  });

  if (!mainItem) {
    return NextResponse.json({ error: "Item Not Found" }, { status: 404 });
  }

  // Fetch the buyWith relations and their grouped items
  const buyWithRelations = await prisma.buyWith.findMany({
    where: {
      item_asin: asin,
    },
  });

  const groupedItems = await Promise.all(
    buyWithRelations.map(async (relation) => {
      const groupedItem = await prisma.items.findUnique({
        where: {
          item_asin: relation.grouped_item_asin,
        },
        include: {
          ItemImages: true, // Include item images for grouped items
        },
      });
      return groupedItem; // Only include the grouped item details
    })
  );

  // Combine the main item and grouped items into a single array
  const combinedItems = [
    mainItem,
    ...groupedItems.filter((item) => item !== null),
  ];

  return NextResponse.json(combinedItems);
}
