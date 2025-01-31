import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === "/") {
     const url = request.nextUrl.clone()
     url.pathname = "/en"
    return NextResponse.redirect(url) 
  }

  return NextResponse.next()
}
