import { useEffect, useId, useRef, useState } from "react";
import { m } from "motion/react";
import { useMotionPreference } from "./shared";

const interests = [
  {
    id: "backend",
    label: "BACKEND SYSTEMS",
    detail: "APIs · Databases · Java · Spring",
  },
  {
    id: "ai",
    label: "ARTIFICIAL INTELLIGENCE",
    detail: "LLMs · Agents · ML · Automation",
  },
  {
    id: "systems",
    label: "SYSTEMS PROGRAMMING",
    detail: "C · Linux · Processes · OS",
  },
  {
    id: "software",
    label: "SOFTWARE ENGINEERING",
    detail: "Git · Testing · Agile · Architecture",
  },
] as const;

export function OrbitNodes() {
  const [active, setActive] = useState<string | null>(null);
  const group = useRef<HTMLDivElement>(null);
  const wasOpenOnPress = useRef(false);
  const prefix = useId();
  const reduced = useMotionPreference();

  useEffect(() => {
    const dismissOutside = (event: PointerEvent) => {
      if (!group.current?.contains(event.target as Node)) setActive(null);
    };
    const dismissEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissEscape);
    };
  }, []);

  return (
    <div
      ref={group}
      className="orbit-nodes"
      role="group"
      aria-label="Engineering interests"
    >
      {interests.map((interest) => {
        const open = active === interest.id;
        const panelId = `${prefix}-${interest.id}`;
        return (
          <div
            key={interest.id}
            className={`orbit-node orbit-node-${interest.id}${open ? " is-open" : ""}`}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setActive(interest.id);
            }}
            onPointerLeave={(event) => {
              if (
                event.pointerType === "mouse" &&
                !event.currentTarget.contains(document.activeElement)
              ) {
                setActive((current) =>
                  current === interest.id ? null : current,
                );
              }
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setActive((current) =>
                  current === interest.id ? null : current,
                );
              }
            }}
          >
            <button
              type="button"
              className="orbit-node-trigger"
              aria-expanded={open}
              aria-controls={panelId}
              aria-describedby={open ? panelId : undefined}
              onFocus={() => setActive(interest.id)}
              onPointerDown={() => {
                wasOpenOnPress.current = open;
              }}
              onClick={(event) => {
                if (event.detail === 0)
                  setActive((current) =>
                    current === interest.id ? null : interest.id,
                  );
                else setActive(wasOpenOnPress.current ? null : interest.id);
              }}
            >
              <span className="orbit-node-dot" aria-hidden="true" />
              {interest.label}
              <span className="orbit-node-plus" aria-hidden="true">
                +
              </span>
            </button>
            <m.div
              id={panelId}
              className="orbit-node-panel"
              role="region"
              aria-label={`${interest.label} interests`}
              hidden={!open}
              initial={false}
              animate={{ opacity: open ? 1 : 0, y: reduced || open ? 0 : 5 }}
              transition={{ duration: reduced ? 0 : 0.18 }}
            >
              {interest.detail}
            </m.div>
          </div>
        );
      })}
    </div>
  );
}
