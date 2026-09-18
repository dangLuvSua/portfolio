"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.6,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 pt-12"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-1">
        <span className="text-sm font-semibold tracking-widest uppercase text-accent">
          Fransua John Villesis
        </span>
        <span className="text-sm font-semibold tracking-widest uppercase text-accent">
          Fullstack Developer & Software Engineer
        </span>
      </motion.div>
      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl"
      >
        I build software that <br className="hidden sm:inline" />
        looks good and works <br className="hidden sm:inline" />
        even better.
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-accent max-w-lg text-lg leading-relaxed"
      >
        Modern web applications, thoughtful interfaces, and practical solutions
        to real-world problems.
      </motion.p>
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-4 pt-4"
      >
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
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-4 pt-12 border-t border-foreground/5 mt-4 w-full"
      >
        <span className="text-sm font-semibold tracking-widest uppercase text-accent">
          Tech Stack
        </span>
        <motion.div
          variants={iconContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-2xl"
        >
          {[
            { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
            { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", className: "dark:invert" },
            { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
            { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
          ].map((tech) => (
            <motion.img
              key={tech.name}
              variants={iconVariants}
              src={tech.src}
              alt={tech.name}
              className={`w-7 h-7 transition-transform hover:scale-110 ${tech.className || ""}`}
              title={tech.name}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
