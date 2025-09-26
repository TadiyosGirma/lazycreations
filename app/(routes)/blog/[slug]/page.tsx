import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxBySlug, listMdx } from "@/lib/mdx";
import { HeroImage } from "@/components/blog/hero-image";
import Image from "next/image";

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

      {/* Footer banner: subtle, short hero reprise */}
      <div className="mt-12 rounded-xl overflow-hidden border border-border/50">
        <div className="relative w-full h-20 sm:h-24 md:h-28 lg:h-32">
          <Image
            src={fm.heroImage ?? "/blog-assets/placeholder.svg"}
            alt={(fm.heroAlt ?? fm.title) + " footer banner"}
            fill
            sizes="100vw"
            className="object-cover opacity-80"
            style={{ objectPosition: "center 60%" }}
            unoptimized
            priority={false}
          />
        </div>
      </div>

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
