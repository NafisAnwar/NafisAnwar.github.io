import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Reveal, ExternalLink, email, github } from "./shared";

export function ContactSection() {
  const [message, setMessage] = useState("");
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timeout.current), []);
  const copy = async () => {
    clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied to clipboard.");
    } catch {
      setMessage(
        "Copy unavailable. Select the email address or use the email link.",
      );
    }
    timeout.current = setTimeout(() => setMessage(""), 5000);
  };
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">
            <span>06 /</span> THE NEXT CHAPTER
          </p>
          <div className="contact-title-row">
            <h2>
              Have something
              <br />
              in mind<span className="accent">?</span>
            </h2>
            <a
              href={`mailto:${email}`}
              className="contact-arrow"
              aria-label="Email Nafis Anwar"
            >
              <ArrowUpRight />
            </a>
          </div>
          <div className="contact-bottom">
            <div>
              <p>
                A role, an idea, or an interesting problem.
                <br />
                I’d love to hear about it.
              </p>
              <div className="email-row">
                <a href={`mailto:${email}`}>{email}</a>
                <button
                  className="icon-button"
                  onClick={copy}
                  aria-label="Copy email address"
                >
                  {message.startsWith("Email copied") ? (
                    <Check size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
              <p className="copy-status" role="status">
                {message}
              </p>
            </div>
            <div className="contact-socials">
              <ExternalLink href={github}>GitHub</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/nafisanwar/">
                LinkedIn
              </ExternalLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
