"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Frontmatter } from "@/lib/mdx";

type BlogGridProps = {
  posts: Frontmatter[];
};

const PAGE_SIZE = 9;

export function BlogGrid({ posts }: BlogGridProps) {
  const allTags = React.useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((p) => (p.tags ?? []).forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [posts]);

  const [activeTag, setActiveTag] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);

  const filtered = React.useMemo(() => {
    const base = activeTag
      ? posts.filter((p) => p.tags?.includes(activeTag))
      : posts;
    return base;
  }, [activeTag, posts]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  React.useEffect(() => {
    // Reset to first page when filter changes
    setPage(1);
  }, [activeTag]);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1 rounded-md text-sm transition-colors ${
            activeTag === null
              ? "bg-[var(--accent-1)]/10 text-[var(--accent-1)] border border-[var(--accent-1)]/30"
              : "bg-surface/60 hover:bg-surface/80 text-muted-foreground border border-border/50"
          }`}
          aria-pressed={activeTag === null}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              activeTag === tag
                ? "bg-[var(--accent-1)]/10 text-[var(--accent-1)] border border-[var(--accent-1)]/30"
                : "bg-surface/60 hover:bg-surface/80 text-muted-foreground border border-border/50"
            }`}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((p) => (
          <Card
            key={p.slug}
            className="neon-border bg-surface/60 hover:bg-surface/80 transition-colors overflow-hidden"
          >
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-[var(--accent-2)]/20 to-[var(--accent-1)]/10">
              {p.heroImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.heroImage}
                  alt={p.heroAlt ?? p.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span className="sr-only">{p.title}</span>
              )}
            </div>
            <CardHeader>
              <CardTitle className="font-display text-lg">
                <Link
                  href={`/blog/${p.slug}`}
                  className="hover:text-[var(--accent-1)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--accent-1)] rounded-sm"
                >
                  {p.title}
                </Link>
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(p.date).toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {p.excerpt}
              </p>
              <Button
                asChild
                variant="ghost"
                className="mt-4 px-0 text-[var(--accent-1)]"
              >
                <Link
                  href={`/blog/${p.slug}`}
                  aria-label={`Read more: ${p.title}`}
                >
                  Read more →
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
