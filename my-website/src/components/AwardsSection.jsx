import {
  Award,
  Cpu,
  FlaskConical,
  GraduationCap,
  Trophy,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    category: "VEX Robotics",
    title: "Engineering & Competition",
    stats: [
      "4× VEX World Championship Qualifications",
      "25+ Tournament Championships",
      "10+ Excellence Awards",
      "15+ Robot Skills Championships",
    ],
  },
  {
    icon: Cpu,
    category: "Technology Student Association",
    title: "Engineering Design & Innovation",
    stats: [
      "Multiple 1st Place Texas State Awards",
      "Unique to Texas Engineering Events",
      "Data Science & Presentation Awards",
      "TSA Lonestar & Texan Degrees",
    ],
  },
  {
    icon: FlaskConical,
    category: "Science Olympiad",
    title: "Scientific Problem Solving",
    stats: [
      "Texas State Tournament Competitor",
      "2nd Place Tower — Texas State",
      "7th Place Bungee Drop — National Invitational",
      "20+ Competition Medals",
    ],
  },
  {
    icon: GraduationCap,
    category: "Academic Recognition",
    title: "Academic Achievement",
    stats: [
      "ACT 36 Composite",
      "Top-ranked student at Bridgeland High School",
      "AP Scholar with Distinction",
      "USACO Bronze Division",
    ],
  },
];

export const AwardsSection = () => {
  return (
    <section
      id="awards"
      className="relative py-28 px-4"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <p className="section-label mb-4">
            07 — ACHIEVEMENTS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Recognition for
            <span className="text-primary">
              {" "}building and learning.
            </span>
          </h2>

          <p className="text-lg text-foreground/65">
            Awards are not just milestones — they represent years of
            experimentation, teamwork, iteration, and growth.
          </p>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.category}
                className="glass-card rounded-[2rem] p-8 text-left
                hover:-translate-y-2 transition-all duration-300 pink-glow"
              >

                <div
                  className="w-14 h-14 rounded-2xl bg-primary/10
                  flex items-center justify-center mb-6"
                >
                  <Icon size={28}/>
                </div>


                <p className="text-primary text-sm uppercase tracking-[0.18em] mb-2">
                  {item.category}
                </p>


                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>


                <ul className="space-y-3">
                  {item.stats.map((stat) => (
                    <li
                      key={stat}
                      className="flex gap-3 text-foreground/70"
                    >
                      <span className="text-primary">
                        ✦
                      </span>

                      {stat}
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