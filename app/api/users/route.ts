import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../prisma/index";
import getIdFromToken from "../../utils/getIdFromToken";
import getTokenInfo from "../../utils/getTokenInfo";

export async function GET(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  const tokenInfo = getTokenInfo();
  if (tokenInfo) {
    try {
      const userId = getIdFromToken(tokenInfo);
      const user = await prisma.user.findUnique({
        where: { Id: userId },
      });
      return NextResponse.json(user);
    } catch (err) {
      console.error(err);
      NextResponse.json({ err: "Internal Server Error" }), { status: 500 };
    }
  } else NextResponse.json({ err: "Unauthorized", status: 401 });
}
