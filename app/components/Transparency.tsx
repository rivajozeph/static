import {
  Accessibility,
  Eye,
  UsersRound,
  Wrench,
} from "lucide-react";

const impact = [
  {
    icon: UsersRound,
    value: "[ — ]",
    title: "Verified Beneficiaries Supported",
    text: "Across taluks and local panchayats in Kottayam district.",
  },
  {
    icon: Accessibility,
    value: "[ — ]",
    title: "Assistive Devices & Kits Distributed",
    text: "Wheelchairs, hearing aids, white canes, and educational kits.",
  },
  {
    icon: Eye,
    value: "[ — ]",
    title: "Eye Donation Pledges Facilitated",
    text: "Continuous awareness campaigns and verified donor registries.",
  },
  {
    icon: Wrench,
    value: "[ — ]",
    title: "Inclusive Skill Camps Conducted",
    text: "Livelihood workshops and guided self-employment clinics.",
  },
];

export default function Transparency() {
  return (
    <section
      id="impact"
      className="border-b border-[#e3e2dc] bg-[#f3f2ee] px-5 py-16 sm:px-8 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#9d4e0b]">
              • VERIFIED TRANSPARENCY
            </p>

            <h2 className="mt-3 max-w-[650px] font-serif text-4xl leading-[0.98] tracking-[-0.025em] text-[#063d32] sm:text-5xl">
              Our Collective Journey in Kottayam
            </h2>
          </div>

          <p className="max-w-[590px] text-[15px] leading-6 text-[#666b67]">
            We maintain absolute integrity in reporting. In compliance with
            our transparent governance charter, all metrics are officially
            audited alongside local administrative review boards.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[18px] border border-[#deddd7] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#f0f0eb] px-3 py-1 text-[9px] font-bold tracking-[0.12em] text-[#656d69]">
                    AUDIT 2024–25
                  </span>

                  <Icon size={15} className="text-[#063d32]" />
                </div>

                <p className="mt-6 font-serif text-3xl text-[#063d32]">
                  {item.value}
                </p>

                <h3 className="mt-2 text-[15px] font-semibold text-[#183d35]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[14px] leading-5 text-[#6a6e6b]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[20px] bg-[#033c31] px-7 py-8 text-white shadow-lg sm:px-9 sm:py-9">
          <div className="text-2xl font-bold text-[#a65308]">99</div>

          <blockquote className="mt-2 max-w-[900px] font-serif text-2xl italic leading-9 text-white sm:text-3xl">
            "True social empowerment happens when accessibility is treated not
            as charity, but as an inviolable right."
          </blockquote>

          <p className="mt-6 text-[10px] font-semibold tracking-[0.16em] text-[#9ec1b5]">
            SAKSHAMA KOTTAYAM DISTRICT EXECUTIVE COMMITTEE
          </p>
        </div>
      </div>
    </section>
  );
}