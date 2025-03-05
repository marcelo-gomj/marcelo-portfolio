import type { Config } from "tailwindcss";

export default {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: { min: "1400px" },
      lm: { max: "1200px" },
      ls: { max: "1000px" },
      ml: { max: "900px" },
      mm: { max: "768px" },
      ms: { max: "600px" },
      sl: { max: "480px" },
      sm: { max: "380px" },
      ss: { max : "280px"},
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
