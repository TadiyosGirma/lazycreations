import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxBySlug, listMdx } from "@/lib/mdx";
import { HeroImage } from "@/components/blog/hero-image";
import Link from "next/link";

export async function generateStaticParams() {
  return listMdx("blog").map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fm = listMdx("blog").find((p) => p.slug === slug);
  if (!fm) return notFound();
  const { content } = getMdxBySlug("blog", slug);
  return (
    <div className="container mx-auto px-6 md:px-8 py-16 prose prose-invert">
      <HeroImage
        src={fm.heroImage ?? "/blog-assets/placeholder.svg"}
        alt={fm.heroAlt ?? fm.title}
      />
      <h1 className="font-display text-4xl font-bold mb-4">{fm.title}</h1>
      <MDXRemote source={content} options={{ parseFrontmatter: true }} />

      {fm.sourceUrl ? (
        <div className="mt-8 p-4 rounded-lg border border-border/50 bg-surface/60">
          <h2 className="text-base font-semibold mb-2">
            Read the full case study
          </h2>
          <Link
            href={fm.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-1)] hover:underline"
          >
            {fm.sourceUrl}
          </Link>
        </div>
      ) : null}

      {/* Structured Data: Article */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: fm.title,
            datePublished: fm.date,
            description: fm.excerpt,
            image: fm.heroImage ? [fm.heroImage] : undefined,
            author: {
              "@type": "Organization",
              name: "Lazy Creations LLC",
            },
            publisher: {
              "@type": "Organization",
              name: "Lazy Creations LLC",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://lazycreations.ai/blog/${fm.slug}`,
            },
          }),
        }}
      />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fm = listMdx("blog").find((p) => p.slug === slug);
  if (!fm) return {};
  return {
    title: fm.title,
    description: fm.excerpt,
    alternates: { canonical: `/blog/${fm.slug}` },
    openGraph: {
      type: "article",
      publishedTime: fm.date,
      images: fm.heroImage
        ? [{ url: fm.heroImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: fm.heroImage ? "summary_large_image" : "summary",
      title: fm.title,
      description: fm.excerpt,
      images: fm.heroImage ? [fm.heroImage] : undefined,
    },
  };
}
