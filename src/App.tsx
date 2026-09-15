import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { SyntheticStudySection } from "./components/synthetic-study-section";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { SkillsSection } from "./components/skills-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { useMotionPreference } from "./components/shared";

export default function App() {
  const reduced = useMotionPreference();
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion={reduced ? "always" : "never"}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <main id="main">
          <HeroSection />
          <ProjectsSection />
          <SyntheticStudySection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
