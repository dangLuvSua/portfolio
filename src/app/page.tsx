import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium tracking-wide">
          <Link href="/" className="hover:opacity-70 transition-opacity font-bold">
            FJV
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="#projects" className="hidden sm:inline hover:opacity-70 transition-opacity">Projects</Link>
            <Link href="#skills" className="hidden sm:inline hover:opacity-70 transition-opacity">Skills</Link>
            <Link href="#about" className="hidden sm:inline hover:opacity-70 transition-opacity">About</Link>
            <Link href="#contact" className="hidden sm:inline hover:opacity-70 transition-opacity">Contact</Link>
            <ThemeToggle />
            <a 
              href="mailto:hello@example.com" 
              className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity font-semibold"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 flex flex-col gap-24">

        {/* Hero */}
        <header className="flex flex-col gap-6 pt-12">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">Fransua John Villesis</span>
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">Fullstack Developer</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl">
            I build software that <br className="hidden sm:inline" />
            looks good and works <br className="hidden sm:inline" />
            even better.
          </h1>
          <p className="text-accent max-w-lg text-lg leading-relaxed">
            Modern web applications, thoughtful interfaces, and practical solutions to real-world problems.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="#projects" 
              className="px-6 py-3 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity font-medium"
            >
              View My Work
            </Link>
            <Link 
              href="#about" 
              className="px-6 py-3 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors font-medium"
            >
              About Me
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col items-center gap-4 pt-12 border-t border-foreground/5 mt-4 w-full">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">Tech Stack</span>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-2xl">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-7 h-7 transition-transform hover:scale-110" title="HTML5" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="w-7 h-7 transition-transform hover:scale-110" title="CSS3" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-7 h-7 transition-transform hover:scale-110" title="JavaScript" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-7 h-7 transition-transform hover:scale-110" title="TypeScript" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-7 h-7 transition-transform hover:scale-110" title="React" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-7 h-7 transition-transform hover:scale-110 dark:invert" title="Next.js" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-7 h-7 transition-transform hover:scale-110" title="Tailwind CSS" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-7 h-7 transition-transform hover:scale-110" title="Node.js" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-7 h-7 transition-transform hover:scale-110" title="Python" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-7 h-7 transition-transform hover:scale-110" title="Java" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="w-7 h-7 transition-transform hover:scale-110" title="PHP" />
            </div>
          </div>
        </header>

        {/* Selected Work */}
        <section id="projects" className="scroll-mt-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">Selected Work</h2>
            <p className="text-accent max-w-xl text-lg">A selection of my recent projects. Focused on user experience, performance, and clean code.</p>
          </div>
          
          <div className="flex flex-col gap-16">
            {/* Project 1 */}
            <div className="flex flex-col gap-6 group">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
                <Image 
                  src="/project_alpha_mockup_1787038579004.jpg"
                  alt="Fluid Analytics Dashboard"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold tracking-tight">Fluid Analytics Dashboard</h3>
                  <div className="flex gap-3">
                    <a href="#" className="text-accent hover:text-foreground transition-colors" title="Live Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a href="#" className="text-accent hover:text-foreground transition-colors" title="Source Code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10">Next.js</span>
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10">Tailwind CSS</span>
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10">PostgreSQL</span>
                </div>
                <p className="text-accent leading-relaxed">
                  <strong>Problem:</strong> Marketing teams lacked a unified view of their campaign metrics across platforms.<br/>
                  <strong>Solution:</strong> A high-performance SaaS dashboard that aggregates data into a sleek, real-time interface.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col gap-6 group">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
                <Image 
                  src="/project_beta_mockup_1787038592211.jpg"
                  alt="Aura Artisan Storefront"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold tracking-tight">Aura Artisan Storefront</h3>
                  <div className="flex gap-3">
                    <a href="#" className="text-accent hover:text-foreground transition-colors" title="Live Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a href="#" className="text-accent hover:text-foreground transition-colors" title="Source Code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10">React</span>
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10">Node.js</span>
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10">Stripe API</span>
                </div>
                <p className="text-accent leading-relaxed">
                  <strong>Problem:</strong> The client's legacy storefront was slow and losing mobile conversions.<br/>
                  <strong>Solution:</strong> A headless e-commerce experience with sub-second page loads and seamless checkout.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col gap-6 group">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-foreground/5 border border-foreground/10">
                <Image 
                  src="/project_gamma_mockup_1787038606637.jpg"
                  alt="Finlytic Wealth App"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold tracking-tight">Finlytic Wealth App</h3>
                  <div className="flex gap-3">
                    <a href="#" className="text-accent hover:text-foreground transition-colors" title="Live Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <a href="#" className="text-accent hover:text-foreground transition-colors" title="Source Code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10">Vue.js</span>
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10">D3.js</span>
                  <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-foreground/10">Firebase</span>
                </div>
                <p className="text-accent leading-relaxed">
                  <strong>Problem:</strong> Investors struggled to visualize complex asset allocations across multiple brokers.<br/>
                  <strong>Solution:</strong> An interactive, dark-themed dashboard that unifies portfolios into beautiful, readable charts.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 flex flex-col gap-10 pt-10 border-t border-foreground/10">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">Skills & Tech Stack</h2>
            <p className="text-accent max-w-xl text-lg">Tools and technologies I use to bring ideas to life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium border-b border-foreground/10 pb-2">Frontend</h3>
              <ul className="flex flex-col gap-2 text-accent">
                <li>React / Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS / Sass</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium border-b border-foreground/10 pb-2">Backend</h3>
              <ul className="flex flex-col gap-2 text-accent">
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>PHP / Laravel</li>
                <li>RESTful APIs / GraphQL</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium border-b border-foreground/10 pb-2">Database</h3>
              <ul className="flex flex-col gap-2 text-accent">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium border-b border-foreground/10 pb-2">Design & Tools</h3>
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
        <section id="about" className="scroll-mt-24 flex flex-col gap-10 pt-10 border-t border-foreground/10">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">About Me</h2>
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-accent text-lg leading-relaxed flex flex-col gap-4">
            <p>
              My journey into software engineering started with a curiosity for how things work on the web. Over the years, I've honed my skills in building robust, scalable applications that don't just function flawlessly, but also provide an intuitive and delightful user experience.
            </p>
            <p>
              I believe that the best products are built at the intersection of clean code and thoughtful design. When I'm not writing code, you can usually find me exploring new hiking trails, reading up on the latest tech trends, or experimenting with digital photography.
            </p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 flex flex-col gap-10 pt-10 border-t border-foreground/10">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">Education</h2>
          </div>
          <div className="flex flex-col gap-8">
            
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-transparent pl-6 relative before:absolute before:w-3 before:h-3 before:bg-foreground before:rounded-full before:-left-[7px] before:top-1.5">
              <div className="md:w-32 shrink-0">
                <span className="text-sm text-accent font-medium">2023 - Present</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg">Fourth Year Student <span className="text-accent font-normal">@ Bulacan State University - Bustos Campus</span></h3>
                <p className="text-accent leading-relaxed">Currently completing my college degree with a strong focus on software engineering, web development, and creating practical technological solutions.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 flex flex-col gap-10 pt-10 border-t border-foreground/10">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent">Contact</h2>
            <p className="text-accent max-w-xl text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-2 text-2xl font-medium hover:opacity-70 transition-opacity underline decoration-1 underline-offset-8"
            >
              fransuajohn@gmail.com
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            
            <div className="flex gap-6">
              <a href="https://github.com/dangLuvSua" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-foreground transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/fransua-john-421032403/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-foreground transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex justify-between items-center text-sm text-accent pt-10 pb-4 border-t border-foreground/10 mt-10">
          <p>© {new Date().getFullYear()} Fransua John Villesis.</p>
          <a href="#" className="hover:text-foreground transition-colors flex items-center gap-2">
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </a>
        </footer>

      </div>
    </div>
  );
}
