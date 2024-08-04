import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //pls update with your demo colors henery, pls be descriptive with names
        primary: "#000000",
        secondary: "#000000",
        tertiary: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
