export function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus-ring fixed top-2 left-2 z-50 bg-surface text-foreground px-3 py-2 rounded-md"
    >
      Skip to content
    </a>
  );
}
