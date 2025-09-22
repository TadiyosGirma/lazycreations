import { NextResponse } from "next/server";

export async function GET() {
  const urls = [
    "/",
    "/services",
    "/solutions",
    "/industries",
    "/case-studies",
    "/blog",
    "/about",
    "/contact",
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>https://lazycreations.ai${u}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>`;
  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
