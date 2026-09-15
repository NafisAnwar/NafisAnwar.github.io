import { NowWhatFeature, NowWhatDetails } from "./now-what-feature";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { m, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight, X, Github } from "lucide-react";
import { projects, type Category, type Project } from "../data/projects";
import {
  Reveal,
  SectionHeading,
  ExternalLink,
  github,
  useMotionPreference,
} from "./shared";

function ProjectDialog({
  project,
  close,
}: {
  project: Project | null;
  close: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) return;
    const dialog = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    dialog?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [project]);
  if (!project) return null;
  return createPortal(
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={close}
      onKeyDown={(e) => {
        if (e.key !== "Tab") return;
        const items = e.currentTarget.querySelectorAll<HTMLElement>(
          "button, a[href], summary",
        );
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="dialog-inner">
        <button
          className="icon-button dialog-close"
          onClick={close}
          aria-label="Close project details"
          autoFocus
        >
          <X />
        </button>
        <div className="dialog-image">
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
          />
        </div>
        <div className="dialog-copy">
          <p className="eyebrow">{project.category} / PROJECT OVERVIEW</p>
          <h2 id="project-title">{project.title}</h2>
          <p className="dialog-subtitle">{project.subtitle}</p>
          <p>{project.detail}</p>
          <div className="project-outcome">
            <span className="mono">THE RESULT</span>
            <p>{project.outcome}</p>
          </div>
          <div className="tags">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="project-action-links">
            {project.liveUrl && (
              <ExternalLink
                href={project.liveUrl}
                className="button button-primary"
              >
                Open live app
              </ExternalLink>
            )}
            <ExternalLink
              href={`${github}/${project.repo}`}
              className={
                project.liveUrl
                  ? "button button-quiet"
                  : "button button-primary"
              }
            >
              <Github size={17} /> Explore the code
            </ExternalLink>
            {project.relatedUrl && (
              <ExternalLink href={project.relatedUrl}>
                Full-stack repository
              </ExternalLink>
            )}
          </div>
          {project.id === "now-what" && <NowWhatDetails />}
        </div>
      </div>
    </dialog>,
    document.body,
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<Category>("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const reduced = useMotionPreference();
  const filtered = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <section id="projects" className="section-shell section-space">
      <SectionHeading
        number="01"
        label="SELECTED WORK"
        title={
          <>
            Built with intent.
            <br />
            <span className="muted">Made to work.</span>
          </>
        }
      >
        <p className="section-description">
          A few explorations in systems, intelligence, and the interfaces that
          connect them.
        </p>
      </SectionHeading>
      <NowWhatFeature
        onDetails={() =>
          setSelected(projects.find((project) => project.id === "now-what")!)
        }
      />
      <div className="project-toolbar">
        <div className="filter-group" role="group" aria-label="Filter projects">
          {(["All work", "Systems", "AI & data", "Web apps"] as Category[]).map(
            (category) => (
              <button
                key={category}
                className={filter === category ? "filter active" : "filter"}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ),
          )}
        </div>
        <span className="mono project-count" aria-live="polite">
          {String(filtered.length).padStart(2, "0")} PROJECTS
        </span>
      </div>
      <m.div className="project-grid" layout={!reduced}>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <m.article
              className="project-card"
              key={project.id}
              layout={!reduced}
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className={`project-image project-${project.id}`}
                onClick={() => setSelected(project)}
                aria-label={`View ${project.title} details`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  width="800"
                  height="500"
                />
                <span className="image-open">
                  <ArrowUpRight size={20} />
                </span>
              </button>
              <div className="project-card-body">
                <p className="mono project-category">
                  {project.category}
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </p>
                <h3>
                  <button onClick={() => setSelected(project)}>
                    {project.title}
                  </button>
                </h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-card-footer">
                  {project.liveUrl && (
                    <ExternalLink href={project.liveUrl}>Live app</ExternalLink>
                  )}
                  <button
                    className="text-link"
                    onClick={() => setSelected(project)}
                  >
                    Details <ArrowRight size={15} />
                  </button>
                  <ExternalLink href={`${github}/${project.repo}`}>
                    Source
                  </ExternalLink>
                </div>
              </div>
            </m.article>
          ))}
        </AnimatePresence>
      </m.div>
      <div className="archive-footer">
        <span>Always learning. Always building.</span>
        <ExternalLink href={github}>More on GitHub</ExternalLink>
      </div>
      <ProjectDialog project={selected} close={() => setSelected(null)} />
    </section>
  );
}
