import { NextResponse } from "next/server";

interface DataResponse {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
}
async function getAccessToken() {
  const url = process.env.NEXT_PUBLIC_ACCOUNT!;
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SCRECT!,
  });
  // Gửi yêu cầu POST
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(), // Gắn body vào request
  });

  const data = await response.json();
  return data as DataResponse;
}

export async function GET() {
  const { access_token, expires_in } = await getAccessToken();

  const response = NextResponse.json({ message: access_token });
  response.cookies.set("accessToken", access_token, {
    maxAge: expires_in,
  });

  return response;
}
