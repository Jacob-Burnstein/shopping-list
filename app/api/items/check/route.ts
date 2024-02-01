import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/index";

export async function POST(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  const formData = await req.formData();
  const itemId = formData.get("Id");
  const checkedString = formData.get("Checked");
  if (itemId && typeof itemId === "string") {
    const checked = checkedString === "true";
    try {
      await prisma.itemList.update({
        where: {
          Id: parseInt(itemId),
        },
        data: { Checked: !checked },
      });
      return NextResponse.json("Item updated successfully");
    } catch (err) {
      console.error(err);
      return NextResponse.json("Error updating Item List");
    }
  } else return NextResponse.json("Error updating Item List");
}
