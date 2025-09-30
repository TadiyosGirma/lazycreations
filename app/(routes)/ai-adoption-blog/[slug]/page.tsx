import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxBySlug, listMdx } from "@/lib/mdx";
import { HeroImage } from "@/components/blog/hero-image";
import Image from "next/image";
import React from "react";
import { BarChart2, Compass, ExternalLink, Quote, Zap } from "lucide-react";

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

  // Demo: inject section icons only for a single post so you can review first
  const demoSlug = "uschamber-empowering-small-business-technology-impact";

  function extractText(node: React.ReactNode): string {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (React.isValidElement(node))
      return extractText((node.props as any)?.children);
    return "";
  }

  function SectionIcon({ title }: { title: string }) {
    const text = title.toLowerCase();
    const glow = {
      filter: "drop-shadow(0 0 10px rgba(0,229,255,0.45))",
    } as const;
    const purpleGlow = {
      filter: "drop-shadow(0 0 10px rgba(139,92,246,0.45))",
    } as const;

    if (text.includes("highlight")) {
      return <Zap className="h-6 w-6 text-cyan-400" style={glow} />;
    }
    if (text.includes("case study") || text.includes("anecdote")) {
      return <Quote className="h-6 w-6 text-violet-400" style={purpleGlow} />;
    }
    if (text.includes("guidance")) {
      return <Compass className="h-6 w-6 text-cyan-400" style={glow} />;
    }
    if (text.includes("lesson") || text.includes("metric")) {
      return <BarChart2 className="h-6 w-6 text-sky-400" style={glow} />;
    }
    if (text.includes("learn more") || text.includes("read the full")) {
      return <ExternalLink className="h-6 w-6 text-cyan-400" style={glow} />;
    }
    return null;
  }

  function H2WithIcon(props: React.HTMLAttributes<HTMLHeadingElement>) {
    const title = extractText(props.children ?? "");
    const icon = <SectionIcon title={title} />;
    const className = [
      "mt-10 mb-4 flex items-center gap-3",
      props.className ?? "",
    ]
      .filter(Boolean)
      .join(" ");
    return (
      <h2 {...props} className={className}>
        {icon}
        <span>{props.children}</span>
      </h2>
    );
  }

  const mdxComponents = slug === demoSlug ? { h2: H2WithIcon } : undefined;
  return (
    <div className="container mx-auto px-6 md:px-8 py-16 prose prose-invert">
      <HeroImage
        src={fm.heroImage ?? "/blog-assets/placeholder.svg"}
        alt={fm.heroAlt ?? fm.title}
      />
      <h1 className="font-display text-4xl font-bold mb-4">{fm.title}</h1>
      <MDXRemote
        source={content}
        options={{ parseFrontmatter: true }}
        components={mdxComponents as any}
      />

      {/* Footer banner: subtle, short hero reprise */}
      <div className="mt-12 rounded-xl overflow-hidden">
        <div className="relative w-full h-20 sm:h-24 md:h-28 lg:h-32">
          <Image
            src={fm.heroImage ?? "/blog-assets/placeholder.svg"}
            alt={(fm.heroAlt ?? fm.title) + " footer banner"}
            fill
            sizes="100vw"
            className="object-cover opacity-80"
            style={{ objectPosition: "center 80%" }}
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
              "@id": `https://lazycreations.ai/ai-adoption-blog/${fm.slug}`,
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
    title: `${fm.title} | AI Adoption Blog`,
    description: fm.excerpt,
    alternates: { canonical: `/ai-adoption-blog/${fm.slug}` },
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
