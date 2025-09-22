import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50">
      <div className="container mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lazy Creations LLC
        </p>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
