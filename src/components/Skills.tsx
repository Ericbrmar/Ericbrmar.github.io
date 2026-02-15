const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "C++", "Ruby", "SQL", "HTML", "CSS"],
  },
  {
    title: "Web Development",
    skills: ["Node.js", "React", "Express", "Web Development"],
  },
  {
    title: "Tools",
    skills: ["PowerShell", "Git & GitHub"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Analytical Thinking",
      "Creative Thinking",
      "Project Management",
      "Digital Literacy",
      "English (en-US)",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "Environmental Engineering",
      "Geotechnical Engineering",
      "Structural Engineering",
      "Transportation Engineering",
      "Security Science",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          A diverse skill set spanning software development, engineering, and
          leadership.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 hover:glow transition-shadow duration-300"
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full border border-border bg-muted/50 text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
