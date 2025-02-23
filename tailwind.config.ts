import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        maxibg: "var(--maxi)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maxiLight: "var(--maxiLight)",
      },
    },
  },
  plugins: [],
} satisfies Config;
