import { X } from "lucide-react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <div
        className="relative z-[80] mx-4 w-full max-w-md rounded-[1.5rem] border border-white/20 bg-white/95 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">联系方式</h3>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="关闭"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="space-y-4 text-base text-slate-800">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-900">手机号码：</span>
              <span>172-0038-4216</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-900">邮箱：</span>
              <span>whereis3au1116@163.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}