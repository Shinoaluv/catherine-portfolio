import {
  ArrowRight,
  Brain,
  Heart,
  Utensils,
  Wrench,
} from "lucide-react";


const projects=[

{
title:"Sound of the Future",
category:"FOUNDER • HEARING HEALTH • IMPACT",
description:
"A youth-led nonprofit focused on hearing protection, education, and amplifying Deaf and hard-of-hearing voices.",
stat:"Nonprofit Founder",
icon:Heart,
link:"#impact",
},


{
title:"AI × Asian Restaurant Technology",
category:"AI • HCI • ACCESSIBILITY",
description:
"Researching and designing technology that helps immigrant restaurant owners overcome language barriers and operational challenges.",
stat:"Research → Prototype",
icon:Utensils,
link:"#research",
},


{
title:"AI & Computer Science Careers",
category:"AI • RESEARCH",
description:
"Exploring how artificial intelligence changes programming careers, workforce expectations, and future skills.",
stat:"Academic Research",
icon:Brain,
link:"#research",
},


{
title:"VEX Robotics",
category:"ENGINEERING • ROBOTICS",
description:
"Competitive robotics involving design, building, scouting, strategy, and team leadership.",
stat:"4× Worlds",
icon:Wrench,
link:"#work",
},


];


export const ProjectsSection=()=>{


return(

<section
id="work"
className="py-28 px-4"
>


<div className="container mx-auto max-w-6xl">


<div className="text-center mb-16">

<p className="section-label mb-4">
03 — FEATURED WORK
</p>


<h2 className="text-4xl md:text-5xl font-bold">

Ideas become

<span className="text-primary">
{" "}impact.
</span>

</h2>

</div>



<div className="grid grid-cols-1 md:grid-cols-2 gap-6">


{projects.map((project)=>{

const Icon=project.icon;


return(

<a
key={project.title}
href={project.link}
className="glass-card rounded-[2rem] p-8 text-left hover:-translate-y-2 transition-all duration-300 pink-glow group"
>


<div className="flex justify-between mb-6">


<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">

<Icon size={26}/>

</div>


<p className="text-primary font-bold">
{project.stat}
</p>


</div>



<p className="text-primary text-xs tracking-widest uppercase mb-3">
{project.category}
</p>


<h3 className="text-3xl font-bold mb-4">
{project.title}
</h3>


<p className="text-foreground/60 mb-6">
{project.description}
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

)

}