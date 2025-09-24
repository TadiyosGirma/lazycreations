import { SectionHeader } from "@/components/section-header";
import { listMdx } from "@/lib/mdx";
import { BlogGrid } from "@/components/blog/blog-grid";

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
      <BlogGrid posts={posts} />
    </div>
  );
}
