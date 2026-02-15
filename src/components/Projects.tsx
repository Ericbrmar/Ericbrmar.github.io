import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with product management, shopping cart, secure checkout via Stripe, and order tracking.",
    tech: ["Node.js", "React", "MongoDB", "Stripe API"],
  },
  {
    title: "Project Management Dashboard",
    desc: "Real-time collaborative project management tool with task boards, team assignments, and live updates via WebSockets.",
    tech: ["JavaScript", "Express", "PostgreSQL", "Socket.io"],
  },
  {
    title: "Weather Dashboard",
    desc: "Interactive weather application with location search, 7-day forecasts, and dynamic data visualizations.",
    tech: ["React", "OpenWeather API", "Chart.js"],
  },
  {
    title: "Social Media API",
    desc: "RESTful API for a social platform with user authentication, post management, and secure JWT-based authorization.",
    tech: ["Python", "Flask", "PostgreSQL", "JWT"],
  },
  {
    title: "Blog CMS Platform",
    desc: "Content management system with rich text editing, user roles, comment moderation, and responsive templates.",
    tech: ["Node.js", "MongoDB", "EJS", "Bootstrap"],
  },
  {
    title: "Personal Portfolio",
    desc: "Responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          A selection of projects that demonstrate my technical expertise and
          problem-solving abilities.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden group hover:glow transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Gradient top bar */}
              <div className="h-1 w-full gradient-bg" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/ericbrooksmartin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
