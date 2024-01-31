import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../prisma/index";

export async function GET(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  // if (req.method === "GET") {
  try {
    const stores = await prisma.store.findMany({
      where: { UserId: 1 },
    });
    console.log("response: ", res);
    return NextResponse.json(stores);

    // else console.log(": (");
  } catch (err) {
    console.error(err);
    NextResponse.json({ err: "Internal Server Error" }), { status: 500 };
  }
  // }
  // else {
  //   console.log("Invalid request!");
  // }
}

export async function POST(req: NextRequest, res: NextResponse) {
  // const { storeName } = req.body;
  const testName = "Chuckiest Cheese";
  try {
    const newStore = await prisma.store.create({
      data: { StoreName: testName, UserId: 1 },
    });
    return NextResponse.json(newStore);
  } catch (err) {
    console.error(err);
    return NextResponse.json(err);
  }
}

// export default {
//   getHandler,
// };
