import { fullExperience } from "../../data/portfolio";
import { AccordionItem } from "../ui/AccordionItem";

const mottoConfig = '{"blurAmount": 0.25, "cornerRadius": 24}';

export function ExperienceAccordion() {
  return (
    <>
      {/* ===== 完整经历 大标题 — 放在折叠面板根部，用 span 避开全局 h2 白色污染 ===== */}
      <div id="complete-experience" className="relative z-30 flex items-baseline text-left w-full max-w-6xl mx-auto px-6 pt-12 pb-4" style={{ scrollMarginTop: "6.5rem" }}>
        <span className="text-5xl font-black text-slate-800 bg-transparent md:text-6xl">
          完整经历
        </span>
        <span className="ml-6 text-lg font-semibold tracking-wide text-slate-400 md:text-xl">
          COMPLETE EXPERIENCE
        </span>
      </div>

      {/* Experience accordion items as direct children of LiquidGlass root */}
      {fullExperience.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
          content={item.content}
          time={item.time}
          delay={index * 70}
        />
      ))}

      {/* 底部间距 */}
      <div className="h-12 md:h-16" />

      {/* ===== 格言文本框 — glass Frosted Panel, 紧凑宽度 ===== */}
      <div
        className="glass soft-card w-fit mx-auto mb-16 mt-6 rounded-full border border-white/20 px-8 py-4 text-center shadow-xl backdrop-blur-md motion-safe:animate-[fadeUp_0.6s_ease-out]"
        data-config={mottoConfig}
        style={{ animationDelay: `${fullExperience.length * 70}ms`, animationFillMode: "forwards" }}
      >
        <p className="relative z-30 text-base italic tracking-wide text-slate-700 md:text-lg">
          Dream, explore, discover
        </p>
      </div>
    </>
  );
}