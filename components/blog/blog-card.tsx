"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import type { Frontmatter } from "@/lib/mdx";

type BlogCardProps = {
  post: Frontmatter;
  index: number;
};

export function BlogCard({ post, index }: BlogCardProps) {
  const src = post.heroImage ?? "/blog-assets/placeholder.svg";
  const heroAlt = post.heroAlt ?? post.title;
  const unoptimized = src.endsWith(".svg");

  return (
    <article
      className={
        "neon-border bg-surface/60 hover:bg-surface/80 transition-colors rounded-xl overflow-hidden"
      }
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-1)]"
      >
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={src}
            alt={heroAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index < 3}
            unoptimized={unoptimized}
          />
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg leading-tight line-clamp-2">
            {post.title}
          </h3>
          <span className="inline-block mt-3 text-[var(--accent-1)] text-sm font-medium">
            Read more →
          </span>
        </div>
      </Link>
    </article>
  );
}
