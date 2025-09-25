"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Frontmatter } from "@/lib/mdx";

type BlogGridProps = {
  posts: Frontmatter[];
};

const PAGE_SIZE = 9;

export function BlogGrid({ posts }: BlogGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = React.useState(false);

  const allTags = React.useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((p) => (p.tags ?? []).forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [posts]);

  // Get state from URL params - only after hydration
  const activeTag = isClient ? searchParams.get("tag") : null;
  const page = isClient
    ? Math.max(1, parseInt(searchParams.get("page") || "1", 10))
    : 1;

  React.useEffect(() => {
    setIsClient(true);
  }, []);

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

  // Update URL params when state changes
  const updateParams = React.useCallback(
    (newTag: string | null, newPage: number) => {
      const params = new URLSearchParams(searchParams);
      if (newTag) {
        params.set("tag", newTag);
      } else {
        params.delete("tag");
      }
      if (newPage > 1) {
        params.set("page", newPage.toString());
      } else {
        params.delete("page");
      }
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const handleTagChange = React.useCallback(
    (tag: string | null) => {
      React.startTransition(() => {
        updateParams(tag, 1); // Reset to page 1 when changing tags
      });
    },
    [updateParams],
  );

  const handlePageChange = React.useCallback(
    (newPage: number) => {
      React.startTransition(() => {
        updateParams(activeTag, newPage);
      });
    },
    [updateParams, activeTag],
  );

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="mt-8">
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="h-8 w-16 bg-surface/60 rounded-md animate-pulse" />
          <div className="h-8 w-20 bg-surface/60 rounded-md animate-pulse" />
          <div className="h-8 w-24 bg-surface/60 rounded-md animate-pulse" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-surface/60 rounded-lg overflow-hidden">
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--accent-2)]/20 to-[var(--accent-1)]/10 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-surface/80 rounded animate-pulse" />
                <div className="h-3 bg-surface/80 rounded w-3/4 animate-pulse" />
                <div className="h-3 bg-surface/80 rounded w-1/2 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleTagChange(null)}
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
            onClick={() => handleTagChange(tag)}
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
              <Link
                href={`/blog/${p.slug}`}
                aria-label={`Read more: ${p.title}`}
                className="mt-4 inline-flex items-center text-sm font-medium text-[var(--accent-1)] hover:text-[var(--accent-1)]/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-1)] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                Read more →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(Math.max(1, page - 1))}
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
            onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
