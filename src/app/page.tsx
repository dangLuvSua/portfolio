import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";
import { ProjectsBrowser } from "../components/project-card";
import { HeroSection } from "../components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center text-sm font-medium tracking-wide">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity font-bold"
          >
            FJV
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="#projects"
              className="hidden sm:inline hover:opacity-70 transition-opacity"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="hidden sm:inline hover:opacity-70 transition-opacity"
            >
              Skills
            </Link>
            <Link
              href="#about"
              className="hidden sm:inline hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hidden sm:inline hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
            <ThemeToggle />
            <a
              href="mailto:fransuavillesis14@gmail.com"
              className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity font-semibold"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24 flex flex-col gap-24">
        {/* Hero */}
        <HeroSection />

        {/* Selected Work */}
        <section id="projects" className="scroll-mt-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">
              Selected Work
            </h2>
            <p className="text-accent max-w-xl text-lg">
              A selection of my recent projects. Focused on user experience,
              performance, and clean code.
            </p>
          </div>

          <ProjectsBrowser />
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-24 flex flex-col gap-10 pt-10 border-t border-foreground/10"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">
              Skills & Tech Stack
            </h2>
            <p className="text-accent max-w-xl text-lg">
              Tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium border-b border-foreground/10 pb-2">
                Frontend
              </h3>
              <ul className="flex flex-col gap-2 text-accent">
                <li>React / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS / Sass</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium border-b border-foreground/10 pb-2">
                Backend
              </h3>
              <ul className="flex flex-col gap-2 text-accent">
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>PHP / Laravel</li>
                <li>RESTful APIs / GraphQL</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium border-b border-foreground/10 pb-2">
                Database
              </h3>
              <ul className="flex flex-col gap-2 text-accent">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium border-b border-foreground/10 pb-2">
                Design & Tools
              </h3>
              <ul className="flex flex-col gap-2 text-accent">
                <li>Figma / UI Design</li>
                <li>Git / GitHub</li>
                <li>Docker / CI/CD</li>
                <li>Vercel / AWS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 flex flex-col gap-10 pt-10 border-t border-foreground/10"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">
              About Me
            </h2>
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-accent text-lg leading-relaxed flex flex-col gap-4">
            <p>
              My journey into software engineering started with a curiosity for
              how things work on the web. Over the years, I've honed my skills
              in building robust, scalable applications that don't just function
              flawlessly, but also provide an intuitive and delightful user
              experience.
            </p>
            <p>
              I believe that the best products are built at the intersection of
              clean code and thoughtful design. When I'm not writing code, you
              can usually find me exploring new hiking trails, reading up on the
              latest tech trends, or experimenting with digital photography.
            </p>
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="scroll-mt-24 flex flex-col gap-10 pt-10 border-t border-foreground/10"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">
              Education
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-transparent pl-6 relative before:absolute before:w-3 before:h-3 before:bg-foreground before:rounded-full before:-left-[7px] before:top-1.5">
              <div className="md:w-32 shrink-0">
                <span className="text-sm text-accent font-medium">
                  2023 - Present
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg">
                  Fourth Year Student{" "}
                  <span className="text-accent font-normal">
                    @ Bulacan State University - Bustos Campus
                  </span>
                </h3>
                <p className="text-accent leading-relaxed">
                  Currently completing my college degree with a strong focus on
                  software engineering, web development, and creating practical
                  technological solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 flex flex-col gap-10 pt-10 border-t border-foreground/10"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">
              Contact
            </h2>
            <p className="text-accent max-w-xl text-lg">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
            <a
              href="mailto:fransuavillesis14@gmail.com"
              className="inline-flex items-center gap-2 text-2xl font-medium hover:opacity-70 transition-opacity underline decoration-1 underline-offset-8"
            >
              fransuavillesis14@gmail.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>

            <div className="flex gap-6">
              <a
                href="https://github.com/dangLuvSua"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-foreground transition-colors font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fransua-john-421032403/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:text-foreground transition-colors font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex justify-between items-center text-sm text-accent pt-10 pb-4 border-t border-foreground/10 mt-10">
          <p>© {new Date().getFullYear()} Fransua John Villesis.</p>
          <a
            href="#"
            className="hover:text-foreground transition-colors flex items-center gap-2"
          >
            Back to top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </a>
        </footer>
      </div>
    </div>
  );
}
