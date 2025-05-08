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
        foreground: '#374151',
        'foreground-medium': '#303F63',
        'foreground-muted': '#5A6D81',
        'border-strong': '#768A9D',
        border: '#92A1B1',
        input: '#AEBAC7',
        'background-muted': '#C8D1DB',
        background: '#E3E8EF',
        'background-alt': '#F2F5F9',
        card: '#ffffff',
        pink: '#C285FF',
      },
      fontSize: {
        'size-h1': '76px',
        'size-h2': '56px',
        'size-h3': '40px',
        'size-h4': '28px',
        'size-h5': '20px',
        'size-h6': '16px',
        'size-p1': '18px',
        'size-p2': '16px',
        'size-p3': '14px',
      },
      lineHeight: {
        'h1': '80px',
        'h2': '72px',
        'h3': '54px',
        'h4': '36px',
        'h5': '28px',
        'h6': '28px',
        'p2': '24px',
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