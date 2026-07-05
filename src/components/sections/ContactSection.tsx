import { Mail, NotebookPen } from "lucide-react";

import { contactData } from "../../data/portfolio";
import { Card } from "../ui/Card";
import { GlassPanel } from "../ui/GlassPanel";

const sectionShell = "mx-auto max-w-content px-6 py-16 pb-8 md:px-8";

export function ContactSection() {
  return (
    <>
      {/* Section header — non-glass, captured by LiquidGlass */}
      <section className={sectionShell}>
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker">{contactData.title}</p>
          <h2 className="section-title">欢迎就学习、研究或项目实践交流</h2>
          <p className="mt-5 text-base text-slate-600 md:text-lg">{contactData.description}</p>
        </div>
      </section>

      {/* Contact card — direct child of root */}
      <Card className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="relative z-30">
          <div className="flex items-center gap-3 text-sm text-sky-700">
            <NotebookPen className="h-4 w-4" />
            <span>Open for conversation</span>
          </div>
          <p className="mt-4 max-w-2xl text-base text-slate-700 md:text-lg">
            目前网站中的联系方式为示例占位内容，后续可以替换为真实邮箱、GitHub 或其他更合适的公开方式。
          </p>
        </div>
        <GlassPanel className="space-y-3 rounded-[1.25rem] p-5">
          {contactData.methods.map((item) => (
            <div key={item.label} className="relative z-30 flex items-center gap-3 text-sm text-slate-600">
              <Mail className="h-4 w-4 text-sky-600" />
              <span className="font-medium text-slate-800">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </GlassPanel>
      </Card>
    </>
  );
}