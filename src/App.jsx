import { createRoot } from "react-dom/client";
import Game from "./Game";
import "../style.css";
import { StrictMode } from "react";
const App = () => {
  return (
    <div>
      <h1>Chess</h1>
      <Game />
    </div>
  );
};

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
