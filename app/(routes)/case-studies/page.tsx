import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { listMdx } from "@/lib/mdx";

export default function Page() {
  const posts = listMdx("case-studies");
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <h1 className="sr-only">Case studies</h1>
      <SectionHeader
        eyebrow="Case studies"
        title="Real impact"
        subtitle="Problem → Constraints → Solution → Impact → Stack."
      />
      <ul className="mt-8 space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="glass rounded-xl p-4">
            <Link
              href={`/case-studies/${p.slug}`}
              className="font-display text-lg underline decoration-[var(--accent-2)] underline-offset-4"
            >
              {p.title}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
