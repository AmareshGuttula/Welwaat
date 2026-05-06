import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        foreground: "var(--text-main)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "var(--text-main)",
        },
        secondary: {
          DEFAULT: "#f4f4f5",
          foreground: "var(--text-main)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
