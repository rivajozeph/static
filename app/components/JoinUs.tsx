import {
  BookOpen,
  Heart,
  HandHeart,
} from "lucide-react";

const options = [
  {
    icon: HandHeart,
    title: "Volunteer",
    text: "Share your time, teaching abilities, administrative skills, scrib assistance for exams, or event support at our weekend camps in Kottayam.",
    button: "REGISTER AS VOLUNTEER",
    style: "green",
  },
  {
    icon: Heart,
    title: "Support a Cause",
    text: "Sponsor specialized mobility devices, educational materials for students, braille slates, or medical contingency funds for families in need.",
    button: "VIEW PRIORITY CAUSES",
    style: "orange",
  },
  {
    icon: BookOpen,
    title: "Partner With Us",
    text: "Academic institutions, hospitals, and corporate CSR initiatives seeking verified grassroots impact and accessibility integration in Kottayam.",
    button: "EXPLORE INSTITUTIONAL TIE-UPS",
    style: "light",
  },
];

export default function JoinUs() {
  return (
    <section
      id="get-involved"
      className="border-b border-[#e3e2dc] bg-[#f8f7f2] px-5 py-16 sm:px-8 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[11px] font-bold tracking-[0.18em] text-[#9d4e0b]">
          • JOIN HANDS WITH US
        </p>

        <h2 className="mt-3 max-w-[650px] font-serif text-4xl leading-[0.98] tracking-[-0.025em] text-[#063d32] sm:text-5xl">
          Every voice, hand, and contribution creates ripples of inclusion
        </h2>

        <p className="mt-5 max-w-[650px] text-[15px] leading-6 text-[#666b67]">
          We welcome compassionate citizens, students, and institutions to
          join our mission across Kottayam taluk and beyond.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {options.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group rounded-[20px] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  item.style === "orange"
                    ? "border-[#e7d0b9] bg-[#fff3e6]"
                    : item.style === "green"
                      ? "border-[#e1e1dc] bg-white"
                      : "border-[#e1e1dc] bg-white"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    item.style === "orange"
                      ? "bg-[#a65308] text-white"
                      : "bg-[#edf0ec] text-[#063d32]"
                  }`}
                >
                  <Icon size={19} />
                </div>

                <h3 className="mt-6 font-serif text-[23px] text-[#123b32]">
                  {item.title}
                </h3>

                <p className="mt-4 min-h-[120px] text-[15px] leading-6 text-[#666b67]">
                  {item.text}
                </p>

                <button
                  className={`mt-5 w-full rounded-xl px-4 py-3 text-[10px] font-bold tracking-[0.08em] transition hover:-translate-y-0.5 ${
                    item.style === "orange"
                      ? "bg-[#a65308] text-white hover:bg-[#873d02]"
                      : item.style === "green"
                        ? "bg-[#063d32] text-white hover:bg-[#075344]"
                        : "bg-[#eeeeea] text-[#34433d] hover:bg-[#e1e2dd]"
                  }`}
                >
                  {item.button}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}