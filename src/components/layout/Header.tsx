import { ArrowLeft } from "lucide-react";

import { GlassButton } from "../ui/GlassButton";
import { GlassLink } from "../ui/GlassLink";

type HeaderProps = {
  onBackToWelcome: () => void;
  onNavigate: (id: string) => void;
};

const navItems = [
  { href: "about", label: "ABOUT ME" },
  { href: "audit", label: "实习经历" },
  { href: "projects", label: "AI项目" },
  { href: "complete-experience", label: "完整经历" },
];

export function Header({ onBackToWelcome, onNavigate }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="glass mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 rounded-[1.75rem] px-5 py-4 backdrop-blur-xl" data-config='{"button": true, "cornerRadius": 24}'>
        <div className="relative z-30 flex items-center gap-3">
          <GlassButton onClick={onBackToWelcome} className="px-4 py-2 text-sm">
            <span className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              返回首页
            </span>
          </GlassButton>
        </div>
        <nav className="relative z-30 hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <GlassLink
              key={item.href}
              href={`#${item.href}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.href);
              }}
            >
              {item.label}
            </GlassLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
