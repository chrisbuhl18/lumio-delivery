import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Set this to true to disable password protection, false to enable it
const DISABLE_PASSWORD_PROTECTION = true

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // If password protection is disabled, skip all checks
  if (DISABLE_PASSWORD_PROTECTION) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  // Get authentication status from cookies
  const isAuthenticated = request.cookies.get("lumio-auth")?.value
  const clientAuth = request.cookies.get("lumio-client-auth")?.value

  // Extract client name from URL if it's a client-specific page
  // URL pattern: /delivery/[clientName]
  const clientNameMatch = pathname.match(/^\/delivery\/([^/]+)/)
  const clientName = clientNameMatch ? clientNameMatch[1] : null

  // If accessing the main delivery page
  if (pathname === "/delivery") {
    // If not authenticated, redirect to login
    if (isAuthenticated !== "true") {
      return NextResponse.redirect(new URL("/login?redirect=/delivery", request.url))
    }
  }

  // If accessing a client-specific page
  else if (clientName) {
    // Check if authenticated for this specific client
    if (clientAuth !== clientName) {
      return NextResponse.redirect(new URL(`/client-login?client=${clientName}`, request.url))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/delivery", "/delivery/:path*"],
}
