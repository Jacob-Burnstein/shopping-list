import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/index";
const jwt = require("jsonwebtoken");
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

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
      // const correctPassword = await prisma.user.findUnique({
      //   where: {
      //     UserName: username,
      //     Password: await bcrypt.compare(password),
      //   },
      // });
      if (!userExists) {
        return NextResponse.json(
          { message: "Username not found" },
          { status: 404 }
        );
      } else if (await bcrypt.compare(password, userExists.Password)) {
        const tokenValue = jwt.sign({ id: userExists.Id }, process.env.JWT);
        cookieStore.set("token", tokenValue);
        cookieStore.set("username", userExists.UserName);
        return NextResponse.json({
          message: "Successful Login!!",
          username: userExists.UserName,
        });
      } else
        return NextResponse.json(
          { message: "Invalid credentials" },
          { status: 401 }
        );
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Internal Server Error" });
    }
  return NextResponse.json({ message: "Internal Server Error" });
}
