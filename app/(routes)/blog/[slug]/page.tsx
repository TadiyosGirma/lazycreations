import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxBySlug, listMdx } from "@/lib/mdx";

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
      {fm.heroImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={fm.heroImage}
          alt={fm.heroAlt ?? fm.title}
          className="mb-6 w-full rounded-xl border border-border/50"
        />
      ) : null}
      <h1 className="font-display text-4xl font-bold mb-4">{fm.title}</h1>
      <MDXRemote source={content} options={{ parseFrontmatter: true }} />

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
