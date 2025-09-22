import { type Metadata } from "next";

export const siteUrl = "https://lazycreations.ai";
export const defaultTitle = "Lazy Creations LLC — Software & AI for SMBs";
export const defaultDescription =
  "Dark, futuristic solutions: strategy, automation, AI copilots, analytics. Built to convert.";

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: {
      default: defaultTitle,
      template: "%s — Lazy Creations LLC",
    },
    description: defaultDescription,
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: "website",
      url: siteUrl,
      title: defaultTitle,
      description: defaultDescription,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ["/og.png"],
    },
    ...overrides,
  } satisfies Metadata;
}
