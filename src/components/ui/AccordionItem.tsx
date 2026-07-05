import { ChevronDown } from "lucide-react";
import { useState } from "react";

type AccordionItemProps = {
  title: string;
  subtitle: string;
  content: string[];
  time?: string;
  delay?: number;
};

const panelConfig = '{"blurAmount": 0.25, "cornerRadius": 30}';
const buttonConfig = '{"button": true, "cornerRadius": 24}';

export function AccordionItem({ title, subtitle, content, time, delay = 0 }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="glass soft-card w-full max-w-6xl mx-auto my-6 overflow-hidden motion-safe:animate-[fadeUp_0.6s_ease-out]"
      data-config={panelConfig}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "backwards" }}
    >
      <button
        type="button"
        className="glass glass-button flex w-full items-center justify-between gap-4 rounded-[1.25rem] px-6 py-5 text-left text-slate-800"
        data-config={buttonConfig}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <div className="relative z-30 flex-1">
          <h3 className="text-xl font-medium text-slate-800">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>
        {time ? (
          <span className="relative z-30 ml-4 flex-none text-sm font-normal text-slate-400">
            {time}
          </span>
        ) : null}
        <ChevronDown
          className={`relative z-30 h-5 w-5 flex-none text-sky-600 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="relative z-30 px-6 pb-6 text-sm leading-7 text-slate-600">
            <div className="subtle-line mb-5" />
            <ul className="space-y-3">
              {content.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-500" />
                  <span
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}