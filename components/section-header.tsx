type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, subtitle, className }: Props) {
  return (
    <div className={className ?? ""}>
      {eyebrow ? (
        <p className="text-sm tracking-widest text-[var(--accent-1)] uppercase mb-2">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-muted-foreground mt-3 max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
}
