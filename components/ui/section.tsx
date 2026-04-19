interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  overline,
  title,
  description,
  className = "",
  align = "left",
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {overline && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal mb-3">
          {overline}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold text-foreground lg:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
