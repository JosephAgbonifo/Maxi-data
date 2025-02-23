import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        maxi: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
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
