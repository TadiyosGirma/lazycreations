"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import type { Frontmatter } from "@/lib/mdx";

type BlogCardProps = {
  post: Frontmatter;
  index: number;
};

const HEIGHT_CLASSES = ["h-72", "h-80", "h-96"] as const;

export function BlogCard({ post, index }: BlogCardProps) {
  const heightClass = HEIGHT_CLASSES[index % HEIGHT_CLASSES.length];
  const src = post.heroImage ?? "/blog-assets/placeholder.svg";
  const heroAlt = post.heroAlt ?? post.title;
  const unoptimized = src.endsWith(".svg");

  return (
    <article
      className={`neon-border bg-surface/60 hover:bg-surface/80 transition-colors rounded-xl overflow-hidden break-inside-avoid ${heightClass}`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-1)]"
      >
        <div className="relative w-full h-48">
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
          <h3 className="font-display text-lg leading-tight line-clamp-2 mb-1">
            {post.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-2">
            {new Date(post.date).toLocaleDateString()}
          </p>
          <p
            className={`text-sm text-muted-foreground ${["line-clamp-3", "line-clamp-4", "line-clamp-5", "line-clamp-6"][index % 4]}`}
          >
            {post.excerpt}
          </p>
          <span className="inline-block mt-3 text-[var(--accent-1)] text-sm font-medium">
            Read more →
          </span>
        </div>
      </Link>
    </article>
  );
}
