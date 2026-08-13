"use client";

import { useEffect, useRef, useState } from "react";

/** Fades/slides an element in once it scrolls into view. Respects prefers-reduced-motion. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

/** Highlights the current section in the nav as the user scrolls. */
export function useScrollspy(sectionIds: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    function update() {
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [sectionIds]);

  return active;
}

/** Ticking local-time clock for a given IANA timezone. */
export function useClock(timeZone: string, suffix: string) {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    function update() {
      const now = new Date();
      const local = new Date(now.toLocaleString("en-US", { timeZone }));
      const hh = String(local.getHours()).padStart(2, "0");
      const mm = String(local.getMinutes()).padStart(2, "0");
      const ss = String(local.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    }
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, [timeZone]);

  return `${time} ${suffix}`;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}
