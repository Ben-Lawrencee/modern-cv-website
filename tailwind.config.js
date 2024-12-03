/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    extend: {
      colors: {
        primary: "#4FD98D",
        surface: {
          dark: "#1D1D1D",
          DEFAULT: "#FCFCFC",
          light: "#FCFCFC",
        },
        shadow: "#8B8B8B",
        background: {
          dark: "#0D0D0D",
          DEFAULT: "#FFFFFF",
          light: "#FFFFFF",
        },
        border: {
          dark: "#4E4E4E",
          DEFAULT: "#C9C9C9",
          light: "#C9C9C9",
        },
        typo: {
          primary: {
            dark: "#D3D3D3",
            DEFAULT: "#1B1B1B",
            light: "#1B1B1B",
          },
          secondary: {
            dark: "#A6A6A6",
            DEFAULT: "#4E4E4E",
            light: "#4E4E4E",
          },
        },
        chip: {
          background: {
            dark: "#272727",
            DEFAULT: "#F3F3F3",
            light: "#F3F3F3",
          },
          foreground: {
            dark: "#9C9C9C",
            DEFAULT: "#949494",
            light: "#949494",
          },
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
