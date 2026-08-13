"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function Footer() {
  const [timestamp, setTimestamp] = useState("");
  const year = new Date().getFullYear();

  useEffect(() => {
    setTimestamp(
      "Session started " +
        new Date().toLocaleString("en-ZA", { dateStyle: "medium", timeStyle: "short" })
    );
  }, []);

  return (
    <footer className="flex flex-wrap justify-between gap-2 border-t border-lineSoft py-7 pb-10 font-mono text-[11.5px] text-faint">
      <span>© {year} {profile.name}</span>
      <span>{timestamp}</span>
    </footer>
  );
}
