import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "figma:asset/092cec94c9e890d97d0664ec57cdf4d1d7e225fb.png";

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">About Me</h2>
          <div className="w-24 h-1 bg-[#0A66C2] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#1A1A1A] shadow-2xl">
                <img
                  src={profileImage}
                  alt="Nafis Anwar - Software Engineering Student"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full border border-[#1E90FF]/30 shadow-lg shadow-[#1E90FF]/20"></div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <Card className="border-[#1A1A1A] shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I am a Computer Science student at the University of South Florida (GPA 3.80, expected graduation May 2027) with a strong focus on backend systems, developer tooling, applied AI, and full-stack software engineering. My work spans system-level programming, web application development, NLP-driven analytics, and research support for humanoid robotics. I have built projects ranging from a WebAssembly-based C++ virtual machine with a React IDE, to a Dockerized RSA educational platform with ASP.NET Core REST APIs, to semantic-search and analytics systems over large text corpora using FAISS and modern ML workflows. At USF’s RARE Lab, I support research involving the Unitree G1 humanoid robot by analyzing evaluation pipelines, reproducing experimental workflows, and helping maintain reliable benchmarking and logging processes. Beyond technical development, I bring strong leadership and communication experience through campus roles where I have supported residents, coordinated programs, and worked across teams. I am especially interested in scalable backend architecture, debugging-heavy engineering, API design, AI-enabled systems, and research-to-production workflows that create reliable, practical software.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#1A1A1A]">
                  <div className="text-center">
                    <div className="text-2xl text-[#0A66C2]">3.80</div>
                    <div className="text-sm text-gray-600">GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-[#0A66C2]">2027</div>
                    <div className="text-sm text-gray-600">Graduation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-[#0A66C2]">5+</div>
                    <div className="text-sm text-gray-600">Major Systems Built</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
