"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Token = { text: string; className?: string };

const baseLines: Token[][] = [
  [{ text: "SecurityAnalyst", className: "font-semibold text-ink" }],
  [
    { text: "| where ", className: "text-cyan" },
    { text: "FullName == " },
    { text: '"Eric Mpho Ramuluvhana"', className: "text-amber" },
  ],
  [
    { text: "| where ", className: "text-cyan" },
    { text: "Certifications has " },
    { text: '"SC-100"', className: "text-amber" },
  ],
  [
    { text: "| project ", className: "text-cyan" },
    { text: "Role, Location, Status, TopSkills" },
  ],
  [{ text: "| take ", className: "text-cyan" }, { text: "1" }],
];

const commands: { target: string; label: string; table: string }[] = [
  { target: "rules", label: "→ show skills", table: "AnalyticsRules" },
  { target: "timeline", label: "→ show experience", table: "IncidentTimeline" },
  { target: "projects", label: "→ show projects", table: "Projects" },
  { target: "certs", label: "→ show certifications", table: "CertificationRegistry" },
  { target: "contact", label: "→ open contact", table: "Contact" },
];

function flatten(tokens: Token[]) {
  return tokens.map((t) => t.text).join("");
}

export default function Terminal() {
  const reduceMotion = usePrefersReducedMotion();
  const [typedLines, setTypedLines] = useState<string[]>(["", "", "", "", ""]);
  const [lastLineOverride, setLastLineOverride] = useState<Token[] | null>(null);
  const [done, setDone] = useState(false);
  const [showCmds, setShowCmds] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    if (reduceMotion) {
      setTypedLines(baseLines.map(flatten));
      setDone(true);
      setShowCmds(true);
      return;
    }

    let cancelled = false;

    async function typeAll() {
      for (let i = 0; i < baseLines.length; i++) {
        const full = flatten(baseLines[i]);
        for (let c = 1; c <= full.length; c++) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, 14));
          setTypedLines((prev) => {
            const next = [...prev];
            next[i] = full.slice(0, c);
            return next;
          });
        }
        await new Promise((r) => setTimeout(r, 90));
      }
      if (!cancelled) {
        setDone(true);
        setShowCmds(true);
      }
    }
    typeAll();
    return () => {
      cancelled = true;
    };
  }, [reduceMotion]);

  async function runCommand(target: string, table: string) {
    setDone(false);
    const full = `| where Table == "${table}"`;
    if (reduceMotion) {
      setLastLineOverride([{ text: full }]);
      setDone(true);
    } else {
      for (let c = 1; c <= full.length; c++) {
        await new Promise((r) => setTimeout(r, 8));
        setLastLineOverride([{ text: full.slice(0, c) }]);
      }
      setDone(true);
    }
    const dest = document.getElementById(target);
    if (dest) {
      setTimeout(
        () => dest.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }),
        250
      );
    }
  }

  // Render a line: colored token spans up to the typed length
  function renderLine(tokens: Token[], typedLength: number) {
    let remaining = typedLength;
    return tokens.map((tok, i) => {
      if (remaining <= 0) return null;
      const slice = tok.text.slice(0, remaining);
      remaining -= tok.text.length;
      return (
        <span key={i} className={tok.className}>
          {slice}
        </span>
      );
    });
  }

  return (
    <div className="overflow-hidden rounded-md border border-line bg-panel shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 border-b border-lineSoft bg-panel2 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a3336]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a4433]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2e433f]" />
        <span className="ml-1.5 font-mono text-[11px] text-faint">kql — sentinel-workspace</span>
      </div>

      <div className="px-5 py-5 font-mono text-[13.5px]">
        {baseLines.map((tokens, i) => {
          const isLast = i === baseLines.length - 1;
          const useOverride = isLast && lastLineOverride;
          return (
            <div key={i} className="min-h-[1.6em] whitespace-pre text-dim">
              {useOverride ? renderLine(lastLineOverride!, 999) : renderLine(tokens, typedLines[i].length)}
              {!done && i === typedLines.findIndex((l, idx) => l.length < flatten(baseLines[idx]).length) && (
                <span className="ml-0.5 inline-block h-[15px] w-[7px] animate-blink align-middle bg-cyan" />
              )}
            </div>
          );
        })}

        <div
          className={`mt-3.5 border-t border-dashed border-lineSoft pt-3.5 text-xs text-faint transition-all duration-500 ${
            done ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
          }`}
        >
          <span className="text-cyan">✓ Query completed</span> — 1 record returned in 0.4s
        </div>

        <div className={`mt-4 flex flex-wrap gap-1.5 ${showCmds ? "" : "hidden"}`}>
          {commands.map((cmd) => (
            <button
              key={cmd.target}
              onClick={() => runCommand(cmd.target, cmd.table)}
              className="rounded border border-cyan/15 bg-cyan/[0.13] px-2.5 py-1.5 font-mono text-[11px] text-cyan transition-colors hover:border-cyan hover:bg-transparent"
            >
              {cmd.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
