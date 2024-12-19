import { NextResponse, type NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies?.get("accessToken")?.value;
  const pathName = request.nextUrl.pathname;

  if (!token && pathName.startsWith("/music")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  } else {
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
