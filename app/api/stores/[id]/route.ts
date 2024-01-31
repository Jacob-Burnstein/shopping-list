import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/index";
import { useParams } from "next/navigation";

export async function DELETE(req: NextRequest, res: NextResponse) {
  const splitUrl = req.url.split("");
  const storeId: number = parseInt(splitUrl[splitUrl.length - 1]);

  console.log("Id: ", storeId);

  try {
    await prisma.store.delete({
      where: {
        Id: storeId,
      },
    });
    return NextResponse.json("Store deleted.");
  } catch (err) {
    console.error(err);
    return NextResponse.json(err);
  }
}
