import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../prisma/index";
import getIdFromToken from "../../utils/getIdFromToken";
import getTokenInfo from "../../utils/getTokenInfo";

// Gets Stores by UserId
export async function GET(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  const tokenInfo = getTokenInfo();
  if (tokenInfo) {
    try {
      const userId = getIdFromToken(tokenInfo);
      const stores = await prisma.store.findMany({
        where: { UserId: userId },
      });
      return NextResponse.json(stores);
    } catch (err) {
      console.error(err);
      NextResponse.json({ err: "Internal Server Error" }), { status: 500 };
    }
  } else NextResponse.json({ err: "Unauthorized", status: 401 });
}

// Adds store
export async function POST(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  const tokenInfo = getTokenInfo();
  const formData = await req.formData();
  const storeName = formData.get("storeName");
  if (tokenInfo && storeName && typeof storeName === "string") {
    try {
      const newStore = await prisma.store.create({
        data: { StoreName: storeName, UserId: 1 },
      });
      return NextResponse.json(newStore);
    } catch (err) {
      console.error(err);
      return NextResponse.json(err);
    }
  } else return NextResponse.json({ error: "Error adding store" });
}
