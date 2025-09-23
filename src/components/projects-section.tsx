import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

// existing images (from your figma assets)
import gritVMImage from "figma:asset/c377cdd31d9f35a7725e08a8229b80a8d86fbbae.png";
import rsaImage from "figma:asset/87ff3fb48729f4d511ccb9ba1316e6f981da3c95.png";
import mediTrendsImage from "figma:asset/3b96e6129e9cfb76e2bfab26d4cd2bcd8bda88df.png";

// NEW images — add these files to: src/assets/
import spotifyImg from "@/assets/spotify-voice-assistant.png";
import numberTheoryImg from "@/assets/number-theory-rsa-tools.png";
import ytSummarizerImg from "@/assets/youtube-summarizer.png";
import triviaNightImg from "@/assets/trivia-night.png";

const projects = [
  // --- existing ---
  {
    id: 1,
    title: "GritVM Web IDE",
    description:
      "Compiled a C++ virtual machine to WebAssembly, enabling browser execution with real-time memory visualization and Monaco Editor support. Deployed full-stack on Vercel.",
    image: gritVMImage,
    stack: ["C++", "WebAssembly", "React", "Monaco"],
    liveUrl: "https://github.com/NafisAnwar/GritVMFullStack", // kept for overlay icon
    githubUrl: "https://github.com/NafisAnwar/GritVM_Interactive",
  },
  {
    id: 2,
    title: "RSA Educational Playground",
    description:
      "Full-stack educational platform with integrated RSA crypto engine and ASP.NET Core backend. Achieved 30% faster operations with C# P/Invoke and automated testing.",
    image: rsaImage,
    stack: ["C#", "ASP.NET", "React", "P/Invoke"],
    liveUrl: "#",
    githubUrl: "https://github.com/NafisAnwar/RSACryptoFullStack",
  },
  {
    id: 3,
    title: "MediTrends Analytics",
    description:
      "Advanced Reddit data analysis system processing 28k+ posts across 18 communities with semantic search using FAISS vector structures and NLP trend detection.",
    image: mediTrendsImage,
    stack: ["Python", "FAISS", "TensorFlow", "PyTorch"],
    liveUrl: "#",
    githubUrl: "https://github.com/NafisAnwar/MediTrends",
  },

  // --- new ---
  {
    id: 4,
    title: "Spotify Voice Assistant",
    description:
      "Hands-free Spotify control using voice commands. Integrates speech recognition with Spotify Web API for search, playback and playlist actions.",
    image: spotifyImg,
    stack: ["Python", "Speech", "Spotify API", "Flask"],
    liveUrl: "#",
    githubUrl: "https://github.com/NafisAnwar/spotify-voice-assistant",
  },
  {
    id: 5,
    title: "Number Theory & RSA Tools",
    description:
      "Practical toolkit for number-theory operations and RSA workflows—key generation, encryption/decryption, and utilities for modular arithmetic.",
    image: numberTheoryImg,
    stack: ["Python", "RSA", "Number Theory", "CLI"],
    liveUrl: "#",
    githubUrl: "https://github.com/NafisAnwar/NumberTheory-RSA-Tools",
  },
  {
    id: 6,
    title: "YouTube Summarizer",
    description:
      "Fetches transcripts and produces concise summaries for YouTube videos using NLP pipelines, making long-form content quickly digestible.",
    image: ytSummarizerImg,
    stack: ["Python", "NLP", "YouTube API"],
    liveUrl: "#",
    githubUrl: "https://github.com/NafisAnwar/YoutubeSummarizer",
  },
  {
    id: 7,
    title: "Trivia Night",
    description:
      "Real-time trivia game for the web with lobby/rooms, timed questions, and scoreboards—built for fast gameplay and easy hosting.",
    image: triviaNightImg,
    stack: ["React", "Node", "Socket.io"],
    liveUrl: "#",
    githubUrl: "https://github.com/NafisAnwar/TriviaNight",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-[#0A66C2] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-[#1A1A1A] overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Overlay icons kept: external + GitHub */}
                  <Button size="sm" variant="secondary" className="p-2 bg-white/90 hover:bg-white" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Open live link">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" className="p-2 bg-white/90 hover:bg-white" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Open source code">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl mb-3 text-black group-hover:text-[#0A66C2] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-[#1A1A1A] text-white hover:bg-[#1E90FF] transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Single centered, full-width Code button */}
                <div className="pt-4 border-t border-gray-200">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
