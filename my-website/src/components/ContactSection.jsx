import {
  Mail,
  MapPin,
  Phone,
  Send,
  FileText,
  Code,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-28 px-4 relative"
    >

      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="section-label mb-4">
            08 — CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Let's create something
            <span className="text-primary">
              {" "}meaningful.
            </span>
          </h2>

          <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
            Whether it is research, engineering, technology, or community
            impact, I would love to connect and collaborate.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


          {/* Contact Information */}
          <div className="glass-card rounded-[2rem] p-8 text-left pink-glow">


            <h3 className="text-2xl font-bold mb-6">
              Get In Touch
            </h3>


            <p className="text-foreground/70 mb-8">
              I'm Catherine Lin — an AI researcher, engineer, founder,
              and photographer passionate about building technology
              that creates meaningful human impact.
            </p>



            <div className="space-y-6">


              {/* Email */}
              <div className="flex gap-4 items-center">

                <div className="p-3 rounded-xl bg-primary/10">
                  <Mail className="text-primary" />
                </div>


                <div>

                  <p className="text-sm text-foreground/50">
                    Email
                  </p>

                  <a
                    href="mailto:catlin464@hotmail.com"
                    className="hover:text-primary transition"
                  >
                    catlin464@hotmail.com
                  </a>

                </div>

              </div>




              {/* Phone */}
              <div className="flex gap-4 items-center">

                <div className="p-3 rounded-xl bg-primary/10">
                  <Phone className="text-primary" />
                </div>


                <div>

                  <p className="text-sm text-foreground/50">
                    Phone
                  </p>


                  <a
                    href="tel:4156903847"
                    className="hover:text-primary transition"
                  >
                    (415) 690-3847
                  </a>


                </div>

              </div>




              {/* Location */}
              <div className="flex gap-4 items-center">

                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="text-primary" />
                </div>


                <div>

                  <p className="text-sm text-foreground/50">
                    Location
                  </p>

                  <p>
                    Houston, Texas
                  </p>

                </div>

              </div>


            </div>




            {/* Social Buttons */}
            <div className="flex gap-4 mt-10">


              {/* LinkedIn */}
              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-lg">
                  in
                </span>
              </a>




              {/* Github */}
              <a
                href="https://github.com/Shinoaluv"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition"
                aria-label="Github"
              >
                <Code size={22}/>
              </a>




              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition"
                aria-label="Resume"
              >
                <FileText size={22}/>
              </a>


            </div>


          </div>





          {/* Message Form */}
          <div className="glass-card rounded-[2rem] p-8 pink-glow">


            <form className="space-y-5">


              <input
                type="text"
                placeholder="Your name"
                className="w-full px-5 py-4 rounded-xl bg-background border border-border"
              />



              <input
                type="email"
                placeholder="Your email"
                className="w-full px-5 py-4 rounded-xl bg-background border border-border"
              />



              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full px-5 py-4 rounded-xl bg-background border border-border"
              />



              <button
                type="submit"
                className="cosmic-button w-full flex justify-center items-center gap-2"
              >
                Send Message
                <Send size={18}/>
              </button>


            </form>


          </div>


        </div>


      </div>


    </section>
  );
};