import {
  Globe,
  Heart,
  Mic,
  Users,
} from "lucide-react";

const impacts = [
  {
    icon: Heart,
    title: "Sound of the Future",
    category: "Founder & CEO",
    description:
      "Founded a youth-led nonprofit focused on hearing protection, safe listening practices, and amplifying Deaf and hard-of-hearing voices.",
    highlights: [
      "Expanded chapters across the US and globally",
      "Created educational outreach programs",
      "Supported hearing advocacy initiatives",
    ],
  },
  {
    icon: Users,
    title: "Community Leadership",
    category: "Mentorship & Service",
    description:
      "Built communities by mentoring younger students, organizing events, and creating opportunities for students to learn and collaborate.",
    highlights: [
      "Mentored middle school students",
      "Led student organizations",
      "Organized community events",
    ],
  },
  {
    icon: Globe,
    title: "Representation & Outreach",
    category: "Partnership Building",
    description:
      "Connected with schools, nonprofits, and community organizations to expand access to STEM, advocacy, and educational resources.",
    highlights: [
      "School/community programming",
      "Nonprofit partnerships",
      "Public outreach",
    ],
  },
  {
    icon: Mic,
    title: "Sharing Stories",
    category: "Communication",
    description:
      "Used media, photography, and digital storytelling to highlight overlooked voices and important experiences.",
    highlights: [
      "Podcast and social media content",
      "Photography projects",
      "Community storytelling",
    ],
  },
];

export const ImpactSection = () => {
  return (
    <section
      id="impact"
      className="relative py-28 px-4"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-label mb-4">
            05 — IMPACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Technology matters most
            <br />
            when it helps
            <span className="text-primary">
              {" "}people.
            </span>
          </h2>

          <p className="text-lg text-foreground/65">
            Beyond building technology, I care about creating communities,
            sharing knowledge, and making opportunities more accessible.
          </p>
        </div>


        {/* Main Feature Card */}
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 mb-10 pink-glow text-left">

          <div className="flex flex-col md:flex-row gap-10 items-center">

            <div className="flex-1">

              <p className="text-primary uppercase tracking-[0.2em] text-xs mb-4">
                Featured Initiative
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                Sound of the Future
              </h3>

              <p className="text-foreground/65 leading-relaxed mb-6">
                A youth-led nonprofit dedicated to hearing health education,
                prevention, and advocacy. Through educational programs,
                partnerships, and digital outreach, the organization works to
                make hearing protection more accessible.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Founder",
                  "Nonprofit Leadership",
                  "Education",
                  "Advocacy",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>


            <div className="w-full md:w-72 h-72 rounded-3xl bg-primary/10 flex items-center justify-center">

              <Heart
                size={100}
                className="text-primary opacity-70"
              />

            </div>

          </div>

        </div>


        {/* Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {impacts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass-card rounded-3xl p-8 text-left
                hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon size={24}/>
                </div>

                <p className="text-xs uppercase tracking-widest text-primary mb-2">
                  {item.category}
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-foreground/60 mb-5">
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.highlights.map((highlight)=>(
                    <li
                      key={highlight}
                      className="text-sm text-foreground/70 flex gap-2"
                    >
                      <span className="text-primary">
                        ✓
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};