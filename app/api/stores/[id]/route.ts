import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/index";
import getId from "../../../utils/getIdFromUrl";
import getIdFromToken from "../../../utils/getIdFromToken";
import getTokenInfo from "../../../utils/getTokenInfo";

export async function DELETE(req: NextRequest, res: NextResponse) {
  const storeId = getId(req.url);
  const tokenInfo = getTokenInfo();
  if (tokenInfo) {
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
  } else NextResponse.json({ err: "Unauthorized", status: 401 });
}
