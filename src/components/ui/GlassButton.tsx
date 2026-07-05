type GlassButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
};

const buttonConfig = '{"button": true, "cornerRadius": 24}';

export function GlassButton({
  children,
  className = "",
  onClick,
  type = "button",
  fullWidth = false,
}: GlassButtonProps) {
  return (
    <button
      type={type}
      data-config={buttonConfig}
      onClick={onClick}
      className={`glass glass-button inline-flex items-center justify-center rounded-[1.5rem] px-7 py-3 text-sm font-semibold text-slate-700 transition hover:text-slate-900 ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <span className="relative z-30">{children}</span>
    </button>
  );
}
