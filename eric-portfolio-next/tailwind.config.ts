import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E13",
        panel: "#10161D",
        panel2: "#141C24",
        line: "#212B36",
        lineSoft: "#1A222B",
        ink: "#E8EDF3",
        dim: "#8B98A8",
        faint: "#57667A",
        cyan: "#4FD8CB",
        amber: "#F2B84B",
        crit: "#E5626B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(79,216,203,0.45)" },
          "70%": { boxShadow: "0 0 0 7px rgba(79,216,203,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(79,216,203,0)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s infinite",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
