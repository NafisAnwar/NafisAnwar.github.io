import { Plus } from "lucide-react";
import { experiences } from "../data/experience";
import { SectionHeading, Reveal } from "./shared";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-shell section-space experience-section"
    >
      <SectionHeading
        number="04"
        label="THE JOURNEY"
        title={
          <>
            Learning by doing.
            <br />
            <span className="muted">And doing a little more.</span>
          </>
        }
      >
        <p className="section-description">
          Research labs, engineering teams, and the communities in between.
        </p>
      </SectionHeading>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <Reveal key={experience.role}>
            <details
              className="experience-row"
              open={index === 0 ? true : undefined}
            >
              <summary>
                <span className="experience-date mono">{experience.date}</span>
                <span className="experience-summary">
                  <strong>{experience.role}</strong>
                  <span>{experience.organization}</span>
                </span>
                <span className="experience-type mono">{experience.type}</span>
                <span className="expand-icon">
                  <Plus size={20} />
                </span>
              </summary>
              <div className="experience-detail">
                <p className="mono">{experience.location}</p>
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tags">
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
