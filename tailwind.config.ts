import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import { nextui } from "@nextui-org/react";

export default {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"], 
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require("@tailwindcss/aspect-ratio"), nextui()],
} satisfies Config;
