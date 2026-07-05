type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

const panelConfig = '{"blurAmount": 0.25, "cornerRadius": 30}';

export function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div className={`glass soft-card ${className}`} data-config={panelConfig}>
      <div className="relative z-30">{children}</div>
    </div>
  );
}
