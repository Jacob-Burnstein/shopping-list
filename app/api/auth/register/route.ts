import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/index";

export async function POST(
  req: Request | NextRequest,
  res: Response | NextResponse
) {
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
      if (userExists) {
        return NextResponse.json(
          { message: "A user with that name already exists." },
          { status: 409 }
        );
      } else {
        await prisma.user.create({
          data: {
            UserName: username,
            Password: password,
          },
        });
        return NextResponse.json({ message: "User created!" }, { status: 201 });
      }
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Internal Server Error" });
    }
}
