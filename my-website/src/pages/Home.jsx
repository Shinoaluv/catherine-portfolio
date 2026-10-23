import { useState } from 'react';
import { ArrowUpRight, Menu, X, Moon, Sun, ArrowDown, Bot, FlaskConical, Heart, Camera, Calculator, Code, GraduationCap, Rocket, Users, Megaphone, Sparkles } from 'lucide-react';
import { sections } from '../resumeData';
import { EvidenceLinks } from '../components/EvidenceLinks';

const navigation = [['Education', 'education'], ...sections.map(s => [s.title === 'Extracurricular activities' ? 'Activities' : s.title === 'Independent projects' ? 'Projects' : s.title === 'Work experience' ? 'Experience' : s.title === 'Community service' ? 'Service' : s.title, s.id]), ['Honors', 'honors'], ['Skills', 'skills']];
const honors = [
  ['VEX Robotics', [
    'Space City Signature Event Tournament Finalist — #2/75 (2025); Signature Event Think Award (2025).',
    'Robot Rodeo Signature Event Tournament Finalist — #1/90 teams (2026).',
    'Texas Region 3 Tournament Champion and Robot Skills Champion (2024); 2× Texas Region 3 Amaze Award (2025, 2026).',
    'CREATE U.S. Open Tournament Champion and Robot Skills Champion (2024).',
    '25+ local Tournament Championships, 10+ Excellence Awards, and 15+ Skills Championships (2024–2026).',
  ]],
  ['Technology Student Association', [
    '3× Texas State 1st Place, Mechanical Engineering: working drawings with a pictorial view; pictorial views of 6–12 parts; pictorial views of 2–5 parts (2024).',
    'Texas State 1st Place, Finish Model of a Residential Structure not listed; 5th Place, Photography — People / Portrait (2026).',
    'TSA Lonestar Degree & Texan Degree (2025).',
    'Regional 1st Place in the same three Mechanical Engineering categories (2024).',
    'Regional 1st Place, Data Science and Analytics; 3rd Place, Senior Solar Sprint (2025).',
    'Regional 1st Place, Finish Model of a Residential Structure not listed, Prepared Presentation, and Photography — People / Portrait; 3rd Place, Photography — People / Children (2026).',
  ]],
  ['Science Olympiad', [
    '2nd Place, Tower — Texas State Tournament, among 50 teams (2025).',
    '7th Place, Bungee Drop — Golden Gate Invitational, among 70 teams (2026).',
    '5 regional placements, 8 district placements, and 15 local placements across events (2024–2026).',
  ]],
  ['Additional recognition', [
    'USACO Bronze Division (2025).',
    'College Board AP Scholar with Distinction (2025, 2026).',
    'Invitation to become a columnist at Southern News Group (2026).',
  ]],
];
function ThemeControl() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark'; } catch { return false; }
  });
  document.documentElement.classList.toggle('dark', dark);
  function toggle() {
    setDark(!dark);
    try { localStorage.setItem('theme', dark ? 'light' : 'dark'); } catch { /* Theme works without storage. */ }
  }
  return <button className="icon-button" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggle}>{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>;
}
const activityIcons = {
  'VEX Robotics': Bot, 'Science Olympiad': FlaskConical,
  'Technology Student Association': Megaphone, 'Key Club': Heart,
  'Math UIL': Calculator, 'Rice Elite Tech Camp': GraduationCap,
  'Code 2 College': Code, 'Pioneer Academics Alumni & Social Media Committee': Users,
  'Freelance photography': Camera, 'DoubleS': Rocket,
};
function ResumeSection({ section }) {
  return <section id={section.id} className={`resume-section page-width ${`section-${section.id} ${section.id === 'activities' ? 'activities-section' : ''}`}`}>
    <div className="section-heading"><span className="section-symbol" aria-hidden="true">{section.id === 'research' ? <FlaskConical size={22}/> : section.id === 'projects' ? <Rocket size={22}/> : section.id === 'activities' ? <Sparkles size={22}/> : section.id === 'experience' ? <Code size={22}/> : <Heart size={22}/>}</span><h2>{section.title}</h2><p>{section.intro}</p></div>
    <div className="entries">{section.items.map(item => {
      const Icon = activityIcons[item.title] || Sparkles;
      return <article className="entry" key={item.title}>
      {section.id === 'activities' && <span className="activity-icon" aria-hidden="true"><Icon size={23}/></span>}
      <div className="entry-meta"><p>{item.role}</p><span>{item.date}</span></div>
      <h3>{item.title}</h3>
      <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
      <EvidenceLinks entry={item.title}/>
      {item.title === 'Freelance photography' && <a className="text-link" href="https://vsco.co/catherines-digis/gallery" target="_blank" rel="noreferrer">View photography portfolio <ArrowUpRight size={16}/></a>}
    </article>; })}</div>
  </section>;
}
export const Home = () => {
  const [open, setOpen] = useState(false);
  return <div className="resume-site">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="nav-wrap page-width">
      <a href="#home" className="wordmark" onClick={() => setOpen(false)}>Catherine Lin<span>.</span></a>
      <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <div className="nav-actions"><ThemeControl/><a className="resume-link" href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={15}/></a><button className="icon-button mobile-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>
    </div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[...navigation,['Contact','contact']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>}</header>
    <main id="main">
      <section id="home" className="hero page-width">
        <div className="hero-copy"><p className="intro-label">Research · Engineering · Community</p><h1>Hi, I’m Catherine<span>.</span></h1><p className="hero-statement">Exploring AI.<br/>Building with purpose.</p><p className="hero-description">I’m a student at Bridgeland High School researching how AI reshapes work and human communication. Beyond research, I lead robotics teams, build ventures, advocate for hearing health, and tell stories through photography.</p><div className="interest-tags"><span><FlaskConical size={14}/>AI & HCI</span><span><Bot size={14}/>Robotics</span><span><Heart size={14}/>Community</span><span><Camera size={14}/>Photography</span></div><div className="hero-actions"><a className="primary-link" href="#research">Explore my research <ArrowDown size={17}/></a><a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">Read my résumé <ArrowUpRight size={17}/></a></div></div>
        <figure className="portrait"><img src="/Catherine.png" alt="Catherine Lin" fetchPriority="high"/><figcaption>Catherine Lin <span>Cypress, Texas</span></figcaption></figure>
      </section>
      <section id="education" className="resume-section education page-width"><div className="section-heading"><span className="section-symbol" aria-hidden="true"><GraduationCap size={22}/></span><h2>Education</h2><p>A foundation in science, engineering, and research.</p></div><div className="entries"><article className="entry"><div className="entry-meta"><p>Cypress, Texas</p><span>CEEB 440281</span></div><h3>Bridgeland High School</h3><dl className="academic-grid"><div><dt>Cumulative GPA</dt><dd>6.8298 <small>/ 7</small></dd></div><div><dt>Unweighted GPA</dt><dd>3.9556 <small>/ 4</small></dd></div><div><dt>Class rank</dt><dd>29 <small>/ 887</small></dd></div><div><dt>ACT composite</dt><dd>36</dd></div></dl><p className="academic-note">ACT: English 35 · Math 36 · Reading 36</p><EvidenceLinks entry="Bridgeland High School"/></article></div></section>
      {sections.map(section => <ResumeSection key={section.id} section={section}/>)}
      <section id="honors" className="resume-section page-width"><div className="section-heading"><span className="section-symbol" aria-hidden="true"><Sparkles size={22}/></span><h2>Honors & awards</h2><p>Recognition across robotics, engineering, science, and creative work.</p><a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-link">Full résumé <ArrowUpRight size={16}/></a></div><div className="entries">{honors.map(([title,items]) => <article className="entry" key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul><EvidenceLinks entry={`Honors: ${title}`}/></article>)}</div></section>
      <section id="skills" className="resume-section page-width"><div className="section-heading"><span className="section-symbol" aria-hidden="true"><Code size={22}/></span><h2>Skills</h2><p>The languages and tools behind my work.</p></div><dl className="skill-list"><div><dt>Languages</dt><dd>English (native) · Mandarin Chinese (native)<EvidenceLinks entry="Skills: Languages"/></dd></div><div><dt>Programming</dt><dd>Python · Java · C++ · OpenAI API integration<EvidenceLinks entry="Skills: Programming"/></dd></div><div><dt>Engineering & design</dt><dd>Autodesk Inventor · Fusion 360 · AutoCAD · Prompt engineering<EvidenceLinks entry="Skills: Engineering & design"/></dd></div></dl></section>
      <section className="photo-section page-width" aria-labelledby="photo-heading"><div className="photo-heading"><div><p className="intro-label">A creative practice since 2021</p><h2 id="photo-heading">Behind the lens.</h2></div><a className="text-link" href="https://vsco.co/catherines-digis/gallery" target="_blank" rel="noreferrer">Explore my VSCO <ArrowUpRight size={17}/></a></div><div className="photo-grid">{[['/PP.jpg','Portrait photography'],['/CS.JPG','Community stories'],['/EM.JPG','Everyday moments']].map(([src,alt]) => <figure key={src}><img src={src} alt={alt} loading="lazy"/><figcaption>{alt}</figcaption></figure>)}</div></section>
      <section id="contact" className="contact-section page-width"><p className="intro-label">Research, collaboration & conversation</p><h2>Let’s connect.</h2><a className="contact-email" href="mailto:Catlin464@hotmail.com">Catlin464@hotmail.com <ArrowUpRight/></a><div className="contact-links"><a href="https://github.com/Shinoaluv" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a><a href="https://vsco.co/catherines-digis/gallery" target="_blank" rel="noreferrer">VSCO <ArrowUpRight size={16}/></a><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={16}/></a></div></section>
    </main><footer className="site-footer page-width"><span>© {new Date().getFullYear()} Catherine Lin</span><a href="#home">Back to top ↑</a></footer>
  </div>;
};
