import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#050505",
        "chrome-light": "#E8E8E8",
        "chrome-dark": "#737373",
        "accent-neon": "#FFFFFF",
      },
      backgroundImage: {
        "metal-gradient":
          "linear-gradient(to bottom right, #E8E8E8, #737373, #171717)",
      },
    },
  },
  plugins: [],
};

export default config;
