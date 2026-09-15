import { useId, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCheck,
  CalendarDays,
  ShieldCheck,
  HardDrive,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ExternalLink, Reveal } from "./shared";
import {
  nowWhatUrl,
  nowWhatRepo,
  nowWhatVersion,
  nowWhatScreens,
  nowWhatFeatures,
  nowWhatArchitecture,
  nowWhatStores,
  nowWhatShortcuts,
  nowWhatLimits,
} from "../data/now-what";

export function NowWhatFeature({ onDetails }: { onDetails: () => void }) {
  const [screen, setScreen] = useState(0);
  const id = useId();
  const selected = nowWhatScreens[screen];
  return (
    <Reveal>
      <article className="now-what-feature">
        <div className="now-feature-heading">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> FLAGSHIP PROJECT{" "}
              <span className="release-label">{nowWhatVersion}</span>
            </p>
            <h3>
              now_what<span>?</span>
            </h3>
            <p className="now-tagline">
              Less deciding.
              <br />
              More doing.
            </p>
          </div>
          <div className="now-feature-intro">
            <p>
              A personal command center that turns your tasks, habits,
              commitments, and energy into one clear next action.
            </p>
            <div className="now-actions">
              <ExternalLink className="button button-primary" href={nowWhatUrl}>
                Launch the app
              </ExternalLink>
              <button className="text-link" onClick={onDetails}>
                Full project story <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Dexie / IndexedDB</span>
              <span>Cloudflare</span>
              <span>PWA</span>
            </div>
          </div>
        </div>
        <div className="now-preview">
          <div className="now-preview-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="mono">NOW_WHAT? / PRODUCT TOUR</span>
            <ExternalLink href={nowWhatUrl}>Open app</ExternalLink>
          </div>
          <div
            className="now-tour-tabs"
            role="tablist"
            aria-label="Explore now_what features"
          >
            {nowWhatScreens.map((item, index) => (
              <button
                key={item.id}
                id={`${id}-tab-${index}`}
                role="tab"
                aria-selected={screen === index}
                aria-controls={`${id}-panel`}
                tabIndex={screen === index ? 0 : -1}
                onClick={() => setScreen(index)}
                onKeyDown={(e) => {
                  let next = index;
                  if (e.key === "ArrowRight")
                    next = (index + 1) % nowWhatScreens.length;
                  else if (e.key === "ArrowLeft")
                    next =
                      (index + nowWhatScreens.length - 1) %
                      nowWhatScreens.length;
                  else if (e.key === "Home") next = 0;
                  else if (e.key === "End") next = nowWhatScreens.length - 1;
                  else return;
                  e.preventDefault();
                  setScreen(next);
                  document.getElementById(`${id}-tab-${next}`)?.focus();
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div
            className="now-tour-panel"
            id={`${id}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${screen}`}
            tabIndex={0}
          >
            <div className="now-tour-copy">
              <span className="mono">0{screen + 1} / 06</span>
              <h4>{selected.title}</h4>
              <p>{selected.description}</p>
              <button className="text-link" onClick={onDetails}>
                Explore all features <ArrowRight size={16} />
              </button>
              <p className="now-preview-note">
                Screenshots from the live app using its built-in demo data.
              </p>
            </div>
            <a
              className="now-screen"
              href={`${import.meta.env.BASE_URL}projects/now-what/${selected.image}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View full-size ${selected.label} screenshot`}
            >
              <img
                src={`${import.meta.env.BASE_URL}projects/now-what/${selected.image}`}
                alt={`NOW_WHAT? ${selected.label} interface with sample data`}
                width="1440"
                height="1000"
                loading="lazy"
              />
              <span className="now-enlarge">
                View full size <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </div>
        <div className="now-highlights">
          {[
            [CheckCheck, "Explainable decisions"],
            [CalendarDays, "Plans that fit your day"],
            [ShieldCheck, "No account required"],
            [HardDrive, "12 local data stores"],
          ].map(([Icon, label]) => {
            const FeatureIcon = Icon as typeof CheckCheck;
            return (
              <div key={String(label)}>
                <FeatureIcon size={18} />
                <span>{String(label)}</span>
              </div>
            );
          })}
        </div>
      </article>
    </Reveal>
  );
}

export function NowWhatDetails() {
  return (
    <div className="now-case-study">
      <section>
        <h3>From an overloaded list to a useful next action.</h3>
        <p>
          NOW_WHAT? brings planning and execution together. Instead of treating
          every item as equally actionable, it considers deadlines, live
          calendar commitments, personal priorities, current energy, focus
          capacity, and the available time window. The result is a
          recommendation you can inspect and act on.
        </p>
        <div className="now-detail-links">
          <ExternalLink href={nowWhatUrl} className="button button-primary">
            Try now_what
          </ExternalLink>
          <ExternalLink href={nowWhatRepo}>Source code</ExternalLink>
        </div>
      </section>
      <section>
        <p className="eyebrow">
          <Sparkles size={14} /> THE PRODUCT
        </p>
        <h3>A complete daily workflow.</h3>
        <div className="now-feature-list">
          {nowWhatFeatures.map((feature, index) => (
            <details key={feature.title} open={index < 2}>
              <summary>
                <span className="mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {feature.title}
                <span className="feature-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{feature.text}</p>
            </details>
          ))}
        </div>
      </section>
      <section>
        <p className="eyebrow">
          <Workflow size={14} /> UNDER THE HOOD
        </p>
        <h3>Four layers. One connected system.</h3>
        <div className="now-architecture">
          {nowWhatArchitecture.map((layer) => (
            <div key={layer.title}>
              <h4>{layer.title}</h4>
              <p>{layer.text}</p>
            </div>
          ))}
        </div>
        <div className="now-pipeline" aria-label="Recommendation pipeline">
          {[
            "Build context",
            "Generate candidates",
            "Rank with explanations",
            "Act, log, and refresh",
          ].map((step, index) => (
            <span key={step}>
              <b>0{index + 1}</b>
              {step}
            </span>
          ))}
        </div>
        <p>
          The engine uses explicit rules and scoring, not generative AI.
          Critical commitments remain protected while softer signals adjust the
          fit of other actions. Empty profiles prompt the user to add context
          rather than inventing work.
        </p>
      </section>
      <section>
        <h3>Data you can inspect and take with you.</h3>
        <p>
          A local profile selects its own database before the app renders.
          Atomic completion writes help prevent duplicate logs, related
          reminders are cancelled on completion, and validated backups restore
          the supported stores while retaining the active profile identity.
        </p>
        <div className="now-store-list">
          {nowWhatStores.map((store) => (
            <span key={store}>{store}</span>
          ))}
        </div>
      </section>
      <section>
        <h3>Built for the keyboard.</h3>
        <div className="now-shortcuts">
          {nowWhatShortcuts.map(([key, label]) => (
            <div key={key}>
              <kbd>{key}</kbd>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p>Shortcuts are guarded while typing in editable fields.</p>
      </section>
      <section>
        <h3>Validation & engineering care.</h3>
        <p>
          The repository includes deterministic engine and data-layer regression
          checks covering priority precedence, energy fit, category
          normalization, cooldowns, calendar parsing, data validation, and
          completion behavior. Its July 2026 pre-deployment diagnostic records
          103 passing assertions, a TypeScript check, production build, and
          desktop/mobile smoke checks.
        </p>
        <div className="now-detail-links">
          <ExternalLink
            href={`${nowWhatRepo}/blob/beta/scripts/v12-engine-qa.mjs`}
          >
            Engine QA suite
          </ExternalLink>
          <ExternalLink
            href={`${nowWhatRepo}/blob/beta/docs/PRE_DEPLOY_DIAGNOSTIC.md`}
          >
            Deployment diagnostic
          </ExternalLink>
        </div>
      </section>
      <section className="now-beta-notes">
        <h3>Current beta boundaries.</h3>
        <ul>
          {nowWhatLimits.map((limit) => (
            <li key={limit}>{limit}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Explore further.</h3>
        <div className="now-detail-links">
          <ExternalLink href={nowWhatUrl}>Open the live app</ExternalLink>
          <ExternalLink href={nowWhatRepo}>Browse the repository</ExternalLink>
          <ExternalLink href={`${nowWhatRepo}/blob/beta/README.md`}>
            Read the README
          </ExternalLink>
          <ExternalLink
            href={`${nowWhatRepo}/blob/beta/docs/BETA_TESTER_GUIDE.md`}
          >
            Beta guide
          </ExternalLink>
          <ExternalLink
            href={`${nowWhatRepo}/blob/beta/output/pdf/NOW_WHAT_complete_engine_architecture_v1.2_2026-07-12.pdf`}
          >
            Complete engine architecture (PDF)
          </ExternalLink>
        </div>
      </section>
    </div>
  );
}
