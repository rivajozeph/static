import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f8f7f2] px-5 py-16 sm:px-8 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[11px] font-bold tracking-[0.18em] text-[#9d4e0b]">
          • GET IN TOUCH
        </p>

        <h2 className="mt-3 max-w-[650px] font-serif text-4xl leading-[0.98] tracking-[-0.025em] text-[#063d32] sm:text-5xl">
          We are here to listen, support, and collaborate
        </h2>

        <p className="mt-5 max-w-[700px] text-[15px] leading-6 text-[#666b67]">
          Reach out directly to district leadership or submit your enquiry
          through our accessible portal below.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* DIRECT HELPLINES */}
          <div className="rounded-[20px] border border-[#deddd7] bg-[#f3f2ee] p-6">
            <h3 className="font-serif text-2xl text-[#123b32]">
              Direct Helplines
            </h3>

            <div className="mt-6 space-y-5">
              <ContactItem
                icon={UserRound}
                label="PRESIDENT"
                value="+91 9446211992"
              />

              <ContactItem
                icon={UserRound}
                label="SECRETARY"
                value="+91 9633133244"
              />

              <ContactItem
                icon={Phone}
                label="OFFICE PHONE"
                value="0481 2900564"
              />

              <ContactItem
                icon={Mail}
                label="OFFICIAL EMAIL"
                value="sakshamakottayam@gmail.com"
              />

              <ContactItem
                icon={MapPin}
                label="REGISTERED OFFICE ADDRESS"
                value="Sakshama District Office, Near Thirunakkara, Kottayam, Kerala — 686001"
              />

              <ContactItem
                icon={Clock3}
                label="WORKING HOURS"
                value="Monday to Saturday: 9:30 AM – 5:00 PM IST"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[20px] border border-[#deddd7] bg-[#f3f2ee] p-6">
            <h3 className="font-serif text-2xl text-[#123b32]">
              Send an Accessible Enquiry
            </h3>

            <p className="mt-2 text-[13px] text-[#707570]">
              We respond within 24–48 hours to community requests and volunteer
              registrations.
            </p>

            <form className="mt-6 space-y-5">
              <label className="block">
                <span className="text-[13px] font-semibold text-[#3f4b46]">
                  Full Name *
                </span>

                <input
                  type="text"
                  placeholder="e.g. Anjali Nair"
                  className="mt-2 w-full rounded-xl border border-[#deddd7] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#063d32] focus:ring-2 focus:ring-[#063d32]/10"
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[13px] font-semibold text-[#3f4b46]">
                    Phone Number *
                  </span>

                  <input
                    type="tel"
                    placeholder="e.g. +9198470 00000"
                    className="mt-2 w-full rounded-xl border border-[#deddd7] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#063d32] focus:ring-2 focus:ring-[#063d32]/10"
                  />
                </label>

                <label className="block">
                  <span className="text-[13px] font-semibold text-[#3f4b46]">
                    Email Address
                  </span>

                  <input
                    type="email"
                    placeholder="e.g. name@domain.com"
                    className="mt-2 w-full rounded-xl border border-[#deddd7] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#063d32] focus:ring-2 focus:ring-[#063d32]/10"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[13px] font-semibold text-[#3f4b46]">
                  Your Message or Request *
                </span>

                <textarea
                  rows={5}
                  placeholder="How can we assist you or how would you like to partner with us?"
                  className="mt-2 w-full resize-none rounded-xl border border-[#deddd7] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#063d32] focus:ring-2 focus:ring-[#063d32]/10"
                />
              </label>

              <button
                type="button"
                className="rounded-xl bg-[#a65308] px-6 py-3.5 text-xs font-bold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#873d02] hover:shadow-md"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof UserRound;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#063d32] text-white">
        <Icon size={15} />
      </div>

      <div>
        <p className="text-[9px] font-bold tracking-[0.14em] text-[#777d79]">
          {label}
        </p>

        <p className="mt-1 text-[14px] leading-5 text-[#29423a]">{value}</p>
      </div>
    </div>
  );
}