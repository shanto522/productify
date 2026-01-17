import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("auth")?.value === "true";
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/add-item") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item/:path*"],
};
