import { ASSETS } from "../constants/assets";
import { MapPin } from "lucide-react";

const Campus = () => {
  const campuses = [
    {
      image: ASSETS.campus1,
      number: "01",
      title: "Abel Jumbo Campus",
      subtitle: "Nursery & Primary",
      desc: "Our original campus, serving nursery and primary students in a warm, structured environment.",
      color: "#4a0f3f",
    },
    {
      image: ASSETS.campus2,
      number: "02",
      title: "Ada George Campus",
      subtitle: "Secondary School",
      desc: "Our expanded campus, housing our secondary school and providing modern facilities for learning.",
      color: "#F069B4",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.campusHero}')` }}
      >
        <div className="absolute inset-0 bg-[rgba(4,9,30,0.7)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Where We Are
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Our Campuses
          </h1>
          <div className="w-12 h-0.5 bg-[#F069B4] mx-auto mt-5" />
        </div>
      </div>

      {/* Campus Cards */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">Our Locations</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">Explore Our Campuses</h2>
            <div className="w-10 h-0.5 bg-[#F069B4] mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            {campuses.map((campus, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image with overlay */}
                <div className="relative overflow-hidden h-60 sm:h-72">
                  <img
                    src={campus.image}
                    alt={campus.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Campus number badge */}
                  <div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                    style={{ background: campus.color }}
                  >
                    {campus.number}
                  </div>
                  {/* Bottom label on image */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-1"
                      style={{ background: campus.color }}
                    >
                      {campus.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white px-6 py-5 flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <MapPin size={18} style={{ color: campus.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4a0f3f] text-base mb-1">Sure Foundation — {campus.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{campus.desc}</p>
                  </div>
                </div>
                <div className="h-1 w-full" style={{ background: campus.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;
