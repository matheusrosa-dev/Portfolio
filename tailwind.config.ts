import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "card-sm": "500px",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at 50% -70%, #179aff 0%, black 60%)",
        "gradient-text": "linear-gradient(90deg, #8fd4ff, #179aff);",
      },
      boxShadow: {
        "project-card":
          "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
      },
    },
  },
  plugins: [],
} satisfies Config;
