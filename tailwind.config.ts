import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--fg)",
        card: "var(--card)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(74, 222, 128, 0.35)",
        soft: "0 20px 60px rgba(9, 9, 11, 0.35)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 10% 20%, rgba(56,189,248,0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(244,63,94,0.25), transparent 50%), radial-gradient(circle at 60% 80%, rgba(34,197,94,0.25), transparent 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 18s linear infinite",
        glow: "glow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
