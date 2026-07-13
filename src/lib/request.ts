import { NextRequest } from "next/server"

// Trusted on Vercel: the platform proxy overwrites x-forwarded-for with the
// real client IP. Shared by the proxy and API rate limiters so they always
// key on the same value.
export function getClientIp(request: NextRequest): string {
    return (
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        "127.0.0.1"
    )
}
