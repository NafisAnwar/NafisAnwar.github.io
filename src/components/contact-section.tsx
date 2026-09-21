import { Reveal } from "./shared";
import { ContactPanel } from "./contact-panel";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">
            <span>06 /</span> GET IN TOUCH
          </p>
          <div className="connect-heading">
            <h2 id="contact-heading">
              Let’s connect<span className="accent">.</span>
            </h2>
            <p>
              My experience, my work, and a direct line to me.
              <br />
              Everything you need, in one place.
            </p>
          </div>
          <ContactPanel />
        </Reveal>
      </div>
    </section>
  );
}
