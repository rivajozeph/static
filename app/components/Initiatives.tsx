import {
  Accessibility,
  Eye,
  HandHeart,
  HeartHandshake,
  Landmark,
  Users,
  UsersRound,
} from "lucide-react";

const initiatives = [
  {
    title: "Eye Donation Initiatives",
    text: "Dedicated campaigns advocating corneal donation, active pledge drives, and rapid 24/7 liaison with certified eye banks across Kottayam and central Kerala.",
    label: "Active Cornea Liaison",
    icon: Eye,
    featured: true,
    badge: "✦ 24/7 PRIORITY CELL",
  },
  {
    title: "Skill Development",
    text: "Practical handicrafts, umbrella assembly, tailoring, digital literacy, and sustainable livelihood workshops enabling durable financial self-reliance.",
    label: "Vocational Independence",
    icon: Accessibility,
  },
  {
    title: "Financial Assistance",
    text: "Direct support for emergency medical needs, educational supplies, and assistive mobility equipment for vulnerable families facing critical distress.",
    label: "Direct Family Aid",
    icon: HandHeart,
  },
  {
    title: "Family Support",
    text: "Psychological counseling, caregiver respite forums, peer circles, and continuous navigation networks for parents and guardians of neurodiverse youth.",
    label: "Caregiver Networks",
    icon: Users,
  },
  {
    title: "Awareness Programs",
    text: "Community seminars, sensitisation camps in colleges, and grama panchayat workshops promoting disability rights, empathy, and barrier-free architecture.",
    label: "Social Transformation",
    icon: UsersRound,
  },
  {
    title: "Community Outreach",
    text: "Door-to-door welfare assessments, mobile registration desks, rural Kottayam health screening camps, and doorstep delivery of essential medical kits.",
    label: "Last-Mile Support",
    icon: Accessibility,
    wide: true,
  },
  {
    title: "Institutional Collaboration",
    text: "Partnering directly with regional healthcare centres, special schools, government social welfare departments, and civic non-profits to eliminate systemic accessibility friction.",
    label: "Multi-Stakeholder Coalition",
    icon: Landmark,
    wide: true,
    badge: "Partner With Unit ◈",
  },
];

export default function Initiatives() {
  return (
    <section
      id="what-we-do"
      className="border-b border-[#e3e2dc] bg-[#f8f7f2] px-5 py-16 sm:px-8 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#9d4e0b]">
              • OUR CORE INITIATIVES
            </p>

            <h2 className="mt-3 max-w-[700px] font-serif text-4xl leading-[0.98] tracking-[-0.025em] text-[#063d32] sm:text-5xl">
              Comprehensive programmes tailored for holistic wellbeing
            </h2>

            <p className="mt-5 max-w-[680px] text-[15px] leading-6 text-[#666b67]">
              Seven dedicated avenues of grassroots intervention in Kottayam
              district, designed to provide tangible, respectful assistance at
              every life stage.
            </p>
          </div>

          <a
            href="#contact"
            className="whitespace-nowrap text-sm font-semibold text-[#183e35] transition hover:text-[#a65308]"
          >
            Enquire about local services →
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {initiatives.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group rounded-[20px] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  item.featured
                    ? "border-[#e9cfb6] bg-[#fff0df]"
                    : "border-[#e2e1db] bg-white"
                } ${item.wide ? "lg:min-h-[185px]" : "min-h-[235px]"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      item.featured
                        ? "bg-[#a65308] text-white"
                        : "bg-[#edf0ec] text-[#063d32] group-hover:bg-[#063d32] group-hover:text-white"
                    } transition`}
                  >
                    <Icon size={19} />
                  </div>

                  {item.badge && (
                    <span
                      className={`rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.1em] ${
                        item.featured
                          ? "bg-[#f4d9be] text-[#99500d]"
                          : "bg-[#f0f0eb] text-[#53605b]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-serif text-[23px] leading-tight text-[#123b32]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-6 text-[#666b67]">
                  {item.text}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-[10px] font-bold tracking-[0.1em] text-[#60706a]">
                  <span>◉ {item.label}</span>

                  {item.featured && (
                    <span className="rounded-full bg-white px-3 py-1 text-[#a65308]">
                      Immediate Eye Bank Help: 9446211992
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}