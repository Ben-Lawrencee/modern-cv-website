import ReactDOM from "react-dom/client";
import "@/styles/global.css";
import { StrictMode } from "react";
import HomePage from "@/pages/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
