import { Download, Mail } from "lucide-react";
import { useState } from "react";

import { GlassButton } from "../ui/GlassButton";
import { ContactModal } from "../ui/ContactModal";

type HeroSectionProps = {
  onScrollToSection: (id: string) => void;
};

const panelConfig = '{"blurAmount": 0.25, "cornerRadius": 30}';

export function HeroSection({ onScrollToSection: _onScrollToSection }: HeroSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div id="about" className="relative glass soft-card w-full max-w-6xl mx-auto my-6 overflow-hidden p-8 md:p-12 scroll-mt-28" data-config={panelConfig}>
        {/* Profile photo — absolute positioned top-right */}
        <img
          src="/images/me.png"
          alt="梁鑫"
          className="absolute top-8 right-8 z-40 w-60 h-60 rounded-2xl shadow-md object-cover"
        />
        <div className="relative z-30 pr-56">
          {/* ===== ABOUT ME Header ===== */}
          <h2 className="text-4xl font-semibold tracking-tight text-slate-800 md:text-6xl">
            ABOUT ME —— 梁鑫
          </h2>
          <p className="mt-5 text-lg text-sky-700 md:text-xl">经济学本科在读 · 审计实习与AI辅助项目经历</p>

          <div className="subtle-line my-8" />

          {/* ===== 教育背景 ===== */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">教育背景</h3>
            <p className="font-medium text-slate-700">
              <span>山东财经大学 | 2024级经济学科拔尖人才实验班（省级经济学科拔尖人才培养基地）</span>
              <span className="ml-8 text-sm font-normal text-slate-500">2024年9月 — 2028年6月</span>
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                <span><strong className="text-slate-700">专业成绩</strong>：GPA 4.2 / 5.0 ；CET-4: 591</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                <span><strong className="text-slate-700">主修课程</strong>：会计学原理、经济学原理、经济学通论、金融学、数理经济学、计量经济学、中级宏观经济学、中级微观经济学等</span>
              </li>
            </ul>
          </section>

          <div className="subtle-line my-8" />

          {/* ===== 技能及其他 ===== */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">技能及其他</h3>
            <div className="space-y-4 text-sm text-slate-600 leading-loose">
              {/* 专业技能 — 独立分行 */}
              <div>
                <p className="mb-3 font-semibold text-slate-700">专业技能</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>Excel: 熟练运用各类函数及数据透视表，能够高效完成复杂表格处理、数据整理与分析，具备较强的数据处理与结果输出能力；</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>Python: 具备数据处理与分析能力，可独立完成数据采集、清洗、分析及可视化工作，支持业务场景下的数据应用；</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>SQL：掌握单表及多表查询逻辑，能够灵活运用常见函数完成数据抽取、清洗与基础分析，能够支持日常运营与分析需求；</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>Canvas/PPT: 熟练使用Canvas进行海报设计，可脱离模板进行PPT制作；具备多次赛路演制作经验，擅长复杂逻辑的可视化呈现。</span>
                  </li>
                </ul>
              </div>
              {/* 个人特质 */}
              <div>
                <p className="mb-3 font-semibold text-slate-700">个人特质</p>
                <ul className="space-y-2 text-slate-700 leading-loose">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>具备突出的学习与适应能力，能够快速理解业务逻辑与工作流程，在短时间内推进核心任务；</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>沟通与组织协调能力强，善于跨角色协作推动项目落地，具备良好的团队合作意识与结果导向思维；</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                    <span>抗压能力强，能够在多任务并行中保持稳定的执行力与持续产出，确保工作质量与效率。</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== Action Buttons ===== */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume/梁鑫简历.pdf"
              download
              className="glass glass-button inline-flex items-center gap-2 rounded-[1.5rem] px-7 py-3 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
              data-config='{"button": true, "cornerRadius": 24}'
            >
              <Download className="h-4 w-4" />
              下载简历
            </a>
            <GlassButton onClick={() => setModalOpen(true)} className="min-w-[10rem] px-7 py-3 text-sm">
              <span className="inline-flex items-center gap-2 text-slate-700">
                <Mail className="h-4 w-4" />
                联系我
              </span>
            </GlassButton>
          </div>
        </div>
      </div>

      {/* ===== Contact Modal ===== */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}