import portrait from "../assets/092cec94c9e890d97d0664ec57cdf4d1d7e225fb.png";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal, resume } from "./shared";

export function AboutSection() {
  return (
    <section id="about" className="section-shell section-space about-grid">
      <Reveal className="portrait-wrap">
        <div className="portrait-frame">
          <img
            src={portrait}
            alt="Nafis Anwar sitting in a café"
            loading="lazy"
            width="960"
            height="1280"
          />
          <div className="portrait-label mono">
            <MapPin size={13} /> TAMPA, FL <span>27.95° N · 82.46° W</span>
          </div>
        </div>
        <p className="portrait-footnote mono">
          A PERSON BEHIND THE PULL REQUESTS.
        </p>
      </Reveal>
      <Reveal className="about-copy">
        <p className="eyebrow">
          <span>03 /</span> A LITTLE ABOUT ME
        </p>
        <h2>
          Curiosity is
          <br />
          the starting point.
          <br />
          <span className="muted">Building is the rest.</span>
        </h2>
        <p>
          I’m Nafis, a Computer Science student at the University of South
          Florida. I’m drawn to the problems beneath the surface: how systems
          execute, how data becomes useful, and how to make software reliable.
        </p>
        <p>
          My work moves between backend engineering, developer tooling, applied
          AI, and robotics. At USF’s RARE Lab, I supported humanoid robotics
          research with evaluation pipelines and reproducible experiments.
        </p>
        <p>
          Outside the code, I’ve helped build campus communities, led teams, and
          made technical ideas easier to share. Good engineering starts with
          understanding people, too.
        </p>
        <div className="about-stats">
          <div>
            <strong>2027</strong>
            <span>Expected graduation</span>
          </div>
          <div>
            <strong>5+</strong>
            <span>Major systems built</span>
          </div>
        </div>
        <a
          className="text-link"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          The full story, on my résumé <ArrowUpRight size={17} />
        </a>
      </Reveal>
    </section>
  );
}
