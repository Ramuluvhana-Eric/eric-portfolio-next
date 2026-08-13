"use client";

import { useState } from "react";
import { skillCategories, skillFilters, type SkillCategory } from "@/lib/data";
import Reveal from "./Reveal";

type FilterKey = SkillCategory | "all" | "core";

export default function Skills() {
  const [filter, setFilter] = useState<FilterKey>("all");

  return (
    <section id="rules" className="py-[78px]">
      <div className="mb-9">
        <div className="font-mono text-[11.5px] uppercase tracking-widest text-faint">Analytics rules</div>
        <h2 className="mt-2 font-display text-[30px] font-semibold">What I work with day to day</h2>
        <p className="mt-2.5 max-w-[560px] text-[14.5px] text-dim">
          Grouped the way a Sentinel workspace groups its own rules — by what they&apos;re built to catch.{" "}
          <span className="text-cyan">Core</span> marks daily-driver tools; the rest is working knowledge I
          reach for regularly.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {skillFilters.map((f) => (
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

      {skillCategories.map((cat) => {
        const visibleSkills = cat.skills.filter((s) => {
          if (filter === "all") return true;
          if (filter === "core") return !!s.core;
          return cat.key === filter;
        });
        if (visibleSkills.length === 0) return null;

        return (
          <Reveal key={cat.key} className="mb-7">
            <div className="mb-3 flex items-center gap-2 font-mono text-xs tracking-wide text-cyan">
              {cat.title}
              <span className="h-px flex-1 bg-lineSoft" />
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`rounded-sm border border-lineSoft bg-panel py-3 pl-3.5 pr-3.5 text-[13px] ${
                    skill.core ? "border-l-2 border-l-cyan" : "border-l-2 border-l-faint"
                  }`}
                >
                  <div className="font-medium">{skill.name}</div>
                  <span
                    className={`mt-1 block font-mono text-[9.5px] uppercase tracking-wide ${
                      skill.core ? "text-cyan" : "text-faint"
                    }`}
                  >
                    {skill.core ? "Core" : "Working"}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        );
      })}
    </section>
  );
}
