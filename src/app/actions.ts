"use server";
import { cookies } from "next/headers";
export async function setCookiesToken() {
  const cookieStore = await cookies();
  cookieStore.set("access_token", "vl");
  // or
}
