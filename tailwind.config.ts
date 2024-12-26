import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        p1: "var(--p1)",
        p2: "var(--p2)",
        p3: "var(--p3)",
        p4: "var(--p4)",
        p5: "var(--p5)",
        'p4/50': 'rgba(125, 182, 145, 0.3)',
        'p5/50': 'rgba(199, 238, 212, 0.5)', 
      },
      fontFamily: {
        inika: ["Inika", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
