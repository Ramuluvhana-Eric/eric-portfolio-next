"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      onClick={handleCopy}
      className={`flex-none rounded border px-2 py-1 font-mono text-[10px] transition-colors ${
        copied ? "border-cyan bg-cyan/[0.13] text-cyan" : "border-lineSoft text-faint hover:border-cyan hover:text-cyan"
      }`}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-[78px]">
      <div className="mb-9">
        <div className="font-mono text-[11.5px] uppercase tracking-widest text-faint">Open a channel</div>
        <h2 className="mt-2 font-display text-[30px] font-semibold">Let&apos;s talk</h2>
      </div>

      <Reveal>
        <div className="grid grid-cols-1 gap-8 rounded-md border border-line bg-panel p-[26px] sm:p-9 md:grid-cols-[1.1fr_1fr]">
          <div className="font-mono text-[12.5px] leading-[1.9] text-faint">
            <span className="text-cyan">eric@soc:~$</span> whoami --verbose
            <br />
            &gt; South African citizen, based in Johannesburg
            <br />
            &gt; Available immediately, open to Cape Town relocation
            <br />
            &gt; Languages: English, Venda (native), Sepedi (fluent), isiZulu (conversational)
            <br />
            <br />
            <span className="text-cyan">eric@soc:~$</span> status
            <br />
            &gt; Actively evaluating new SOC / cloud security opportunities
            <br />
            &gt; References available on request
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between rounded border border-lineSoft px-3.5 py-3 text-[13.5px]">
              <span>
                <span className="block font-mono text-[11px] text-dim">EMAIL</span>
                <span className="font-medium">{profile.email}</span>
              </span>
              <span className="flex items-center gap-2.5">
                <CopyButton value={profile.email} />
                <a href={`mailto:${profile.email}`} aria-label="Email Eric" className="text-dim transition-colors hover:text-cyan">
                  ↗
                </a>
              </span>
            </div>

            <div className="flex items-center justify-between rounded border border-lineSoft px-3.5 py-3 text-[13.5px]">
              <span>
                <span className="block font-mono text-[11px] text-dim">PHONE</span>
                <span className="font-medium">{profile.phoneDisplay}</span>
              </span>
              <span className="flex items-center gap-2.5">
                <CopyButton value={profile.phone.replace(/\s/g, "")} />
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  aria-label="Call Eric"
                  className="text-dim transition-colors hover:text-cyan"
                >
                  ↗
                </a>
              </span>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between rounded border border-lineSoft px-3.5 py-3 text-[13.5px] transition-colors hover:border-cyan hover:bg-cyan/[0.13]"
            >
              <span>
                <span className="block font-mono text-[11px] text-dim">LINKEDIN</span>
                <span className="font-medium">{profile.linkedinLabel}</span>
              </span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
