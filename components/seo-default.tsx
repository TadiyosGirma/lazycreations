// Intentionally server-safe default export not used in layout due to SSR context issues.

import { DefaultSeo, OrganizationJsonLd } from "next-seo";

export function SeoDefault() {
  const siteUrl = "https://lazycreations.ai";
  return (
    <>
      <DefaultSeo
        titleTemplate="%s — Lazy Creations LLC"
        defaultTitle="Lazy Creations LLC — Software & AI for SMBs"
        description="Dark, futuristic solutions: strategy, automation, AI copilots, analytics. Built to convert."
        canonical={siteUrl}
        openGraph={{
          url: siteUrl,
          images: [{ url: "/og.png", width: 1200, height: 630 }],
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <OrganizationJsonLd
        type="Organization"
        id={`${siteUrl}#org`}
        name="Lazy Creations LLC"
        url={siteUrl}
        logo="/og.png"
      />
    </>
  );
}
