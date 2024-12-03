import { createContext } from "react";
import { ThemeHandle } from "./ThemeProvider";

const ThemeContext = createContext<ThemeHandle | null>(null);

export default ThemeContext;
