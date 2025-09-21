import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { MouseEvent } from "react";

export function HeroSection() {
  const handleContactClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwZGV2ZWxvcGVyJTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzYyNjU0MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Software development workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#0A66C2]/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#0A66C2] bg-clip-text text-transparent uppercase tracking-wider"
          style={{ fontFamily: '"Arial Black", "Helvetica", sans-serif' }}
        >
          Nafis Anwar
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-300">
          Software Engineer | Backend & Full-Stack Development
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
          Strong foundation in backend/frontend development with C++, Python, and Java. Experienced in scalable systems, debugging, and real-time robotics. Eager to deliver impactful results as a Backend Engineer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#1E90FF] hover:bg-[#0A66C2] text-white border-none px-8 py-3 transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="/NafisAnwar__Software_Engineer_Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>

          <Button
            size="lg"
            className="bg-[#1E90FF] hover:bg-[#0A66C2] text-white border-none px-8 py-3 transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a href="#contact" onClick={handleContactClick}>
              Contact Me
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
