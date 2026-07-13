import { NextRequest, NextResponse } from "next/server"
import { Ratelimit } from "@upstash/ratelimit"
import { kv } from "@vercel/kv"
import { getClientIp } from "@/lib/request"

const ratelimit = new Ratelimit({
    redis: kv,
    // 4 requests from the same IP in 10 seconds
    limiter: Ratelimit.slidingWindow(4, '10 s'),
});

// Define which routes you want to rate limit
export const config = {
    matcher: '/',
};

export default async function proxy(request: NextRequest) {
    // You could alternatively limit based on user ID or similar
    const { success } = await ratelimit.limit(getClientIp(request));
    return success
        ? NextResponse.next()
        : NextResponse.redirect(new URL('/blocked', request.url));
}
