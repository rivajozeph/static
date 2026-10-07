import { Phone, Contrast } from "lucide-react";

export default function TopBar() {
  return (
    <div className="border-b border-[#dddcd6] bg-[#eeeee8] px-4 py-2 text-[11px] tracking-[0.12em] text-[#30423d] sm:px-6">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-[#17483d]">
            • KOTTAYAM, KERALA
          </span>

          <span>•</span>

          <span>REG. NONPROFIT</span>

          <span className="hidden text-[#a7a69f] sm:inline">|</span>

          <span className="flex items-center gap-1 tracking-normal">
            <Phone size={11} />
            +91 9446211992
          </span>
        </div>

        <div className="flex items-center gap-3 text-[10px]">
          <span>ACCESSIBILITY</span>

          <div className="flex overflow-hidden rounded-full border border-[#d2d1ca] bg-white">
            <button className="px-2 py-1 hover:bg-[#e8eee9]">
              A−
            </button>
            <button className="border-x border-[#d2d1ca] px-2 py-1 hover:bg-[#e8eee9]">
              A
            </button>
            <button className="px-2 py-1 hover:bg-[#e8eee9]">
              A+
            </button>
          </div>

          <button className="flex items-center gap-1 rounded-full border border-[#d2d1ca] bg-white px-2 py-1 transition hover:bg-[#e8eee9]">
            <Contrast size={10} />
            Contrast
          </button>
        </div>
      </div>
    </div>
  );
}