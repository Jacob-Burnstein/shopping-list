import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/index";
const jwt = require("jsonwebtoken");
import { cookies } from "next/headers";

export async function POST(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
  const cookieStore = cookies();

  const formData = await req.formData();

  const username = formData.get("username");
  const password = formData.get("password");
  if (
    username &&
    password &&
    typeof username === "string" &&
    typeof password === "string"
  )
    try {
      const userExists = await prisma.user.findUnique({
        where: {
          UserName: username,
        },
      });
      const correctPassword = await prisma.user.findUnique({
        where: {
          UserName: username,
          Password: password,
        },
      });
      if (!userExists) {
        return NextResponse.json(
          { message: "Username not found" },
          { status: 404 }
        );
      } else if (!correctPassword) {
        return NextResponse.json(
          { message: "Incorrect Password" },
          { status: 401 }
        );
      } else {
        const tokenValue = jwt.sign({ id: userExists.Id }, process.env.JWT);
        cookieStore.set("token", tokenValue);
        return NextResponse.json({
          token: tokenValue,
          message: "Successful Login!!",
          username: userExists.UserName,
        });
      }
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Internal Server Error" });
    }
  return NextResponse.json({ message: "Internal Server Error" });
}
