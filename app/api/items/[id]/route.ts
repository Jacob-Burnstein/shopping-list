import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/index";
import getId from "../../../utils";

export async function GET(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  const storeId = getId(req.url);
  try {
    const items = await prisma.itemList.findMany({
      where: { UserId: 1, StoreId: storeId },
    });
    return NextResponse.json(items);
  } catch (err) {
    console.error(err);
    NextResponse.json({ err: "Internal Server Error" }), { status: 500 };
  }
}
