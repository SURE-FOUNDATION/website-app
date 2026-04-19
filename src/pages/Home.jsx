import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ASSETS } from "../constants/assets";
import { BookOpen, Users, Award, Lightbulb, Monitor, Globe, ArrowRight, GraduationCap } from "lucide-react";

const heroSlides = [
  ASSETS.heroMain,
  ASSETS.heroSlider1,
  ASSETS.heroGallery1,
  ASSETS.heroGallery2,
  ASSETS.campus1,
];

const features = [
  {
    icon: <Users size={24} />,
    title: "Individual Focus",
    desc: "Every student receives dedicated attention, ensuring no learner is left behind in their academic journey.",
    color: "#4a0f3f",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Rigorous Curriculum",
    desc: "An intensive, well-structured programme that prepares students for national examinations and higher education.",
    color: "#6b1558",
  },
  {
    icon: <Award size={24} />,
    title: "Academic Excellence",
    desc: "A consistent track record of outstanding results driven by dedicated and well-trained staff.",
    color: "#8c1a70",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Critical Thinking",
    desc: "Students are trained to analyse, reason, and solve problems independently across all disciplines.",
    color: "#4a0f3f",
  },
  {
    icon: <Monitor size={24} />,
    title: "Modern Facilities",
    desc: "Well-equipped classrooms, science laboratories, and ICT infrastructure designed for effective learning.",
    color: "#6b1558",
  },
  {
    icon: <Globe size={24} />,
    title: "Extracurricular Development",
    desc: "Sports, arts, and clubs that build character, teamwork, and leadership beyond the classroom.",
    color: "#8c1a70",
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setFading(false);
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 600);
  };

  return (
    <main className="overflow-x-hidden">

      {/* ── Hero Slideshow ── */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-5 overflow-hidden">
        {heroSlides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url('${src}')`,
              opacity: i === current ? (fading ? 0 : 1) : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[#0d0210]/75" />
        <div className="relative z-10 max-w-2xl mx-auto w-full">
          <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-5">
            Sure Foundation Group of Schools
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-snug mb-5">
            High Academic &amp;<br />
            <span className="text-[#F069B4]">Moral Standards</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8">
            A structured and disciplined learning environment that equips students
            with the knowledge, values, and skills to excel.
          </p>
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto sm:max-w-none sm:flex-row sm:justify-center">
            <Link
              to="/admission"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 bg-[#4a0f3f] border border-[#F069B4] text-white text-sm font-semibold rounded-md hover:bg-[#F069B4] transition-all duration-300 min-h-[52px]"
            >
              Apply for Admission <ArrowRight size={15} />
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 border border-white/50 text-white text-sm font-semibold rounded-md hover:border-white hover:bg-white/5 transition-all duration-300 min-h-[52px]"
            >
              About Our School
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-[#F069B4]"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── About / Welcome ── */}
      <section className="py-16 sm:py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">About Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a0f3f] leading-snug mb-4">
                Welcome to Sure Foundation Group of Schools
              </h2>
              <div className="w-10 h-0.5 bg-[#F069B4] mb-5" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                We are a thriving educational community serving students whose parents and
                guardians have chosen us for our well-trained staff, rigorous curriculum, and
                a stimulating, structured learning environment.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Situated in Port Harcourt, Nigeria, our school is committed to building
                students of strong academic foundation, sound moral character, and readiness
                for the challenges of higher education and life.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#4a0f3f] text-[#4a0f3f] text-sm font-semibold rounded-md hover:bg-[#4a0f3f] hover:text-white transition-all duration-300 min-h-[48px]"
              >
                Read More About Us <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <img
                src={ASSETS.programSecondary}
                alt="Secondary School"
                className="w-full h-52 sm:h-64 object-cover rounded-xl"
              />
              <div className="grid grid-cols-2 gap-3">
                <img
                  src={ASSETS.featureAcademicExcellence}
                  alt="Academic"
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
                <img
                  src={ASSETS.facilities1}
                  alt="Facilities"
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 sm:py-20 px-5 bg-[#f8f5f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4a0f3f] mb-3">
              Learning Is Just the Beginning
            </h2>
            <div className="w-10 h-0.5 bg-[#F069B4] mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="h-1.5 w-full" style={{ background: f.color }} />
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{ background: f.color + "15" }}
                  >
                    <span style={{ color: f.color }}>{f.icon}</span>
                  </div>
                  <h3 className="font-bold text-[#4a0f3f] text-base mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="relative w-full py-20 sm:py-24 px-5 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.80), rgba(4, 9, 30, 0.80)), url('${ASSETS.ctaBg}')`,
        }}
      >
        <div className="relative z-10 max-w-2xl mx-auto w-full text-center">
          <GraduationCap size={40} className="text-[#F069B4] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
            Shaping Futures, One Student at a Time
          </h2>
          <div className="w-10 h-0.5 bg-[#F069B4] mx-auto mb-5" />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-9">
            A school that empowers its students to excel in any endeavour and to find their
            own voice — academically, morally, and socially.
          </p>
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto sm:max-w-none sm:flex-row sm:justify-center">
            <Link
              to="/admission"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 bg-[#4a0f3f] border border-[#F069B4] text-white text-sm font-semibold rounded-md hover:bg-[#F069B4] transition-all duration-300 min-h-[52px]"
            >
              Apply for Admission <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center w-full sm:w-auto px-7 py-4 border border-white/50 text-white text-sm font-semibold rounded-md hover:border-white hover:bg-white/5 transition-all duration-300 min-h-[52px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
