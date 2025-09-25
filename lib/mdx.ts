import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Frontmatter = {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  heroImage?: string;
  heroAlt?: string;
  category?: string;
  sourceUrl?: string;
  slug: string;
};

export function getContentDir(type: "blog" | "case-studies"): string {
  return path.join(process.cwd(), "content", type);
}

export function listMdx(type: "blog" | "case-studies"): Frontmatter[] {
  const dir = getContentDir(type);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      const fm = normalizeFrontmatter(data);
      const slug = file.replace(/\.mdx$/, "");
      // Prefer local hero under /public/blog-assets/<slug>/hero.(webp|jpg|png|svg)
      const baseDir = path.join(process.cwd(), "public", "blog-assets", slug);
      const localExt = ["webp", "jpg", "png", "svg"].find((ext) =>
        fs.existsSync(path.join(baseDir, `hero.${ext}`)),
      );
      const localHero = localExt
        ? `/blog-assets/${slug}/hero.${localExt}`
        : undefined;
      // Use local if present, else fm.heroImage, else placeholder
      const heroImage =
        localHero ?? fm.heroImage ?? "/blog-assets/placeholder.svg";
      return { ...fm, heroImage, slug } satisfies Frontmatter;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getMdxBySlug(type: "blog" | "case-studies", slug: string) {
  const dir = getContentDir(type);
  const full = path.join(dir, `${slug}.mdx`);
  const raw = fs.readFileSync(full, "utf8");
  return matter(raw);
}

function normalizeFrontmatter(data: unknown): Omit<Frontmatter, "slug"> {
  const obj = (data ?? {}) as Record<string, unknown>;
  const title = String(obj.title ?? "Untitled");
  const date = String(obj.date ?? "1970-01-01");
  const excerpt = obj.excerpt ? String(obj.excerpt) : undefined;
  const tags = Array.isArray(obj.tags)
    ? (obj.tags as unknown[]).map((t) => String(t))
    : undefined;
  const heroImage = obj.heroImage ? String(obj.heroImage) : undefined;
  const heroAlt = obj.heroAlt ? String(obj.heroAlt) : undefined;
  let category = obj.category ? String(obj.category) : undefined;
  if (!category && tags && tags.length > 0) {
    category = tags[0];
  }
  const sourceUrl = obj.sourceUrl ? String(obj.sourceUrl) : undefined;
  return {
    title,
    date,
    excerpt,
    tags,
    heroImage,
    heroAlt,
    category,
    sourceUrl,
  };
}
