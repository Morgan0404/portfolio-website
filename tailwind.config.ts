import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'moving-gradient': {
          '0%, 100%': { backgroundPosition: '200% 0%' },
          '50%': { backgroundPosition: '0% 100%' },
        },
      },
      animation: {
        'moving-gradient': 'moving-gradient 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
