import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        metal: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
