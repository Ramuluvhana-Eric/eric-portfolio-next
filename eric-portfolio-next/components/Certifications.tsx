"use client";

import { useState } from "react";
import { certifications } from "@/lib/data";
import Reveal from "./Reveal";

export default function Certifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="certs" className="py-[78px]">
      <div className="mb-9">
        <div className="font-mono text-[11.5px] uppercase tracking-widest text-faint">Certification registry</div>
        <h2 className="mt-2 font-display text-[30px] font-semibold">12 active, 1 in progress</h2>
        <p className="mt-2.5 text-[14.5px] text-dim">Click a row to see what it covers.</p>
      </div>

      <Reveal>
        <div className="overflow-hidden rounded-md border border-lineSoft">
          <div className="hidden grid-cols-[2.4fr_1.3fr_1fr] bg-panel2 px-4.5 py-3 font-mono text-[10.5px] uppercase tracking-wide text-faint sm:grid">
            <div>Certification</div>
            <div>Vendor</div>
            <div>Status</div>
          </div>

          {certifications.map((cert, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={cert.name}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="cursor-pointer border-b border-lineSoft px-4 py-3.5 text-[13px] transition-colors last:border-b-0 hover:bg-panel sm:px-4.5"
              >
                <div className="grid grid-cols-1 items-center gap-1 sm:grid-cols-[2.4fr_1.3fr_1fr] sm:gap-0">
                  <div className="font-medium">{cert.name}</div>
                  <div className="font-mono text-xs text-dim sm:text-inherit">
                    {cert.vendor} · {cert.level}
                  </div>
                  <div
                    className={`font-mono text-[11px] ${cert.status === "Active" ? "text-cyan" : "text-amber"}`}
                  >
                    {cert.status}{" "}
                    <span
                      className={`inline-block font-mono text-[11px] text-faint transition-transform ${
                        isOpen ? "rotate-90 text-cyan" : ""
                      }`}
                    >
                      ▸
                    </span>
                  </div>
                </div>
                <div
                  className={`overflow-hidden text-[12.5px] text-dim transition-all duration-300 ${
                    isOpen ? "mt-2.5 max-h-24" : "max-h-0"
                  }`}
                >
                  {cert.detail}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
