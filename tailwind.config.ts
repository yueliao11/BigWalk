import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ecff",
          500: "#2f7df6",
          600: "#1f63d6",
          700: "#1850ad",
        },
        ink: "#0f172a",
        muted: "#64748b",
      },
      maxWidth: {
        prose: "48rem",
      },
    },
  },
  plugins: [],
};

export default config;
