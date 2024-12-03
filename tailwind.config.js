/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        surface: "rgba(var(--surface))",
        shadow: "rgba(var(--shadow))",
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        typo: {
          primary: "rgba(var(--typo-primary))",
          secondary: "rgba(var(--typo-secondary))",
        },
        chip: {
          background: "rgba(var(--chip-background))",
          typo: "rgba(var(--chip-typo))",
        },
      },
      screens: {
        xs: "480px",
      },
      width: {
        content: "80ch",
      },
      maxWidth: {
        content: "80ch",
      },
      minWidth: {
        content: "80ch",
      },
      borderWidth: {
        px: "1px",
        3: "3px",
      },
      fontFamily: {
        mono: ["'GitLab Mono'"],
      },
    },
  },
};
