import { PropsWithChildren, useContext, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

export interface ThemeHandle {
  active: string;
  change: (theme: string) => void;
}

export function useTheme(): ThemeHandle {
  const context = useContext(ThemeContext);

  if (context == null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [active, setActive] = useState(localStorage.getItem("theme") ?? "dark");

  useEffect(() => {
    for (const className of document.body.classList) {
      document.body.classList.remove(className);
    }

    if (active != null) {
      localStorage.setItem("theme", active);

      document.body.classList.add(active);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
      return;
    }

    document.body.classList.add("light");
  }, [active]);

  return (
    <ThemeContext.Provider
      value={{
        active: active,
        change: setActive,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
