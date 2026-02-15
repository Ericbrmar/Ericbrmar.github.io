import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <p
          className="text-primary text-sm tracking-widest uppercase mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Software Engineer
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I'm{" "}
          <span className="gradient-text">Eric Brooks Martin</span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Stanford MS & MIT BS graduate specializing in full-stack development,
          building scalable applications with modern technologies.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="gradient-bg px-8 py-3 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="https://github.com/ericbrooksmartin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/ericbrooksmartin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:ericbmartin69@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
