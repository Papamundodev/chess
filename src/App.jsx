import { createRoot } from "react-dom/client";
import Game from "./Game";
import "../style.css";
import { StrictMode } from "react";

const App = () => {
  return (
    <div className="app-container">
      <div className="header">
        <h1>Chess</h1>
      </div>
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
