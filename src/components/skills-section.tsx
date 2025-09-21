import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "C++", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "C", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML5/CSS", level: "Advanced" },
      { name: "C#", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Assembly", level: "Intermediate" }
    ]
  },
  {
    title: "Frameworks", 
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "PyTorch", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Flask", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "FAISS", level: "Intermediate" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Arduino", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "Azure", level: "Intermediate" }
    ]
  },
  {
    title: "Core",
    skills: [
      { name: "OOP", level: "Expert" },
      { name: "Computer Organization", level: "Expert" },
      { name: "Data Structures", level: "Advanced" },
      { name: "Algorithms", level: "Advanced" },
      { name: "Computer Architecture", level: "Advanced" },
      { name: "RISC-V", level: "Advanced" },
      { name: "Software Quality Assurance", level: "Advanced" },
      { name: "Artificial Intelligence/ML", level: "Intermediate" },
      { name: "Semantic Search", level: "Intermediate" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "Advanced":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Intermediate":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "Beginner":
      return "bg-gray-100 text-gray-800 border-gray-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-[#0A66C2] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different technologies and domains.
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
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-2">
                      <span className="text-gray-700 text-sm">
                        {skill.name}
                      </span>
                      <span 
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs border transition-all duration-300 hover:scale-105 ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
            {[
              'C', 'C++', 'Python', 'Java', 'C#', 'JavaScript', 'SQL', 'Assembly', 'React.js', 
              'Flask', 'MongoDB', 'TensorFlow', 'PyTorch', 'FAISS', 'Git', 'Arduino', 'AWS', 'Azure'
            ].map((tech) => (
              <div 
                key={tech} 
                className="flex flex-col items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-[#1E90FF] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center mb-2 group-hover:bg-[#1E90FF] transition-colors duration-300">
                  <span className="text-white text-xs font-semibold">
                    {tech === 'Assembly' ? 'ASM' : 
                     tech === 'JavaScript' ? 'JS' : 
                     tech === 'React.js' ? 'RCT' :
                     tech === 'TensorFlow' ? 'TF' :
                     tech === 'PyTorch' ? 'PT' :
                     tech.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-xs text-gray-600 text-center group-hover:text-[#0A66C2] transition-colors duration-300 leading-tight">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}