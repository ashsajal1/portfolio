import type { Config } from "tailwindcss";
import { violet, green, blue } from "tailwindcss/colors";

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
      colors: {
        primaryLow: blue[200],
        primary: blue[700],
        secondary: violet[600],
        secondaryLow: violet[200],
        secondaryHigh: violet[800],
      },
    },
  },
  plugins: [],
};
export default config;
