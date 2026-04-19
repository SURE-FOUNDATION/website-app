import FounderDesk from "../components/FounderDesk";
import SectionH from "../components/SectionH";
import WhychooseUs from "../components/WhychooseUs";
import { ASSETS } from "../constants/assets";

const About = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero */}
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.aboutHero}')` }}
      >
        <div className="absolute inset-0 bg-[rgba(4,9,30,0.7)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            About Us
          </h1>
          <div className="w-12 h-0.5 bg-[#F069B4] mx-auto mt-5" />
        </div>
      </div>

      {/* Mission / Vision / Philosophy */}
      <section className="py-16 sm:py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">Our Core Values</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a0f3f]">
              Mission, Vision &amp; Philosophy
            </h2>
            <div className="w-10 h-0.5 bg-[#F069B4] mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "Our Mission",
                text: "To provide a structured, disciplined, and nurturing environment that equips every student with academic excellence, strong moral values, and the confidence to face the world.",
              },
              {
                label: "Our Vision",
                text: "To be the leading educational institution in Nigeria, producing well-rounded graduates who are academically sound, morally upright, and socially responsible.",
              },
              {
                label: "Our Philosophy",
                text: "We believe every child is born with unique potential. Our role is to discover, develop, and celebrate that potential in a joyful, supportive community.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#f8f5f8] border-l-4 border-[#4a0f3f] rounded-r-lg p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#4a0f3f] text-base mb-3">{item.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Desk */}
      <section className="py-16 sm:py-20 px-5 bg-[#f8f5f8]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">Leadership</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f] mb-3">From Our Founder's Desk</h2>
            <div className="w-10 h-0.5 bg-[#F069B4]" />
          </div>
          <FounderDesk />
        </div>
      </section>

      {/* Why Choose Us */}
      <WhychooseUs />

      {/* CTA */}
      <SectionH />
    </div>
  );
};

export default About;
