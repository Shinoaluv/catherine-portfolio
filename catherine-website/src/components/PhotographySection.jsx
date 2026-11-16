import { Camera, ExternalLink } from "lucide-react";

const photos = [
  {
    id: 1,
    title: "Portrait Photography",
    category: "Photography",
    description:
      "Capturing individual stories through portraits, expressions, and personal moments.",
    image: "/PP.jpg",
  },

  {
    id: 2,
    title: "Community Stories",
    category: "Photography",
    description:
      "Documenting people, events, and experiences that bring communities together.",
    image: "/CS.JPG",
  },

  {
    id: 3,
    title: "Everyday Moments",
    category: "Photography",
    description:
      "Finding creativity in ordinary environments, cities, and natural spaces.",
    image: "/EM.JPG",
  },
];


export const PhotographySection = () => {
  return (
    <section
      id="creative"
      className="py-28 px-4 relative"
    >

      <div className="container mx-auto max-w-6xl">


        {/* Header */}
        <div className="text-center mb-16">

          <p className="section-label mb-4">
            07 — CREATIVE
          </p>


          <h2 className="text-4xl md:text-5xl font-bold mb-5">

            Seeing the world

            <span className="text-primary">
              {" "}through a different lens.
            </span>

          </h2>


          <p className="text-lg text-foreground/65 max-w-2xl mx-auto">

            Photography has been a way for me to slow down,
            observe details, and tell stories that might
            otherwise go unnoticed.

          </p>

        </div>




        {/* Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


          {photos.map((photo) => (

            <div
              key={photo.id}
              className="group glass-card rounded-[2rem] overflow-hidden pink-glow card-hover"
            >


              {/* Image */}
              <div className="h-72 overflow-hidden bg-card">

                <img
                  src={photo.image}
                  alt={photo.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>





              {/* Text */}
              <div className="p-6 text-left">


                <div className="flex items-center gap-2 mb-3">

                  <Camera
                    size={18}
                    className="text-primary"
                  />

                  <span className="text-primary text-sm font-medium">
                    {photo.category}
                  </span>

                </div>




                <h3 className="text-xl font-bold mb-3">

                  {photo.title}

                </h3>



                <p className="text-foreground/65 text-sm leading-relaxed">

                  {photo.description}

                </p>


              </div>


            </div>

          ))}


        </div>





        {/* VSCO Button */}
        <div className="text-center mt-12">


          <a
            href="https://vsco.co/catherines-digis/gallery"
            target="_blank"
            rel="noreferrer"
            className="
              px-6
              py-3
              rounded-full
              border
              border-primary
              text-primary
              font-medium
              hover:bg-primary/10
              transition-all
              duration-300
              inline-flex
              items-center
              gap-2
            "
          >

            View Full Gallery

            <ExternalLink size={16}/>

          </a>


        </div>



      </div>


    </section>
  );
};