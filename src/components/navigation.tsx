import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { m, useScroll, useSpring } from "motion/react";
import { resume } from "./shared";

const links = [
  ["projects", "Work"],
  ["research", "Research"],
  ["about", "About"],
  ["experience", "Experience"],
] as const;
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    const media = matchMedia("(min-width: 801px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    window.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      window.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a
          className="wordmark"
          href="#home"
          aria-label="Nafis Anwar, home"
          onClick={() => setOpen(false)}
        >
          na<span className="brand-dot">.</span>
          <span className="wordmark-name">NAFIS ANWAR</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          id="menu-toggle"
          className="icon-button mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...links, ["contact", "Contact"]].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Résumé <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
      <m.div className="reading-progress" style={{ scaleX: progress }} />
    </header>
  );
}
