import { ArrowDownRight, MapPin, CircleCheck, Eye } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-[#e2e1da] bg-[#f8f7f2] px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
      <div className="mx-auto grid max-w-[1440px] gap-4 lg:grid-cols-[1.4fr_1fr]">
        {/* LEFT HERO */}
        <div className="rounded-[22px] border border-[#e1e0da] bg-white p-7 shadow-sm sm:p-9 lg:p-10">
          <div className="mb-5 inline-flex rounded-full border border-[#dddcd5] bg-[#f0f1ed] px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-[#50605a]">
            <span className="mr-2 text-[#a65308]">●</span>
            KOTTAYAM DISTRICT UNIT • KERALA
          </div>

          <h1 className="max-w-[650px] font-serif text-[42px] leading-[0.98] tracking-[-0.03em] text-[#063d32] sm:text-[52px] lg:text-[58px]">
            Empowering abilities.
            <br />
            <span className="italic text-[#59615e]">
              Building an inclusive
              <br />
              tomorrow.
            </span>
          </h1>

          <p className="mt-7 max-w-[620px] text-[16px] leading-7 text-[#5d625f] sm:text-[17px]">
            Sakshama Kottayam works alongside individuals with disabilities
            and their families to create opportunities, provide essential
            support, and build a more inclusive community.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#063d32] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#075344] hover:shadow-lg">
              Explore Our Work
              <ArrowDownRight size={15} />
            </button>

            <button className="rounded-xl bg-[#eeeeea] px-5 py-3.5 text-sm font-semibold text-[#263c35] transition hover:-translate-y-0.5 hover:bg-[#e2e3de]">
              Get Involved
            </button>
          </div>

          <div className="mt-7 grid gap-3 border-t border-[#e5e3dd] pt-5 text-[10px] font-medium tracking-[0.12em] text-[#52615c] sm:grid-cols-3">
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck size={12} />
              REGISTERED SOCIETY
            </span>
            <span>♡ 100% VOLUNTEER DRIVEN</span>
            <span className="inline-flex items-center gap-1.5">
              <Eye size={12} />
              ACTIVE EYE DONATION CELL
            </span>
          </div>
        </div>

        {/* RIGHT HERO */}
        <div className="flex min-h-[390px] flex-col justify-end rounded-[22px] border border-[#d7d8d2] bg-gradient-to-b from-[#f3f4ef] via-[#aab7b1] to-[#073d32] p-7 text-white shadow-sm sm:p-9">
          <div>
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[9px] font-semibold tracking-[0.16em] text-[#b8d9cc]">
              ● GRASSROOTS PRESENCE
            </span>

            <p className="mt-5 max-w-[390px] font-serif text-[20px] leading-7 text-white">
              Community rehabilitation and skill development sessions in
              Kottayam, fostering dignity and self-reliance.
            </p>

            <div className="mt-5 flex items-center gap-2 text-[10px] tracking-wide text-[#b8d9cc]">
              <MapPin size={12} />
              Kottayam Central Workshop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
