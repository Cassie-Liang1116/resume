import { BrainCircuit } from "lucide-react";

import { aiProjects } from "../../data/portfolio";
import { Tag } from "../ui/Tag";

export function MainSections() {
  return (
    <>
      {/* ===== 实习经历 中英文大标题 ===== */}
      <div id="audit" className="relative z-30 flex items-baseline text-left w-full max-w-6xl mx-auto px-6 pt-12 pb-4" style={{ scrollMarginTop: "6.5rem" }}>
        <span className="text-5xl font-black text-slate-800 bg-transparent md:text-6xl">
          实习经历
        </span>
        <span className="ml-6 text-lg font-semibold tracking-wide text-slate-400 md:text-xl">
          INTERNSHIP EXPERIENCE
        </span>
      </div>

      {/* ===== 信永中和 流动玻璃大方框 (全量展示，非折叠) ===== */}
      <div
        className="glass w-full max-w-6xl mx-auto rounded-[30px] border border-white/40 shadow-xl p-6 md:p-8 mt-6 motion-safe:animate-[fadeUp_0.6s_ease-out]"
        data-config='{"blurAmount": 0.25, "cornerRadius": 30}'
        style={{
          animationDelay: "0ms",
          animationFillMode: "backwards",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="relative z-30">
          {/* 头部两端对齐栏 */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-slate-800">
              信永中和会计师事务所（特殊普通合伙） ｜ 审计实习生
            </h3>
            <span className="flex-none text-sm font-normal text-slate-400">2025年12月 — 2026年3月</span>
          </div>
          <p className="mt-1 text-sm text-slate-500" style={{ color: "rgb(100, 116, 139)" }}>IPO年审 ｜ 基础科目核查 ｜ 跨境业务尽调 ｜ 多方协同</p>

          {/* ──────── ROLES & RESPONSIBILITIES ──────── */}
          <p className="mt-6 mb-3 text-[13px] font-semibold tracking-wider text-slate-400 uppercase" style={{ color: "rgb(148, 163, 184)" }}>
            ROLES & RESPONSIBILITIES
          </p>
          <ul className="mt-3 space-y-3 marker:text-slate-500 list-disc list-outside ml-5 text-sm leading-relaxed" style={{ color: "rgb(71, 85, 105)" }}>
            <li>
              <strong className="text-slate-800">① IPO审计项目经历</strong>：依照项目组统筹部署，独立执行固定资产、营业成本等核心科目的凭证抽查与关键截止性测试，协助实施实质性审计程序；协同团队高效推进项目整体进度，积累了扎实的财务核查与风险识别实战经验。
            </li>
            <li>
              <strong className="text-slate-800">② 主要职责与操作实践</strong>：围绕财务真实性验证要求，承接基础科目的细节核查工作。负责固定资产盘点登记、折旧计提检查，并协助编制部分核心审计底稿内容；严格保证所负责模块底稿的合规性，在实务中加深了对企业财务真实性判断及上市审计重点环节的深刻理解。
            </li>
            <li>
              <strong className="text-slate-800">③ 跨境审计与团队协作</strong>：积极配合项目组推进境外产业链的合规性核查；协同券商、律所等中介机构赴俄罗斯开展经销商及客户实地访谈，协助完成跨境业务尽职调查与关键资料核验，顺利完成跨地域审计辅助任务。
            </li>
          </ul>

          {/* ──────── PROJECT CHALLENGES ──────── */}
          <p className="mt-8 mb-3 text-[13px] font-semibold tracking-wider text-slate-400 uppercase" style={{ color: "rgb(148, 163, 184)" }}>
            PROJECT CHALLENGES
          </p>
          <ul className="mt-3 space-y-3 marker:text-slate-500 list-disc list-outside ml-5 text-sm leading-relaxed" style={{ color: "rgb(71, 85, 105)" }}>
            <li>
              <strong className="text-slate-800">① 跨境走访与尽调实践</strong>：面对跨地域、多中介协同导致的境外信息核验滞后挑战，协同券商与律所去到俄罗斯核心现场。通过与海外经销商及客户进行高频次、面对面的实地访谈，并对关键贸易资料实施穿行测试，成功扫除了跨境业务的信息盲区，确保了海外产业链尽职调查的高效合规落地。
                          </li>
            <li>
              <strong className="text-slate-800">② IPO数据钩稽与底稿规范</strong>：针对首次公开募股（IPO）年度审计中多期财务数据量大、钩稽关系错综复杂的痛点，严格执行固定资产盘点与折旧计提深度测算，将零散的财务科目与底层业务凭证进行全链路穿透对应，最终保质保量地完成了核心底稿编制，底稿合规率完美达到拟上市审计的高标准规范。
            </li>
          </ul>
        </div>
      </div>

      {/* ===== AI 项目 中英文大标题 ===== */}
      <div id="projects" className="relative z-30 flex items-baseline text-left w-full max-w-6xl mx-auto px-6 pt-12 pb-4" style={{ scrollMarginTop: "6.5rem" }}>
        <span className="text-5xl font-black text-slate-800 bg-transparent md:text-6xl">
          AI项目
        </span>
        <span className="ml-6 text-lg font-semibold tracking-wide text-slate-400 md:text-xl">
          AI PROJECTS
        </span>
      </div>

      {/* ===== Projects Grid — 横向三栏并列 ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto pb-16">
        {aiProjects.map((item, index) => (
          <div
            key={item.title}
            className="glass flex h-full flex-col p-6 rounded-[30px] border border-white/40 shadow-xl overflow-hidden motion-safe:animate-[fadeUp_0.6s_ease-out] hover:-translate-y-1 hover:shadow-hover transition duration-300"
            data-config='{"blurAmount": 0.25, "cornerRadius": 30}'
            style={{
              animationDelay: `${index * 80}ms`,
              animationFillMode: "backwards",
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div className="relative z-30 flex items-center gap-3 text-sm text-sky-700">
              <BrainCircuit className="h-4 w-4" />
              <span>{item.role}</span>
            </div>
            <h3 className="relative z-30 mt-4 text-xl font-semibold text-slate-800">{item.title}</h3>
            <p className="relative z-30 mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
            <div className="relative z-30 mt-4 flex flex-1 flex-col space-y-2 text-sm text-slate-600">
              {item.details.map((detail) => (
                <div
                  key={detail}
                  className="h-full rounded-2xl py-3 px-4"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <p className="text-slate-600 text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <div className="relative z-30 mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            {"link" in item && item.link ? (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-slate-300 text-slate-700 bg-white/40 backdrop-blur-sm shadow-sm hover:bg-white/80 transition-all duration-300 w-full justify-center"
              >
                {item.link.label}
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}