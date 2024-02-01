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
      where: { StoreId: storeId },
    });
    return NextResponse.json(items);
  } catch (err) {
    console.error(err);
    NextResponse.json({ err: "Internal Server Error" }), { status: 500 };
  }
}

export async function POST(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  const formData = await req.formData();
  const itemName = formData.get("itemName");
  const storeId = getId(req.url);
  if (itemName && typeof itemName === "string") {
    try {
      const newItem = await prisma.itemList.create({
        data: { ItemName: itemName, UserId: 1, StoreId: storeId },
      });
      return NextResponse.json(newItem);
    } catch (err) {
      console.error(err);
      return NextResponse.json(err);
    }
  } else return NextResponse.json({ error: "Invalid Item Name" });
}
