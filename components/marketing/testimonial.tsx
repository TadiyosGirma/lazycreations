export function Testimonial() {
  return (
    <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
      <blockquote className="glass rounded-2xl p-6 md:p-8">
        <p className="text-lg">
          “Lazy Creations automated our intake and synced to our EHR. Our team
          saved 40% of admin time and our patients love it.”
        </p>
        <footer className="mt-4 text-sm text-muted-foreground">
          COO, Multi-location Clinic
          <div className="mt-1 text-xs text-[var(--accent-1)] font-medium">
            40% admin time saved
          </div>
        </footer>
      </blockquote>
      <div className="hidden md:block h-24 w-px bg-[linear-gradient(to_bottom,transparent,rgba(139,92,246,0.5),transparent)]" />
    </div>
  );
}
