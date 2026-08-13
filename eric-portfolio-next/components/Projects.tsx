"use client";

import { useState } from "react";
import { projects, projectFilters, type ProjectCategory } from "@/lib/data";
import Reveal from "./Reveal";

type FilterKey = ProjectCategory | "all";

export default function Projects() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="py-[78px]">
      <div className="mb-9">
        <div className="font-mono text-[11.5px] uppercase tracking-widest text-faint">Real work, real outcomes</div>
        <h2 className="mt-2 font-display text-[30px] font-semibold">Projects &amp; initiatives</h2>
        <p className="mt-2.5 max-w-[560px] text-[14.5px] text-dim">
          Hands-on work across security operations, IT support, cloud environments, and self-directed learning.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[11.5px] transition-colors ${
                filter === f.key
                  ? "border-cyan/[0.13] bg-cyan/[0.13] text-cyan"
                  : "border-lineSoft text-dim hover:border-cyan hover:text-cyan"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visible.map((p) => (
          <Reveal key={p.title}>
            <div className="flex h-full flex-col rounded-md border border-lineSoft bg-panel p-[22px] transition-colors hover:border-line">
              <div className="mb-1.5 flex items-start gap-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-lineSoft bg-cyan/[0.13] text-base">
                  {p.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wide text-cyan">{p.categoryLabel}</div>
                  <div className="mt-0.5 font-display text-[16.5px] font-semibold leading-snug">{p.title}</div>
                </div>
              </div>
              <div className="mt-3 font-mono text-[11px] text-faint">{p.meta}</div>
              <p className="mt-2.5 text-[13px] leading-relaxed text-dim">{p.description}</p>
              <ul className="mt-3 list-outside list-disc space-y-1.5 pl-4 text-[12.5px] text-dim marker:font-mono marker:text-cyan">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-lineSoft px-2 py-0.5 font-mono text-[10px] text-dim">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
