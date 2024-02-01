import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/index";
import getId from "../../../utils/";

export async function DELETE(req: NextRequest, res: NextResponse) {
  const storeId = getId(req.url);
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
