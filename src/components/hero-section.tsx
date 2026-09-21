import { OrbitNodes } from "./orbit-nodes";
import { useEffect, useRef, useState } from "react";
import { animate, m, useInView, useMotionValue, useSpring } from "motion/react";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { resume, useMotionPreference } from "./shared";

function SystemsSculpture() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reduced = useMotionPreference();
  const [paused, setPaused] = useState(false);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateY = useSpring(x, { stiffness: 55, damping: 20 });
  const rotateX = useSpring(y, { stiffness: 55, damping: 20 });
  const running = visible && !paused && !reduced;
  const orbitRotation = useMotionValue(0);
  useEffect(() => {
    if (!running) return;
    const rotation = animate(orbitRotation, orbitRotation.get() + 360, {
      duration: 26,
      repeat: Infinity,
      ease: "linear",
    });
    return () => rotation.stop();
  }, [running, orbitRotation]);
  return (
    <div
      ref={ref}
      className="sculpture"
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        const box = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - box.left) / box.width - 0.5) * 15);
        y.set(((e.clientY - box.top) / box.height - 0.5) * -15);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="sculpture-grid" aria-hidden="true" />
      <m.div
        className="orb-wrap"
        style={{ rotateX, rotateY }}
        aria-hidden="true"
      >
        <svg className="orb" viewBox="0 0 600 600" fill="none">
          <defs>
            <linearGradient
              id="orbit-stroke"
              x1="120"
              y1="100"
              x2="480"
              y2="480"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#deeff2" />
              <stop offset=".35" stopColor="#9bcfd9" />
              <stop offset=".7" stopColor="#325961" />
              <stop offset="1" stopColor="#bee0e7" />
            </linearGradient>
            <radialGradient id="orb-glow">
              <stop stopColor="#81c2cf" stopOpacity=".22" />
              <stop offset="1" stopColor="#81c2cf" stopOpacity="0" />
            </radialGradient>
            <filter id="soft-glow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          <circle cx="300" cy="300" r="270" fill="url(#orb-glow)" />
          <g transform="rotate(-28 300 300)">
            {Array.from({ length: 19 }, (_, i) => (
              <ellipse
                key={i}
                cx="300"
                cy="300"
                rx={38 + i * 10.5}
                ry="215"
                stroke="url(#orbit-stroke)"
                strokeWidth={i % 3 === 0 ? 1.3 : 0.65}
                opacity={0.35 + i / 40}
                transform={`rotate(${i * 9.5} 300 300)`}
              />
            ))}
            <ellipse
              cx="300"
              cy="300"
              rx="250"
              ry="82"
              stroke="#cce6eb"
              strokeWidth="1.2"
            />
            <ellipse
              cx="300"
              cy="300"
              rx="269"
              ry="105"
              stroke="#a3d3dc"
              strokeWidth=".5"
              opacity=".6"
            />
          </g>
          <m.g
            style={{ rotate: orbitRotation, transformOrigin: "300px 300px" }}
          >
            <circle cx="300" cy="65" r="4" fill="#e5f2f5" />
            <circle
              cx="300"
              cy="65"
              r="11"
              fill="#a6d4dd"
              filter="url(#soft-glow)"
            />
            <circle cx="300" cy="535" r="3" fill="#9aced9" />
          </m.g>
          <circle cx="300" cy="300" r="76" fill="#101516" stroke="#63878e" />
          <text
            textAnchor="middle"
            fill="#edf2f3"
            fontFamily="var(--display)"
            fontSize="32"
            fontWeight="500"
            letterSpacing="-1"
          >
            <tspan x="300" y="294">
              Nafis
            </tspan>
            <tspan x="300" y="330">
              Anwar
            </tspan>
          </text>
        </svg>
      </m.div>
      <OrbitNodes />
      <div className="sculpture-footer mono">
        <button
          className="animation-toggle"
          onClick={() => setPaused(!paused)}
          disabled={!!reduced}
          aria-label={
            reduced
              ? "Animation disabled by reduced motion preference"
              : paused
                ? "Play sculpture animation"
                : "Pause sculpture animation"
          }
        >
          {paused || reduced ? <Play size={13} /> : <Pause size={13} />}
        </button>
      </div>
    </div>
  );
}

export function HeroSection() {
  const reduced = useMotionPreference();
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-main">
        <div className="hero-copy">
          <m.p
            className="eyebrow hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="status-dot" /> SOFTWARE ENGINEER & CREATIVE PROBLEM
            SOLVER
          </m.p>
          <h1>
            {["Engineering", "what’s next."].map((line, i) => (
              <span className="headline-line" key={line}>
                <m.span
                  initial={{ y: reduced ? 0 : "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.12 + i * 0.12, duration: 0.9 }}
                >
                  {line}
                </m.span>
              </span>
            ))}
          </h1>
          <m.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="hero-description">
              I’m <strong>Nafis Anwar.</strong> I build the systems behind the
              experience - from low-level code to intelligent applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDown size={17} />
              </a>
              <a
                className="button button-quiet"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View résumé <ArrowUpRight size={17} />
              </a>
            </div>
            <p className="hero-location mono">
              BASED IN TAMPA, FL <span>/</span> CS @ UNIVERSITY OF SOUTH FLORIDA
            </p>
          </m.div>
        </div>
        <m.div
          className="hero-art"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.3 }}
        >
          <SystemsSculpture />
        </m.div>
      </div>
      <div className="hero-bottom">
        <span className="mono">CURIOUS BY NATURE. PRECISE BY DESIGN.</span>
        <a href="#projects" className="scroll-cue mono">
          SCROLL TO EXPLORE <ArrowDown size={15} />
        </a>
      </div>
      <div className="focus-strip">
        <span className="mono">MY INTERSECTION</span>
        <span>Backend engineering</span>
        <span className="asterisk">✳</span>
        <span>Applied AI</span>
        <span className="asterisk">✳</span>
        <span>Developer tools</span>
        <span className="asterisk">✳</span>
        <span>Robotics</span>
      </div>
    </section>
  );
}
