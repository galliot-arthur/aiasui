import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./libs/**/*.{tsx,mdx}", "./app/**/*.{tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderWidth: {
        1: "1px",
      },
      outlineWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
export default config;
