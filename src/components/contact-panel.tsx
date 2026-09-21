import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { email, github, resume } from "./shared";
import "../contact-panel.css";

const contactLinks = [
  {
    label: "Industry resume",
    detail: "Experience & qualifications",
    href: resume,
    icon: FileText,
  },
  {
    label: "GitHub",
    detail: "Code & ongoing projects",
    href: github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    detail: "Professional profile",
    href: "https://www.linkedin.com/in/nafisanwar/",
    icon: Linkedin,
  },
  {
    label: "Email",
    detail: "Start a conversation",
    href: "mailto:" + email,
    icon: Mail,
  },
];

export function ContactPanel({
  label = "Resume and contact links",
}: {
  label?: string;
}) {
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
    <div className="connect-panel">
      <nav className="connect-links" aria-label={label}>
        {contactLinks.map(({ label, detail, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="connect-link"
            {...(href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <span className="connect-link-top">
              <Icon size={22} aria-hidden="true" />
              <ArrowUpRight size={19} aria-hidden="true" />
            </span>
            <span className="connect-link-label">{label}</span>
            <span className="connect-link-detail">{detail}</span>
            {!href.startsWith("mailto:") && (
              <span className="sr-only"> (opens in a new tab)</span>
            )}
          </a>
        ))}
      </nav>
      <div className="connect-email">
        <a href={"mailto:" + email}>{email}</a>
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
        <p className="connect-status" role="status">
          {message}
        </p>
      </div>
    </div>
  );
}
