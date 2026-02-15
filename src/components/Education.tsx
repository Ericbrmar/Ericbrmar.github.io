import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Software Engineering",
    school: "Stanford University",
    years: "2021 – 2023",
    gpa: "3.9",
    details:
      "Focused on advanced software architecture, distributed systems, and machine learning applications.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Massachusetts Institute of Technology (MIT)",
    years: "2017 – 2021",
    gpa: "3.8",
    details:
      "Strong foundation in algorithms, data structures, computer systems, and software engineering principles.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Academic excellence from world-class institutions.
        </p>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {education.map((edu, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full gradient-bg -translate-x-1/2 mt-8 ring-4 ring-background z-10" />

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-0 md:mr-auto md:ml-0" : "md:pl-0 md:ml-auto md:mr-0"
                }`}
              >
                <div className="glass-card rounded-xl p-6 hover:glow transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <GraduationCap size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-semibold">
                        {edu.years}
                      </span>
                      <h3 className="text-base font-semibold leading-tight">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {edu.school} • <span className="text-primary">GPA {edu.gpa}</span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
