import FounderDesk from "../components/FounderDesk";
import SectionH from "../components/SectionH";
import WhychooseUs from "../components/WhychooseUs";
import { ASSETS } from "../constants/assets";
import { Target, Eye, Lightbulb } from "lucide-react";

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
      <section className="py-16 sm:py-24 px-5 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">Our Core Values</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a0f3f]">
              Mission, Vision &amp; Philosophy
            </h2>
            <div className="w-10 h-0.5 bg-[#F069B4] mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                label: "Our Mission",
                number: "01",
                Icon: Target,
                text: "To provide a structured, disciplined, and nurturing environment that equips every student with academic excellence, strong moral values, and the confidence to face the world.",
                accent: "#4a0f3f",
                light: "#f3eaf3",
              },
              {
                label: "Our Vision",
                number: "02",
                Icon: Eye,
                text: "To be the leading educational institution in Nigeria, producing well-rounded graduates who are academically sound, morally upright, and socially responsible.",
                accent: "#7a1a6a",
                light: "#faeaf6",
              },
              {
                label: "Our Philosophy",
                number: "03",
                Icon: Lightbulb,
                text: "We believe every child is born with unique potential. Our role is to discover, develop, and celebrate that potential in a joyful, supportive community.",
                accent: "#F069B4",
                light: "#fff0f8",
              },
            ].map(({ label, number, Icon, text, accent, light }) => (
              <div
                key={label}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
                style={{ background: "#fff" }}
              >
                {/* Header block */}
                <div
                  className="relative flex flex-col items-start px-7 pt-8 pb-14"
                  style={{ background: accent }}
                >
                  {/* Decorative large number */}
                  <span
                    className="absolute right-4 top-3 text-[7rem] font-black leading-none select-none pointer-events-none"
                    style={{ color: "rgba(255,255,255,0.08)" }}
                  >
                    {number}
                  </span>
                  {/* Icon circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <Icon size={28} color="#fff" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-white font-bold text-lg tracking-wide">{label}</h3>
                </div>

                {/* Wave connector */}
                <div className="relative -mt-6">
                  <svg viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ display: "block" }}>
                    <path d="M0,0 Q100,40 200,20 Q300,0 400,30 L400,0 Z" fill={accent} />
                    <rect x="0" y="0" width="400" height="1" fill={accent} />
                  </svg>
                </div>

                {/* Body */}
                <div className="px-7 pb-8 pt-3" style={{ background: "#fff" }}>
                  <p className="text-gray-600 text-sm leading-7">{text}</p>
                  {/* Accent bar at bottom */}
                  <div className="mt-6 h-1 rounded-full w-12" style={{ background: accent }} />
                </div>
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
