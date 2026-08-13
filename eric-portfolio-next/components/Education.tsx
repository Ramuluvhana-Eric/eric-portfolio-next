import { education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-[78px]">
      <div className="mb-9">
        <div className="font-mono text-[11.5px] uppercase tracking-widest text-faint">Academic background</div>
        <h2 className="mt-2 font-display text-[30px] font-semibold">Education</h2>
        <p className="mt-2.5 text-[14.5px] text-dim">Formal qualifications underpinning practical expertise.</p>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {education.map((edu) => (
          <Reveal key={edu.name}>
            <div className="rounded-md border border-lineSoft bg-panel px-5 py-[18px]">
              <div className="font-mono text-[11px] text-cyan">{edu.year}</div>
              <div className="mt-1.5 font-display text-base font-semibold">{edu.name}</div>
              <div className="mt-0.5 text-[13px] text-dim">{edu.org}</div>
              {edu.detail && (
                <div className="mt-2.5 text-[13px] leading-relaxed text-dim">
                  {edu.detail.split(/(\d+\.?\d*%)/).map((part, i) =>
                    /\d+\.?\d*%/.test(part) ? (
                      <b key={i} className="text-ink">
                        {part}
                      </b>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </div>
              )}
              {edu.modules && (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {edu.modules.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-lineSoft px-2 py-[3px] font-mono text-[10.5px] text-faint"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
