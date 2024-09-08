import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contact/**/*.{js,ts,jsx,tsx,mdx}",


  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, blue' +
            ', white, #1e40af, #3b82f6)', // From gray to white to blue

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
