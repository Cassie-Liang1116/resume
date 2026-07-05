import { MoveRight } from "lucide-react";

const buttonConfig = '{"button": true, "cornerRadius": 24}';
const panelConfig = '{"blurAmount": 0.25, "cornerRadius": 30}';

type WelcomeHeroProps = {
  onAboutMe: () => void;
};

export function WelcomeHero({ onAboutMe }: WelcomeHeroProps) {
  return (
    <>
      {/* Background image — captured by LiquidGlass as scene backdrop */}
      <img
        aria-hidden="true"
        className="fixed inset-0 z-0 h-screen w-screen object-cover"
        src="/images/1.jpg"
        alt=""
        data-dynamic
      />

      {/* Dark overlay — painted over background */}
      <div aria-hidden="true" className="fixed inset-0 z-10 bg-slate-950/24" />

      {/* Glass panel — direct child of root, LiquidGlass applies shader here */}
      <div
        className="glass absolute left-1/2 top-1/2 z-20 mx-auto w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-8 py-10 md:px-14 md:py-14"
        data-config={panelConfig}
      >
        <div className="relative z-30 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-slate-600">Welcome</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-800 md:text-6xl">
            Hi，我是梁鑫!👋
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-700 md:text-xl">
            经济学 ｜ 审计实习＆AI辅助项目经历
          </p>
        </div>
      </div>

      {/* "About me" button — direct child of root, button mode enabled for hover/press shader effects */}
      <button
        type="button"
        className="glass absolute bottom-[15%] left-1/2 z-20 inline-flex -translate-x-1/2 items-center justify-center rounded-[1.5rem] px-7 py-3 text-sm font-semibold text-slate-700 transition"
        data-config={buttonConfig}
        onClick={onAboutMe}
      >
        <span className="relative z-30 inline-flex items-center gap-2">
          About me
          <MoveRight className="h-4 w-4" />
        </span>
      </button>
    </>
  );
}