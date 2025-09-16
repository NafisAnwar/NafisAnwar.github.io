import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}