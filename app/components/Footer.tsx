import {
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#deddd7] bg-[#f0efeb] px-5 py-12 sm:px-8 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1.1fr_1fr]">
          {/* ABOUT */}
          <div>
            <div className="font-serif text-xl font-bold text-[#063d32]">
              Sakshama
            </div>

            <p className="text-[8px] font-bold tracking-[0.12em] text-[#a65308]">
              KOTTAYAM
            </p>

            <p className="text-[8px] font-bold tracking-[0.12em] text-[#a65308]">
              DISTRICT
            </p>

            <p className="mt-5 font-serif text-sm italic text-[#59625e]">
              "Empowering abilities, building an inclusive tomorrow."
            </p>

            <p className="mt-5 max-w-[330px] text-[14px] leading-6 text-[#666b67]">
              A registered district charitable unit working in Kottayam,
              Kerala dedicated to dignity, rehabilitation, accessibility, and
              rights for persons with visual and multiple disabilities.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.16em] text-[#29443b]">
              QUICK LINKS
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-[14px] text-[#626864]">
              <a className="transition hover:text-[#a65308]" href="#about-us">
                About Us
              </a>
              <a className="transition hover:text-[#a65308]" href="#about-us">
                Key Objectives
              </a>
              <a
                className="transition hover:text-[#a65308]"
                href="#what-we-do"
              >
                What We Do
              </a>
              <a className="transition hover:text-[#a65308]" href="#what-we-do">
                Eye Donation Initiative
              </a>
              <a className="transition hover:text-[#a65308]" href="#impact">
                Verified Impact
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.16em] text-[#29443b]">
              CONTACT & HELPLINES
            </h3>

            <div className="mt-5 space-y-3 text-[14px] text-[#626864]">
              <p className="flex gap-2">
                <UserRound size={15} />
                President: +91 9446211992
              </p>

              <p className="flex gap-2">
                <UserRound size={15} />
                Secretary: +91 9633133244
              </p>

              <p className="flex gap-2">
                <Phone size={15} />
                Office: 0481 2900564
              </p>

              <p className="flex gap-2">
                <Mail size={15} />
                sakshamakottayam@gmail.com
              </p>

              <p className="flex gap-2">
                <MapPin size={15} />
                Kottayam District, Kerala, India
              </p>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.16em] text-[#29443b]">
              PHASE 1 SUPPORT
            </h3>

            <div className="mt-5 rounded-[16px] border border-[#deddd7] bg-white p-5">
              <h4 className="font-serif text-lg text-[#183d35]">
                Direct Contributions
              </h4>

              <p className="mt-3 text-[13px] leading-5 text-[#666b67]">
                Bank Transfer (NEFT/RTGS) and instant UPI donation gateway
                support available.
              </p>

              <span className="mt-4 inline-block rounded-full bg-[#f0f0eb] px-3 py-1 text-[9px] font-bold tracking-[0.1em] text-[#59625e]">
                80G Tax Exemption Applicable
              </span>

              <a
                href="#direct-support"
                className="mt-4 block text-sm font-bold text-[#a65308] transition hover:text-[#7d3c05]"
              >
                View Donation Details →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#dddcd6] pt-5 text-[11px] text-[#656b67] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2025–2026 Sakshama Kottayam. All rights reserved. • Registered
            Charitable Society.
          </span>

          <div className="flex gap-5">
            <span>Accessibility Statement (WCAG AAA)</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}