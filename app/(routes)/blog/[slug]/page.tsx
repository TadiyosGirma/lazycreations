import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxBySlug, listMdx } from "@/lib/mdx";

export async function generateStaticParams() {
  return listMdx("blog").map((p) => ({ slug: p.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const fm = listMdx("blog").find((p) => p.slug === slug);
  if (!fm) return notFound();
  const { content } = getMdxBySlug("blog", slug);
  return (
    <div className="container mx-auto px-6 md:px-8 py-16 prose prose-invert">
      <h1 className="font-display text-4xl font-bold mb-4">{fm.title}</h1>
      <MDXRemote source={content} options={{ parseFrontmatter: true }} />
    </div>
  );
}
