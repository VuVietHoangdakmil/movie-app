"use server";
import { cookies } from "next/headers";

// authFetch.js
const fetchWithAuth = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T & { error?: { status: number; message: string } }> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  // Hoặc từ Context, Cookie, hoặc session

  // Thêm Authorization header
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const response = await fetch(url, { ...options, headers });

  const data: T & { error?: { status: number; message: string } } =
    await response.json();
  return data;
};
export { fetchWithAuth };
