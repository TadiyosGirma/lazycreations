import { Suspense } from "react";
import { SectionHeader } from "@/components/section-header";
import { listMdx } from "@/lib/mdx";
import { BlogGrid } from "@/components/blog/blog-grid";

function BlogGridSkeleton() {
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

export default function Page() {
  const posts = listMdx("blog");
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <h1 className="sr-only">Blog</h1>
      <SectionHeader
        eyebrow="Blog"
        title="Insights"
        subtitle="Practical AI and software wins for SMBs."
      />
      <Suspense fallback={<BlogGridSkeleton />}>
        <BlogGrid posts={posts} />
      </Suspense>
    </div>
  );
}
