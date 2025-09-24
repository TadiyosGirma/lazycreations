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
      return { ...fm, slug: file.replace(/\.mdx$/, "") } satisfies Frontmatter;
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
  return { title, date, excerpt, tags, heroImage, heroAlt };
}
