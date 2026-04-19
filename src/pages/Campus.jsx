import { ASSETS } from "../constants/assets";

const Campus = () => {
  const campuses = [
    {
      image: ASSETS.campus1,
      title: "Sure Foundation — Abel Jumbo Campus",
      desc: "Our original campus, serving nursery and primary students in a warm, structured environment.",
    },
    {
      image: ASSETS.campus2,
      title: "Sure Foundation — Ada George Campus",
      desc: "Our expanded campus, housing our secondary school and providing modern facilities for learning.",
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
          <div className="text-center mb-12">
            <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">Our Locations</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">Explore Our Campuses</h2>
            <div className="w-10 h-0.5 bg-[#F069B4] mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {campuses.map((campus, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-[#f8f5f8]"
              >
                <img
                  src={campus.image}
                  alt={campus.title}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-5 border-l-4 border-[#4a0f3f]">
                  <h3 className="font-bold text-[#4a0f3f] text-base mb-2">{campus.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{campus.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;
