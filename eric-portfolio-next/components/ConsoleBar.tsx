"use client";

import { navItems } from "@/lib/data";
import { useClock, useScrollspy } from "@/lib/hooks";

export default function ConsoleBar() {
  const active = useScrollspy(navItems.map((n) => n.id));
  const clock = useClock("Africa/Johannesburg", "SAST");

  return (
    <div className="sticky top-0 z-50 border-b border-lineSoft bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[52px] max-w-[1080px] items-center justify-between px-7 font-mono text-[12.5px]">
        <div className="flex items-center gap-2.5 whitespace-nowrap text-dim">
          <span className="h-[7px] w-[7px] flex-none animate-pulse-ring rounded-full bg-cyan" />
          <span className="text-ink">sentinel-workspace</span> / analyst-profile
        </div>

        <nav className="hidden gap-[22px] sm:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-xs tracking-wide transition-colors hover:text-cyan ${
                active === item.id ? "text-cyan after:mt-[5px] after:block after:h-px after:bg-cyan" : "text-dim"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden whitespace-nowrap text-[11.5px] tracking-wide text-faint min-[521px]:block">
          {clock}
        </div>
      </div>
    </div>
  );
}
