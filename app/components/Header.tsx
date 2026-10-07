

"use client";

import { Menu, X, Phone, Heart } from "lucide-react";
import { useState } from "react";

const navigation = [
  "Home",
  "About Us",
  "What We Do",
  "Impact",
  "Get Involved",
  "Direct Support",
  "Contact",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-[#e4e2dc] bg-[#f8f7f2] px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
        
        {/* LOGO */}
        {/* LOGO */}
<div className="flex h-11 w-[105px] flex-col justify-center rounded-full border border-[#e1dfd8] bg-white px-3 shadow-sm">
  <span className="font-serif text-[12px] font-bold leading-none text-[#123b32] whitespace-nowrap">
    Sakshama
  </span>

  <span className="mt-1 text-[6px] tracking-[0.15em] text-[#a65308]">
    KOTTAYAM
  </span>

  <span className="text-[6px] tracking-[0.15em] text-[#a65308]">
    DISTRICT
  </span>
</div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-1 rounded-full border border-[#e3e1db] bg-white p-1 shadow-sm lg:flex">
          {navigation.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className={`rounded-full px-4 py-2 text-[11px] transition-all duration-200 ${
                index === 0
                  ? "bg-[#063d32] text-white shadow-sm"
                  : "text-[#39443f] hover:bg-[#edf1ed] hover:text-[#063d32]"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-2 lg:flex">
          <button className="flex items-center gap-1 rounded-full bg-[#a94e03] px-5 py-3 text-[10px] font-bold tracking-wide text-white shadow-sm transition hover:bg-[#873d02] hover:-translate-y-0.5">
            SUPPORT SAKSHAMA
            <Heart size={11} fill="currentColor" />
          </button>

          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#deddd7] bg-white transition hover:bg-[#edf1ed]">
            <Phone size={14} />
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#deddd7] bg-white text-[#063d32] shadow-sm transition hover:bg-[#edf1ed] lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-[#dddcd5] bg-[#f8f7f2] px-5 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm transition ${
                  index === 0
                    ? "bg-[#063d32] text-white"
                    : "text-[#263c35] hover:bg-[#e9eee9]"
                }`}
              >
                {item}
              </a>
            ))}

            <button className="mt-2 rounded-xl bg-[#a94e03] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#873d02]">
              SUPPORT SAKSHAMA
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}