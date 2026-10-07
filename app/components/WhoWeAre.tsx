import {
  Accessibility,
  Megaphone,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const services = [
  {
    icon: Accessibility,
    title: "Empowerment",
    text: "Fostering independence through vocational training, assistive aids, educational scholarships, and self-advocacy workshops.",
    label: "SELF-RELIANCE",
  },
  {
    icon: Megaphone,
    title: "Awareness",
    text: "Educating schools, local bodies, and the wider public to dismantle stigma and build accessible civic environments across Kerala.",
    label: "CIVIC EDUCATION",
  },
  {
    icon: ShieldCheck,
    title: "Support Services",
    text: "Direct healthcare assistance, medical guidance, therapy support, and personalized aid for underprivileged families.",
    label: "HOLISTIC CARE",
  },
  {
    icon: UsersRound,
    title: "Community Engagement",
    text: "Mobilizing local volunteers, cultural participation, legal rights awareness, and broad institutional solidarity.",
    label: "UNIFIED ACTION",
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="about-us"
      className="border-b border-[#e3e2dc] bg-[#f8f7f2] px-5 py-16 sm:px-8 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#9d4e0b]">
              • WHO WE ARE
            </p>

            <h2 className="mt-3 max-w-[650px] font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-[#063d32] sm:text-5xl">
              Dignity, opportunity and lifelong support in our local community
            </h2>
          </div>

          <p className="max-w-[600px] text-[16px] leading-7 text-[#626763]">
            Sakshama Kottayam supports people with physical, intellectual and
            sensory disabilities through education, healthcare assistance,
            skill development, awareness programmes and community support.
            Rooted in Kottayam, we bridge societal barriers to ensure every
            individual lives with self-respect, equal access, and genuine
            inclusion alongside their families.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex min-h-[255px] flex-col rounded-[18px] border border-[#e2e1db] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9cec8] hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf0ec] text-[#063d32] transition group-hover:bg-[#063d32] group-hover:text-white">
                  <Icon size={19} />
                </div>

                <h3 className="mt-6 font-serif text-[21px] leading-tight text-[#123b32]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[15px] leading-6 text-[#666b67]">
                  {service.text}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-[#e9e7e1] pt-4 text-[10px] font-bold tracking-[0.12em] text-[#9d4e0b]">
                  <span>{service.label}</span>
                  <span>↗</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}