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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        amazon_search_focus: {
          focus: "#cd7b00",
        },
      },
      screens: {
        xs: "300px", // 3 items
      },
    },
  },
  plugins: [],
};
export default config;
