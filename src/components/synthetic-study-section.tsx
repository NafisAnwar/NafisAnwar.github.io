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
            Exploring the relationship between synthetic-like content and human
            interaction in online communities.
          </p>
          <p className="research-note">
            A study combining NLP, embeddings, manual review, and
            classifier-based analysis. Observational findings - not definitive
            proof of AI authorship.
          </p>
          <div className="research-links">
            <ExternalLink
              href={`${import.meta.env.BASE_URL}research/synthetic-content-human-interaction-paper.pdf`}
              className="button button-primary"
            >
              Read the paper
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
                <p>A week-balanced Reddit dataset.</p>
              </div>
            </div>
            <div className="method-connector" />
            <div className="method-step">
              <span>02</span>
              <div>
                <h3>Represent & classify</h3>
                <p>NLP, embeddings, and manual labels.</p>
              </div>
            </div>
            <div className="method-connector" />
            <div className="method-step">
              <span>03</span>
              <div>
                <h3>Observe & interpret</h3>
                <p>Engagement patterns across communities.</p>
              </div>
            </div>
          </div>
          <div className="research-stats">
            <div>
              <strong>7,606</strong>
              <span>cleaned comments</span>
            </div>
            <div>
              <strong>12</strong>
              <span>week study window</span>
            </div>
            <div>
              <strong>0.849</strong>
              <span>best ROC-AUC</span>
            </div>
          </div>
          <a
            className="research-panel-bottom mono"
            href={`${import.meta.env.BASE_URL}research/synthetic-content-human-interaction-paper.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            EXPLORE THE METHODOLOGY <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
