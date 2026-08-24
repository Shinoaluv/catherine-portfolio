import {
  Brain,
  Camera,
  Heart,
  Lightbulb,
} from "lucide-react";

export const AboutSection = () => {
  const interests = [
    {
      icon: Brain,
      title: "Research",
      description:
        "Exploring AI, human-computer interaction, and how emerging technology changes the way people work and communicate.",
    },
    {
      icon: Lightbulb,
      title: "Engineering",
      description:
        "Designing, building, testing, and improving solutions through robotics, programming, and hands-on engineering.",
    },
    {
      icon: Heart,
      title: "Impact",
      description:
        "Using technology and advocacy to make information, opportunities, and systems more accessible to real communities.",
    },
    {
      icon: Camera,
      title: "Storytelling",
      description:
        "Using photography and visual media to document people, communities, and the stories behind their experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-4"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-label mb-4">
            01 — ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            I don't just want to build
            <span className="text-primary"> technology.</span>
            <br />
            I want to understand who it's built for.
          </h2>

          <p className="text-lg text-foreground/65 leading-relaxed">
            My interests sit at the intersection of engineering, artificial
            intelligence, entrepreneurship, and people. Whether I'm researching
            AI, building robots, developing technology for restaurant owners,
            advocating for hearing health, or telling stories through
            photography, I'm interested in one question:
          </p>

          <p className="mt-5 text-xl md:text-2xl font-semibold">
            How can we design technology around people instead of asking people
            to adapt to technology?
          </p>
        </div>

        {/* Four interest cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {interests.map((interest, index) => {
            const Icon = interest.icon;

            return (
              <div
                key={interest.title}
                className="group glass-card rounded-3xl p-7 text-left
                hover:-translate-y-2 hover:border-primary/40
                transition-all duration-300 pink-glow"
              >
                {/* Number */}
                <p className="text-xs text-primary/60 font-mono mb-6">
                  0{index + 1}
                </p>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl bg-primary/10
                  flex items-center justify-center mb-6
                  group-hover:bg-primary group-hover:text-primary-foreground
                  transition-colors duration-300"
                >
                  <Icon size={22} />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-3">
                  {interest.title}
                </h3>

                <p className="text-sm text-foreground/60 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex justify-center">
          <div className="glass-card rounded-full px-7 py-3 border border-primary/20">
            <p className="text-sm md:text-base text-foreground/70">
              <span className="text-primary font-semibold">
                Research.
              </span>{" "}
              Build.{" "}
              <span className="text-primary font-semibold">
                Listen.
              </span>{" "}
              Create. Repeat.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};