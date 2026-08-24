import {
  Brain,
  Camera,
  Heart,
  Wrench,
  ArrowRight,
} from "lucide-react";


const areas = [

  {
    icon: Brain,
    title: "Research",
    subtitle: "AI + Human-Centered Technology",
    description:
      "Explore my research on artificial intelligence, human-computer interaction, and technology designed around people.",
    href:"#research",
  },


  {
    icon: Wrench,
    title:"Engineering",
    subtitle:"Robotics + Prototyping",
    description:
      "Discover my engineering journey through robotics, design, iteration, and hands-on problem solving.",
    href:"#work",
  },


  {
    icon:Heart,
    title:"Impact",
    subtitle:"Advocacy + Community",
    description:
      "Learn about Sound of the Future, nonprofit leadership, education, and community outreach.",
    href:"#impact",
  },


  {
    icon:Camera,
    title:"Storytelling",
    subtitle:"Photography + Creativity",
    description:
      "Explore photography and visual storytelling projects that capture people and experiences.",
    href:"#photography",
  },

];


export const SkillsSection =()=>{

return (

<section
id="explore"
className="py-28 px-4"
>

<div className="container mx-auto max-w-6xl">


<div className="text-center max-w-3xl mx-auto mb-16">

<p className="section-label mb-4">
02 — EXPLORE MY WORLD
</p>


<h2 className="text-4xl md:text-5xl font-bold mb-5">

Different interests.

<br/>

<span className="text-primary">
One way of thinking.
</span>

</h2>


<p className="text-foreground/65 text-lg">
Research, engineering, advocacy, and creativity come together through the way I approach problems.
</p>


</div>



<div className="grid grid-cols-1 md:grid-cols-2 gap-6">


{areas.map((area)=>{

const Icon=area.icon;


return(

<a
key={area.title}
href={area.href}
className="glass-card rounded-[2rem] p-8 text-left hover:-translate-y-2 transition-all duration-300 pink-glow group"
>


<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition">

<Icon size={26}/>

</div>


<p className="text-primary text-xs uppercase tracking-widest mb-3">
{area.subtitle}
</p>


<h3 className="text-3xl font-bold mb-4">
{area.title}
</h3>


<p className="text-foreground/60 mb-6">
{area.description}
</p>


<div className="flex items-center gap-2 text-primary font-semibold">

Explore

<ArrowRight
size={18}
className="group-hover:translate-x-2 transition"
/>

</div>


</a>

)

})}


</div>


</div>

</section>

);

};