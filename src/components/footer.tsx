import { ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer className="section-shell site-footer">
      <a
        href="#home"
        className="wordmark"
        aria-label="Nafis Anwar, back to top"
      >
        na<span className="brand-dot">.</span>
      </a>
      <p className="mono">© {new Date().getFullYear()} NAFIS ANWAR</p>
      <a href="#home" className="back-top mono">
        BACK TO TOP <ArrowUp size={14} />
      </a>
    </footer>
  );
}
