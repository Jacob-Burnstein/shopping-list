import { TokenInfo } from "./../../utils/interfaces/TokenInfo";
import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/index";
import getId from "../../../utils/getIdFromUrl";
import getIdFromToken from "../../../utils/getIdFromToken";
import getTokenInfo from "../../../utils/getTokenInfo";

export async function GET(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  const storeId = getId(req.url);

  const tokenInfo = getTokenInfo();

  if (tokenInfo) {
    try {
      const items = await prisma.itemList.findMany({
        where: { StoreId: storeId },
      });
      return NextResponse.json(items);
    } catch (err) {
      console.error(err);
      NextResponse.json({ err: "Internal Server Error" }), { status: 500 };
    }
  } else NextResponse.json({ err: "Unauthorized", status: 401 });
}

export async function POST(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  const tokenInfo = getTokenInfo();
  const userId = getIdFromToken(tokenInfo);
  const formData = await req.formData();
  const itemName = formData.get("itemName");
  const storeId = getId(req.url);

  if (tokenInfo && itemName && typeof itemName === "string") {
    try {
      const newItem = await prisma.itemList.create({
        data: { ItemName: itemName, UserId: userId, StoreId: storeId },
      });
      return NextResponse.json(newItem);
    } catch (err) {
      console.error(err);
      return NextResponse.json(err);
    }
  } else return NextResponse.json({ error: "Error adding Item" });
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const tokenInfo = getTokenInfo();
  const itemId = getId(req.url);

  if (tokenInfo) {
    try {
      await prisma.itemList.delete({
        where: { Id: itemId },
      });
      return NextResponse.json("Item deleted successfully");
    } catch (err) {
      console.error(err);
      return NextResponse.json(err);
    }
  } else NextResponse.json({ err: "Unauthorized", status: 401 });
}
