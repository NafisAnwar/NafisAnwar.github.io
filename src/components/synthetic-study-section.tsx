import { ArrowUpRight, ScanText } from "lucide-react";
import { Reveal, ExternalLink } from "./shared";

export function SyntheticStudySection() {
  return (
    <section id="research" className="research-section">
      <div className="section-shell research-grid">
        <Reveal className="research-copy">
          <p className="eyebrow">
            <span>02 /</span> RESEARCH & EXPLORATION
          </p>
          <h2>
            When the content
            <br />
            is synthetic.
            <br />
            <span className="accent">
              But the impact
              <br />
              is human.
            </span>
          </h2>
          <p>
            I lead a four-student USF research team studying AI-like content and
            human engagement across Reddit communities. Our current pre/post pilot
            combines archive acquisition, data cleaning, conversation-chain
            protocols, and TF-IDF/MiniLM baselines.
          </p>
          <p className="research-note">
            The pilot is observational: AI-like signals do not establish AI
            authorship or causation. The linked paper documents an earlier study;
            its dataset and classifier results are separate from this pilot.
          </p>
          <div className="research-links">
            <ExternalLink
              href={`${import.meta.env.BASE_URL}research/synthetic-content-human-interaction-paper.pdf`}
              className="button button-primary"
            >
              Read the earlier paper
            </ExternalLink>
            <ExternalLink href="https://github.com/NafisAnwar/synthetic-content-human-interaction">
              View research code
            </ExternalLink>
          </div>
        </Reveal>
        <Reveal className="research-panel" delay={0.1}>
          <div className="research-panel-top mono">
            <ScanText size={18} />
            <span>HUMAN × SYNTHETIC</span>
            <span>FIELD NOTES</span>
          </div>
          <div className="research-method">
            <div className="method-step">
              <span>01</span>
              <div>
                <h3>Collect & clean</h3>
                <p>Archive acquisition and a 400-submission pre/post sample.</p>
              </div>
            </div>
            <div className="method-connector" />
            <div className="method-step">
              <span>02</span>
              <div>
                <h3>Represent & compare</h3>
                <p>TF-IDF and MiniLM baselines with methodological review.</p>
              </div>
            </div>
            <div className="method-connector" />
            <div className="method-step">
              <span>03</span>
              <div>
                <h3>Observe & interpret</h3>
                <p>Conversation chains, reply edges, and observational limits.</p>
              </div>
            </div>
          </div>
          <div className="research-stats">
            <div>
              <strong>400</strong>
              <span>pilot submissions</span>
            </div>
            <div>
              <strong>15,741</strong>
              <span>pilot comments</span>
            </div>
            <div>
              <strong>10,142</strong>
              <span>pilot reply edges</span>
            </div>
          </div>
          <a
            className="research-panel-bottom mono"
            href={`${import.meta.env.BASE_URL}research/synthetic-content-human-interaction-paper.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            EARLIER STUDY / PAPER & METHODOLOGY <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
