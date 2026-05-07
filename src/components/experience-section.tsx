import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Junior Undergraduate Researcher",
    organization: "RARE Lab, University of South Florida",
    location: "Tampa, FL",
    date: "Dec 2025 - Mar 2026",
    type: "Research",
    tags: ["Robotics", "Unitree G1", "Evaluation Pipelines", "Sim-to-Real", "ASAP Framework"],
    bullets: [
      "Operate and maintain the Unitree G1 humanoid robot by configuring power-on sequences, scripts, evaluation harnesses, logging, configuration management, benchmarking, and regression checks to support safe and reproducible research experiments.",
      "Conducted literature reviews on sim-to-real transfer techniques including physics mismatch mitigation, reward shaping strategies, and delta-action policies, compiling findings into technical summaries to inform experimental design.",
      "Analyzed research codebases, including the ASAP framework, to reproduce published results, trace training pipelines, identify policy learning and evaluation modules, and establish benchmarks for humanoid locomotion experiments.",
    ],
  },
  {
    role: "Resident Assistant",
    organization: "Residential Education at USF",
    location: "Tampa, FL",
    date: "Aug 2025 - Present",
    type: "Leadership",
    tags: ["ASP.NET Core", "Excel Macros", "Reporting Systems", "Documentation", "Community Support"],
    bullets: [
      "Built automated reporting and tracking systems for community metrics using Excel macros and ASP.NET Core; documented 18 conflict-resolution cases and 58 issue reports while supporting 500+ residents.",
      "Fostered community engagement by organizing and facilitating 4 social and educational programs, averaging 20 attendees, and boosted floor participation by 36% for 34 residents within my community.",
    ],
  },
  {
    role: "Technical Marketing Lead",
    organization: "Google Developer Student Club at USF",
    location: "Tampa, FL",
    date: "Jun 2025 - Present",
    type: "Developer Community",
    tags: ["Technical Content", "Developer Events", "Documentation", "Canva", "Photoshop"],
    bullets: [
      "Designed graphics and created content for the GDSC Marketing Team, producing 52+ assets using Photoshop and Illustrator.",
      "Reduced turnaround time from 4 days to 2 days by standardizing custom templates on Canva, improving team efficiency.",
      "Created technical documentation and educational content for developer community events, managing a content pipeline serving 500+ developers while collaborating across teams on event planning and developer experience optimization.",
    ],
  },
  {
    role: "Lead Developer",
    organization: "PATHFINDER Team, Engineering Lab at USF",
    location: "Tampa, FL",
    date: "Aug 2023 - Dec 2023",
    type: "Embedded Systems",
    tags: ["C", "Assembly", "Arduino", "Sensors", "Debugging"],
    bullets: [
      "Led a cross-functional team of 4 in designing and implementing an obstacle-avoiding robot, programming and testing C and Assembly code in Arduino IDE to synchronize servo motors with ultrasonic sensors.",
      "Achieved a 60% improvement in real-time obstacle detection and avoidance through improved control logic and sensor coordination.",
      "Enhanced system reliability by debugging with terminal tools, Serial Monitor, and a logic analyzer to resolve timing issues, reducing collisions by 95%.",
    ],
  },
  {
    role: "Human Resources Intern",
    organization: "SQUARE International, Textiles Division",
    location: "Dhaka, Bangladesh",
    date: "Sep 2022 - Dec 2022",
    type: "Operations",
    tags: ["Data Validation", "Relational Databases", "HCMS", "Process Improvement"],
    bullets: [
      "Validated 250 employee records in Optic and HCMS systems by performing data migration and ensuring compliance with internal protocols.",
      "Participated in developing an automated HR tracking system using a relational database, reducing reporting errors by 18%.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">Experience</h2>
          <div className="w-24 h-1 bg-[#0A66C2] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A mix of software engineering, applied research, embedded systems, developer community
            leadership, and operational problem-solving experience.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={`${exp.role}-${exp.organization}`}
              className="border-[#1A1A1A] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-[1fr_auto] gap-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <Badge className="bg-[#1A1A1A] text-white hover:bg-[#1E90FF]">
                        {exp.type}
                      </Badge>
                      <span className="text-sm text-gray-500">Experience {index + 1}</span>
                    </div>

                    <h3 className="text-2xl text-black mb-2">{exp.role}</h3>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 text-gray-600 mb-5">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#0A66C2]" />
                        <span>{exp.organization}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#0A66C2]" />
                        <span>{exp.location}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0A66C2]" />
                        <span>{exp.date}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#0A66C2] flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:w-64">
                    <p className="text-sm text-gray-500 mb-3">Relevant Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-white border border-gray-200 text-gray-700 hover:bg-[#1E90FF] hover:text-white transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
