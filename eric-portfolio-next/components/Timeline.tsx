import { timeline } from "@/lib/data";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section id="timeline" className="py-[78px]">
      <div className="mb-9">
        <div className="font-mono text-[11.5px] uppercase tracking-widest text-faint">Incident timeline</div>
        <h2 className="mt-2 font-display text-[30px] font-semibold">Experience, logged chronologically</h2>
      </div>

      <div className="relative pl-[26px]">
        <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-gradient-to-b from-line to-transparent" />

        {timeline.map((inc, i) => (
          <Reveal key={inc.id} className={i === timeline.length - 1 ? "" : "mb-11"}>
            <div className="relative">
              <span
                className={`absolute -left-[26px] top-1.5 h-[11px] w-[11px] rounded-full border-2 ${
                  inc.status === "ACTIVE"
                    ? "border-cyan bg-cyan shadow-[0_0_0_4px_rgba(79,216,203,0.13)]"
                    : "border-faint bg-bg"
                }`}
              />
              <div className="mb-2 flex flex-wrap items-center gap-2.5 font-mono text-[11.5px] text-faint">
                <span className="text-dim">{inc.id}</span>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] tracking-wide ${
                    inc.status === "ACTIVE"
                      ? "border-cyan/[0.13] bg-cyan/[0.13] text-cyan"
                      : "border-line text-faint"
                  }`}
                >
                  {inc.status}
                </span>
                <span>{inc.period}</span>
              </div>
              <div className="font-display text-[19px] font-semibold">{inc.role}</div>
              <div className="mt-0.5 text-[13.5px] text-dim">{inc.org}</div>
              <ul className="mt-3.5 list-outside list-disc space-y-1.5 pl-4.5 text-[13.5px] text-dim marker:font-mono marker:text-cyan">
                {inc.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
