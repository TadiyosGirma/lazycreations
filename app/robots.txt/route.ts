import { NextResponse } from "next/server";

export async function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: https://lazycreations.ai/sitemap.xml`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain" } });
}
