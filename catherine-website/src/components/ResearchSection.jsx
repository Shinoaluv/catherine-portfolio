import {
  BookOpen,
  Brain,
  ExternalLink,
  Users,
} from "lucide-react";

const research = [
  {
    icon: Brain,
    year: "2025",
    title: "AI & The Future of Computer Science Careers",
    type: "Pioneer Academics Research",
    description:
      "Exploring how artificial intelligence is changing programming roles, workforce expectations, and the skills future computer scientists need.",
    details: [
      "Literature review",
      "AI workforce analysis",
      "Technology impact research",
    ],
  },
  {
    icon: Users,
    year: "2025",
    title: "AI Conflict Mediator",
    type: "AI + Human Communication",
    description:
      "Designed an AI-powered mediator exploring how technology can support teamwork, communication, and conflict resolution.",
    details: [
      "Human-centered AI",
      "Prompt engineering",
      "Team communication systems",
    ],
  },
  {
    icon: BookOpen,
    year: "2026",
    title: "AI × Asian Restaurant Technology",
    type: "Research + Product Design",
    description:
      "Investigating how technology can better support immigrant restaurant owners by understanding language barriers, cultural context, and daily workflows.",
    details: [
      "User interviews",
      "Technology accessibility",
      "Prototype development",
    ],
  },
];

export const ResearchSection = () => {
  return (
    <section
      id="research"
      className="relative py-28 px-4"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-label mb-4">
            04 — RESEARCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Asking questions.
            <br />
            <span className="text-primary">
              Building answers.
            </span>
          </h2>

          <p className="text-lg text-foreground/65">
            I am interested in how emerging technology affects people,
            organizations, and communities. My research focuses on making
            technology more thoughtful and human-centered.
          </p>
        </div>


        {/* Timeline */}
        <div className="space-y-8">

          {research.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass-card rounded-[2rem] p-8 md:p-10
                text-left hover:border-primary/40
                transition-all duration-300 pink-glow"
              >

                <div className="flex flex-col md:flex-row gap-8">

                  {/* Year */}
                  <div className="md:w-28">
                    <p className="text-primary font-bold text-xl">
                      {item.year}
                    </p>

                    <p className="text-xs text-foreground/50 mt-1">
                      PROJECT {index + 1}
                    </p>
                  </div>


                  {/* Icon */}
                  <div>
                    <div
                      className="w-14 h-14 rounded-2xl bg-primary/10
                      flex items-center justify-center mb-5"
                    >
                      <Icon size={26} />
                    </div>
                  </div>


                  {/* Content */}
                  <div className="flex-1">

                    <p className="text-xs uppercase tracking-[0.18em] text-primary mb-2">
                      {item.type}
                    </p>

                    <h3 className="text-2xl font-bold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-foreground/65 leading-relaxed mb-5">
                      {item.description}
                    </p>


                    <div className="flex flex-wrap gap-2">
                      {item.details.map((detail) => (
                        <span
                          key={detail}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
            border border-primary/30 text-primary
            hover:bg-primary/10 transition-colors"
          >
            Discuss my work
            <ExternalLink size={16}/>
          </a>
        </div>

      </div>
    </section>
  );
};