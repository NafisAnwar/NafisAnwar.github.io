import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: "Expert", tone: "green" },
      { name: "C++", level: "Advanced", tone: "blue" },
      { name: "Java", level: "Advanced", tone: "blue" },
      { name: "C", level: "Advanced", tone: "blue" },
      { name: "JavaScript", level: "Advanced", tone: "blue" },
      { name: "HTML/CSS", level: "Advanced", tone: "blue" },
      { name: "C#", level: "Intermediate", tone: "yellow" },
      { name: "SQL", level: "Intermediate", tone: "yellow" },
      { name: "Assembly", level: "Intermediate", tone: "yellow" },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "React.js", level: "Advanced", tone: "blue" },
      { name: "ASP.NET Core", level: "Advanced", tone: "blue" },
      { name: "REST APIs", level: "Advanced", tone: "blue" },
      { name: "Flask", level: "Advanced", tone: "blue" },
      { name: "PyTorch", level: "Advanced", tone: "blue" },
      { name: "MongoDB", level: "Intermediate", tone: "yellow" },
      { name: "TensorFlow", level: "Intermediate", tone: "yellow" },
      { name: "FAISS", level: "Intermediate", tone: "yellow" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: "Expert", tone: "green" },
      { name: "Linux / CLI", level: "Advanced", tone: "blue" },
      { name: "Docker", level: "Advanced", tone: "blue" },
      { name: "Arduino", level: "Advanced", tone: "blue" },
      { name: "GitHub Actions", level: "Intermediate", tone: "yellow" },
      { name: "Postman", level: "Intermediate", tone: "yellow" },
      { name: "Vercel", level: "Intermediate", tone: "yellow" },
      { name: "AWS", level: "Intermediate", tone: "yellow" },
      { name: "Azure", level: "Intermediate", tone: "yellow" },
      { name: "Amazon RDS", level: "Intermediate", tone: "yellow" },
    ],
  },
  {
    title: "Core Engineering",
    skills: [
      { name: "Object-Oriented Design", level: "Expert", tone: "green" },
      { name: "Data Structures", level: "Advanced", tone: "blue" },
      { name: "Algorithms", level: "Advanced", tone: "blue" },
      { name: "Computer Organization", level: "Advanced", tone: "blue" },
      { name: "Computer Architecture", level: "Advanced", tone: "blue" },
      { name: "Testing / Automation", level: "Advanced", tone: "blue" },
      { name: "Debugging / RCA", level: "Advanced", tone: "blue" },
      { name: "NLP", level: "Intermediate", tone: "yellow" },
      { name: "Semantic Search", level: "Intermediate", tone: "yellow" },
      { name: "Statistics / ML Foundations", level: "Intermediate", tone: "yellow" },
    ],
  },
];

const techStack = [
  { name: "C", short: "C" },
  { name: "C++", short: "C+" },
  { name: "Python", short: "PY" },
  { name: "Java", short: "JA" },
  { name: "C#", short: "C#" },
  { name: "JavaScript", short: "JS" },
  { name: "SQL", short: "SQ" },
  { name: "Assembly", short: "ASM" },
  { name: "React.js", short: "RCT" },
  { name: "ASP.NET", short: "ASP" },
  { name: "Flask", short: "FL" },
  { name: "REST APIs", short: "API" },
  { name: "Docker", short: "DK" },
  { name: "GitHub Actions", short: "GHA" },
  { name: "Linux", short: "LX" },
  { name: "Postman", short: "PM" },
  { name: "MongoDB", short: "MO" },
  { name: "TensorFlow", short: "TF" },
  { name: "PyTorch", short: "PT" },
  { name: "FAISS", short: "FA" },
  { name: "Git", short: "GI" },
  { name: "Arduino", short: "AR" },
  { name: "AWS", short: "AW" },
  { name: "Azure", short: "AZ" },
  { name: "Vercel", short: "VC" },
  { name: "Selenium", short: "SE" },
];

function getToneClasses(tone: string) {
  if (tone === "green") {
    return "bg-green-100 text-green-800 border-green-300";
  }

  if (tone === "blue") {
    return "bg-blue-100 text-blue-800 border-blue-300";
  }

  return "bg-yellow-100 text-yellow-800 border-yellow-300";
}

export function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-[#0A66C2] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across software engineering,
            backend systems, AI tooling, testing, and developer infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="border-[#1A1A1A] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <h3 className="text-xl text-black mb-6 pb-3 border-b border-[#1A1A1A]">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">{skill.name}</span>
                      </div>
                      <div
                        className={`w-full rounded-full border px-3 py-1 text-xs ${getToneClasses(
                          skill.tone
                        )}`}
                      >
                        {skill.level}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Icons Grid */}
        <div className="mt-16 p-8 bg-gray-50 rounded-lg border border-[#1A1A1A]">
          <h3 className="text-2xl text-center text-black mb-8">Tech Stack</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-[#1E90FF] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#1E90FF] transition-colors duration-300">
                  <span className="text-white text-sm font-semibold">{tech.short}</span>
                </div>
                <span className="text-xs text-gray-600 text-center group-hover:text-[#0A66C2] transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
