import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../prisma/prisma/prisma";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      const stores = await prisma.store.findMany({
        where: { UserId: 1 },
      });
      res.json(stores);
    } else {
      res.status(405).json({ error: "Method Not Allowed!" });
    }
  } catch (err) {
    console.error(err);
    return res.json(err);
  }
}
