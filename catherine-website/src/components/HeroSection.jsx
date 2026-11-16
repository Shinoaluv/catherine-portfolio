import { ArrowDown, ArrowRight, FileText } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24"
    >

      <div className="container mx-auto max-w-6xl relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


          {/* LEFT SIDE */}
          <div className="text-left space-y-7">


            <p className="section-label opacity-0 animate-fade-in">
              ENGINEERING • AI • HUMAN-CENTERED DESIGN
            </p>



            <div className="space-y-3">

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">

                Hi, I'm{" "}

                <span className="text-primary">
                  Catherine.
                </span>

              </h1>



              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 opacity-0 animate-fade-in-delay-2">

                I build technology around people.

              </h2>

            </div>




            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl opacity-0 animate-fade-in-delay-3">

              I'm a student researcher, engineer, founder, and photographer
              passionate about creating technology that bridges people,
              accessibility, and innovation.

            </p>





            {/* Identity Tags */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-3">

              {[
                "AI Research",
                "Robotics Engineering",
                "Sound of the Future",
                "Entrepreneurship",
                "Photography",
              ].map((item) => (

                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium pink-glow"
                >

                  {item}

                </span>

              ))}


            </div>





            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-3 opacity-0 animate-fade-in-delay-4">


              <a
                href="#projects"
                className="cosmic-button flex items-center gap-2"
              >

                Explore My Work

                <ArrowRight size={18}/>

              </a>




              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
              >

                <FileText size={18}/>

                View Résumé

              </a>



            </div>



          </div>









          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">


            <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px]">



              {/* Decorative Background */}

              <div className="absolute inset-6 rounded-[3rem] bg-primary/10 rotate-6" />

              <div className="absolute inset-6 rounded-[3rem] border border-primary/20 -rotate-3" />





              {/* Photo Card */}

              <div className="absolute inset-0 glass-card rounded-[3rem] overflow-hidden pink-glow">


                <img
                  src="/Catherine.png"
                  alt="Catherine Lin"
                  className="w-full h-full object-cover object-top"
                />


              </div>







              {/* Floating Label 1 */}

              <div className="absolute -left-8 top-16 glass-card rounded-xl px-4 py-3 pink-glow animate-float">

                <p className="text-xs text-foreground/60">
                  Research
                </p>

                <p className="font-semibold text-sm">
                  AI + HCI
                </p>

              </div>






              {/* Floating Label 2 */}

              <div className="absolute -right-7 bottom-24 glass-card rounded-xl px-4 py-3 pink-glow animate-float">


                <p className="text-xs text-foreground/60">
                  Building
                </p>


                <p className="font-semibold text-sm">
                  Robotics + AI
                </p>


              </div>






              {/* Floating Label 3 */}

              <div className="absolute -left-5 bottom-5 glass-card rounded-xl px-4 py-3 pink-glow">


                <p className="text-xs text-foreground/60">
                  Creating
                </p>


                <p className="font-semibold text-sm">
                  Advocacy + Impact
                </p>


              </div>





            </div>


          </div>




        </div>


      </div>





      {/* Scroll Indicator */}

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
      >

        <span className="text-xs uppercase tracking-widest">
          Explore
        </span>


        <ArrowDown
          size={20}
          className="animate-bounce"
        />

      </a>




    </section>
  );
};