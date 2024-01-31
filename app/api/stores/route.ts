import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../prisma/index";

export async function GET(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  try {
    const stores = await prisma.store.findMany({
      where: { UserId: 1 },
    });
    return NextResponse.json(stores);
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
  const storeName = formData.get("storeName");
  if (storeName && typeof storeName === "string") {
    try {
      const newStore = await prisma.store.create({
        data: { StoreName: storeName, UserId: 1 },
      });
      return NextResponse.json(newStore);
    } catch (err) {
      console.error(err);
      return NextResponse.json(err);
    }
  } else return NextResponse.json({ error: "Invalid storeName" });
}
