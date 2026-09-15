import { Braces, Database, Cpu, Workflow } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";

const groups = [
  {
    icon: Braces,
    title: "Languages & foundations",
    description: "From memory to the browser.",
    skills: [
      "C++",
      "Python",
      "Java",
      "C",
      "C#",
      "JavaScript",
      "SQL",
      "Assembly",
      "HTML / CSS",
    ],
  },
  {
    icon: Database,
    title: "Applications & APIs",
    description: "The pieces that work together.",
    skills: [
      "ASP.NET Core",
      "REST APIs",
      "React",
      "Flask",
      "MongoDB",
      "Amazon RDS",
    ],
  },
  {
    icon: Cpu,
    title: "Intelligence & systems",
    description: "Finding patterns. Making sense.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "FAISS",
      "NLP",
      "Semantic search",
      "Arduino",
    ],
  },
  {
    icon: Workflow,
    title: "Tools & delivery",
    description: "Build, debug, improve, repeat.",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "GitHub Actions",
      "Postman",
      "AWS",
      "Azure",
      "Vercel",
    ],
  },
];
export function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-space skills-section">
      <SectionHeading
        number="05"
        label="THE TOOLKIT"
        title={
          <>
            Different tools.
            <br />
            <span className="muted">One engineering mindset.</span>
          </>
        }
      />
      <div className="skills-grid">
        {groups.map((group, index) => (
          <Reveal
            className="skill-group"
            key={group.title}
            delay={index * 0.05}
          >
            <group.icon size={23} />
            <p className="mono skill-number">0{index + 1}</p>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
