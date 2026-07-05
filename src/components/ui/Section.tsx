import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

const sectionShell = "mx-auto max-w-content px-6 py-16 md:px-8";

export function Section({ id, kicker, title, description, children, className = "" }: SectionProps) {
  return (
    <>
      {/* Section header — this is a non-glass content wrapper that LiquidGlass captures */}
      <section id={id} className={`${sectionShell} relative z-30 ${className}`} style={{ scrollMarginTop: "6.5rem" }}>
        <div className="mb-12 max-w-3xl">
          {kicker ? <p className="section-kicker">{kicker}</p> : null}
          <h2 className="section-title">{title}</h2>
          {description ? <p className="mt-5 text-base text-slate-600 md:text-lg">{description}</p> : null}
        </div>
      </section>
      {/* Glass panels rendered directly as siblings so LiquidGlass can find them */}
      {children}
    </>
  );
}