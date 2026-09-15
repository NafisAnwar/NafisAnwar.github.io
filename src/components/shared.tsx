import { m } from "motion/react";
import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribeToMotion = (callback: () => void) => {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
// Listen explicitly: the installed Motion hook snapshots the preference only on mount.
export function useMotionPreference() {
  return useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useMotionPreference();
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay, duration: reduced ? 0 : 0.65 }}
    >
      {children}
    </m.div>
  );
}

export function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </Reveal>
  );
}

export function ExternalLink({
  href,
  children,
  className = "text-link",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export const email = "anwarnafisneo@gmail.com";
export const github = "https://github.com/NafisAnwar";
export const resume = `${import.meta.env.BASE_URL}resume.pdf`;
