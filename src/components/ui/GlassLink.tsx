type GlassLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const buttonConfig = '{"button": true, "cornerRadius": 24}';

export function GlassLink({ href, children, className = "", onClick }: GlassLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`glass glass-button inline-flex items-center justify-center rounded-[1.5rem] px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900 ${className}`}
      data-config={buttonConfig}
    >
      <span className="relative z-30">{children}</span>
    </a>
  );
}
