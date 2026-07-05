type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  skipWrapper?: boolean;
};

export function FadeIn({ children, className = "", delay = 0, skipWrapper = false }: FadeInProps) {
  if (skipWrapper) {
    return <>{children}</>;
  }

  return (
    <div
      className={`translate-y-0 opacity-100 motion-safe:animate-[fadeUp_0.6s_ease-out] ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {children}
    </div>
  );
}

/**
 * Returns CSS classes for fade-up animation that can be applied directly to glass panels.
 */
export function fadeInClasses(_delay: number): string {
  return "motion-safe:animate-[fadeUp_0.6s_ease-out]";
}

export function fadeInStyle(delay: number): React.CSSProperties {
  return {
    animationDelay: `${delay}ms`,
    animationFillMode: "both",
    opacity: 0,
  };
}