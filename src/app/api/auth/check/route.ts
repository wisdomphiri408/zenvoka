// app/api/auth/check/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken");

  return NextResponse.json({ loggedIn: !!token });
}
