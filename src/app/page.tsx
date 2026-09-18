import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/hero-section";
import { ProjectsBrowser } from "../components/project-card";
import { SectionHeading } from "../components/section-heading";
import {
  AboutBento,
  ContactSection,
  EducationTimeline,
  Footer,
  SkillsGrid,
} from "../components/portfolio-sections";
import { Reveal } from "../components/reveal";

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-background text-foreground font-sans"
    >
      <Navbar />

      {/* soft top backdrop */}
      <div aria-hidden className="dot-grid absolute inset-x-0 top-0 h-[560px]" />

      <main className="relative max-w-6xl mx-auto px-5 sm:px-8 pb-8 flex flex-col gap-20 sm:gap-24">
        <HeroSection />

        <section id="projects" className="scroll-mt-24 flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects with real users in mind"
              description="A selection of recent work — focused on performance, clarity, and clean code."
            />
          </div>
          <Reveal delay={0.1}>
            <ProjectsBrowser />
          </Reveal>
        </section>

        <section id="skills" className="scroll-mt-24 flex flex-col gap-6">
          <SectionHeading
            eyebrow="Stack"
            title="Tools I reach for"
            description="A practical toolkit for designing, building, and shipping end-to-end."
          />
          <SkillsGrid />
        </section>

        <section id="about" className="scroll-mt-24 flex flex-col gap-6">
          <SectionHeading
            eyebrow="About"
            title="Design-minded engineer"
            description="Clean code, thoughtful interfaces, and solutions that hold up in the real world."
          />
          <AboutBento />
        </section>

        <section id="education" className="scroll-mt-24 flex flex-col gap-6">
          <SectionHeading eyebrow="Education" title="Where I'm learning" />
          <EducationTimeline />
        </section>

        <section id="contact" className="scroll-mt-24 flex flex-col gap-6">
          <ContactSection />
        </section>

        <div className="border-t border-border">
          <Footer />
        </div>
      </main>
    </div>
  );
}
