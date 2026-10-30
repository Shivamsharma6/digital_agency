import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        infi: {
          blue: "#2a9dc8", // InfiBusiness trademark cyan-blue
          blueHover: "#2286ab",
          blueLight: "#eaf6fb",
          blueDark: "#1a6f8f",
          dark: "#0b1522", // Deep navy/slate background
          cardDark: "#101f33",
          borderDark: "#1c324f",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'card': '0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.04)',
        'elevated': '0 12px 30px -4px rgba(42, 157, 200, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'glow': '0 0 25px -5px rgba(42, 157, 200, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
