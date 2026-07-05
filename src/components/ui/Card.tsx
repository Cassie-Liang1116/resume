type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
};

const panelConfig = '{"blurAmount": 0.25, "cornerRadius": 30}';

export function Card({ children, className = "", hover = false, delay = 0 }: CardProps) {
  return (
    <div
      className={`glass soft-card w-full max-w-4xl mx-auto my-6 ${hover ? "soft-card-hover" : ""} ${className} motion-safe:animate-[fadeUp_0.6s_ease-out]`}
      data-config={panelConfig}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "backwards" }}
    >
      <div className="relative z-30">{children}</div>
    </div>
  );
}