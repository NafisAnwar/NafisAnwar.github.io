import "./styles/globals.css";
import "./index.css";

import { createRoot } from "react-dom/client";
import App from "./App";

try {
  const rootEl = document.getElementById("root");
  if (!rootEl) throw new Error('Missing <div id="root"> in index.html');
  console.log("[boot] mounting app…");
  createRoot(rootEl).render(<App />);
} catch (e) {
  console.error("[boot] failed to mount:", e);
  const pre = document.createElement("pre");
  pre.style.padding = "16px";
  pre.textContent = `Boot error: ${String(e)}`;
  document.body.appendChild(pre);
}
