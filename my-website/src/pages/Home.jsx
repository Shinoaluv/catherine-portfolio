import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { PortfolioBackground } from "../components/PortfolioBackground";
import { ProjectsSection } from "../components/ProjectsSection";
import { ResearchSection } from "../components/ResearchSection";
import { SkillsSection } from "../components/SkillsSection";
import { ImpactSection } from "../components/ImpactSection";
import { PhotographySection } from "../components/PhotographySection";
import { AwardsSection } from "../components/AwardsSection";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Dark / Light Mode Toggle */}
      <ThemeToggle />

      {/* Custom Background */}
      <PortfolioBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio Content */}
      <main>

        {/* Introduction */}
        <HeroSection />

        {/* Personal Story + Philosophy */}
        <AboutSection />

        {/* Four Main Areas */}
        <SkillsSection />

        {/* Featured Projects */}
        <ProjectsSection />

        {/* Research Experience */}
        <ResearchSection />

        {/* Leadership + Community Impact */}
        <ImpactSection />

        {/* Photography + Creative Work */}
        <PhotographySection />

        {/* Awards + Achievements */}
        <AwardsSection />

        {/* Contact */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};