import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7FAF9",
        ink: "#071A18",
        text: "#10201D",
        muted: "#66736F",
        primary: "#0E7C66",
        secondary: "#19A982",
        accent: "#8BE3C1",
      },
      boxShadow: {
        soft: "0 28px 80px rgba(7, 26, 24, 0.10)",
        glass: "0 16px 50px rgba(7, 26, 24, 0.08)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 70% 35%, rgba(139, 227, 193, 0.42), transparent 42%)",
      },
    },
  },
  plugins: [],
};

export default config;
