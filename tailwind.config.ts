import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseColor: {
          "0%": { backgroundColor: "var(--color-dark-accent)" },
          "50%": { backgroundColor: "var(--color-dark-accent-animate)" },
          "100%": { backgroundColor: "var(--color-dark-accent)" },
        },
      },
      animation: {
        pulseColor: "pulseColor 3s ease-in-out infinite",
      },
      spacing: {
        'delay-1': '0.2s',
        'delay-2': '0.6s',
        'delay-3': '0.9s',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
