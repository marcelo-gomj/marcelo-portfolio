import type { Config } from "tailwindcss";

export default {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ss: { max : "240px"},
      sm: { max: "320px" },
      sl: { max: "480px" },
      ms: { max: "600px" },
      mm: { max: "768px" },
      ml: { max: "900px" },
      ls: { max: "1000px" },
      lm: { max: "1200px" },
      lg: { min: "1400px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        jbm: ['var(--font-jetbrains-mono)'],
      },
      
    },
    
  },
  plugins: [],
} satisfies Config;
