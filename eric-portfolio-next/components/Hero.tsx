import Image from "next/image";
import Terminal from "./Terminal";
import Reveal from "./Reveal";
import { heroChips, profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="pb-10 pt-16">
      <div className="mb-3.5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan">
        <span className="text-amber">▹</span> Query executed against SecurityAnalyst table
      </div>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <Terminal />

        <div className="relative rounded-md border border-line bg-panel p-[22px]">
          <span className="absolute right-3.5 top-3.5 rounded border border-cyan/[0.13] bg-cyan/[0.13] px-1.5 py-[3px] font-mono text-[9.5px] tracking-wide text-cyan">
            IDENTITY VERIFIED
          </span>

          <div className="mb-4.5 flex items-start gap-4.5">
            <Image
              src="/eric.jpg"
              alt="Portrait of Eric Mpho Ramuluvhana"
              width={132}
              height={168}
              priority
              className="h-[168px] w-[132px] flex-none rounded-lg border border-line object-cover object-[center_15%] shadow-[0_12px_30px_-12px_rgba(0,0,0,0.55)] max-[420px]:h-[140px] max-[420px]:w-[110px]"
            />
            <div>
              <div className="font-display text-[22px] font-semibold leading-tight">
                Eric Mpho
                <br />
                Ramuluvhana
              </div>
              <div className="mt-1.5 font-mono text-xs text-cyan">{profile.role}</div>
              <div className="mt-1.5 font-mono text-[11.5px] text-faint">📍 {profile.location}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {heroChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-dim"
              >
                {chip}
              </span>
            ))}
            <span className="rounded-full border border-amber/[0.13] bg-amber/[0.13] px-2.5 py-1 font-mono text-[11px] text-amber">
              SC-500 in progress
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded border border-cyan bg-cyan px-3.5 py-2.5 font-mono text-xs font-semibold text-[#06201C] transition-colors hover:bg-[#63e4d8]"
            >
              ✉ Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded border border-line px-3.5 py-2.5 font-mono text-xs text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              LinkedIn ↗
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 rounded border border-line px-3.5 py-2.5 font-mono text-xs text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              Call
            </a>
          </div>
        </div>
      </div>

      <div className="mt-11 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-lineSoft bg-lineSoft sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-panel px-4.5 py-5">
            <div className="font-display text-[26px] font-bold text-cyan">{s.num}</div>
            <div className="mt-1 font-mono text-[11px] tracking-wide text-faint">{s.label}</div>
          </div>
        ))}
      </div>

      <Reveal className="mt-[78px] grid grid-cols-1 items-start gap-3.5 md:grid-cols-[220px_1fr] md:gap-8">
        <div className="sticky top-[70px] font-mono text-[11.5px] uppercase tracking-widest text-faint">
          // about
        </div>
        <div className="space-y-3.5 text-[15px] leading-relaxed text-dim">
          <p>
            I&apos;m a SIEM engineer and SOC analyst working{" "}
            <b className="font-semibold text-ink">24/7 rotational shifts</b> at Rayton Corp, an MSSP in
            Johannesburg. My day-to-day is Microsoft Sentinel and KQL — building analytics rules, tuning out
            false positives, and correlating telemetry across endpoint, identity, and cloud to catch attack
            chains before they escalate.
          </p>
          <p>
            I hold <b className="font-semibold text-ink">12 active certifications</b>, including the SC-100
            Cybersecurity Architect Expert — Microsoft&apos;s highest security credential — built up in under
            two years alongside full-time SOC work. I&apos;m currently studying toward{" "}
            <b className="font-semibold text-ink">SC-500 (Cloud &amp; AI Security Engineer Associate)</b>.
          </p>
          <p>
            Fluent in English, Venda, and Sepedi, with conversational isiZulu. Based in Johannesburg, open to
            Cape Town.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
