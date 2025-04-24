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
        primary: '#259EE5',
        'primary-dark': '#0C004B',
        'primary-darker': '#080033',
        secondary: '#EE664A',
        accent: '#00CCA8',
        'foreground-strong': '#101924',
        foreground: '#273547',
        'foreground-medium': '#303F63',
        'foreground-muted': '#5A6D81',
        'border-strong': '#768A9D',
        border: '#92A1B1',
        input: '#AEBAC7',
        'background-muted': '#C8D1DB',
        background: '#E3E8EF',
        'background-alt': '#F2F5F9',
        card: '#ffffff',
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // Use Poppins as the default sans-serif
        mono: ["var(--font-geist-mono)", "monospace"], // Keep Geist Mono for monospace
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 