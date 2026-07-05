import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return <div className="relative h-screen overflow-hidden bg-slate-950 text-white">{children}</div>;
}
