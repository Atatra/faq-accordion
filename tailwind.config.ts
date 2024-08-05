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
        "hero-desktop":
          "url('../../public/images/background-pattern-desktop.svg')",
        "hero-mobile":
          "url('../../public/images/background-pattern-mobile.svg')",
      },
      fontFamily: {
        workSans: ["var(--font-workSans)"],
      },
      colors: {
        "purpl-ish": "#AD28EB",
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
      },
    },
  },
  plugins: [],
};
export default config;
