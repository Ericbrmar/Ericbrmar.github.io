import { User, Code, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          A passionate software engineer with a strong academic background and
          a love for building impactful products.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: User,
              title: "Who I Am",
              desc: "I'm a software engineer with an MS from Stanford and BS from MIT, driven by curiosity and a commitment to clean, efficient code.",
            },
            {
              icon: Code,
              title: "What I Do",
              desc: "I design and build full-stack web applications using React, Node.js, Python, and modern databases—from concept to deployment.",
            },
            {
              icon: Briefcase,
              title: "My Approach",
              desc: "I combine analytical thinking with creative problem-solving, focusing on scalable architecture and exceptional user experiences.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-8 text-center hover:glow transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <item.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
