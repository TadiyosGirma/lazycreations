import { NextResponse } from "next/server";
import { listMdx } from "@/lib/mdx";

export async function GET() {
  const urls = [
    "/",
    "/services",
    "/solutions",
    "/industries",
    "/ai-adoption-blog",
    "/about",
    "/contact",
    ...listMdx("blog").map((p) => `/ai-adoption-blog/${p.slug}`),
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
