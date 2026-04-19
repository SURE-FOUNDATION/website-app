import { Link } from "react-router-dom";
import { ASSETS } from "../constants/assets";
import { ArrowRight, GraduationCap } from "lucide-react";

const SectionH = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center w-full py-20 sm:py-24 px-5 bg-cover bg-center bg-fixed overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.78), rgba(4, 9, 30, 0.78)), url('${ASSETS.ctaBg}')`,
      }}
    >
      <GraduationCap size={40} className="text-[#F069B4] mb-5" />

      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-2xl leading-snug">
        Sure Foundation Group Of Schools
      </h2>

      <div className="w-10 h-0.5 bg-[#F069B4] mb-5" />

      <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
        A school that empowers its students to excel in any endeavour and to find their own voice — academically, morally, and socially.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          to="/admission"
          className="flex items-center justify-center gap-2 px-7 py-4 bg-[#4a0f3f] border border-[#F069B4] text-white text-sm font-semibold rounded-xl hover:bg-[#F069B4] transition-all duration-300 min-h-[52px] min-w-[160px]"
        >
          Apply Now <ArrowRight size={14} />
        </Link>
        <Link
          to="/about"
          className="flex items-center justify-center gap-2 px-7 py-4 border border-white/40 text-white text-sm font-semibold rounded-xl hover:border-white hover:bg-white/5 transition-all duration-300 min-h-[52px] min-w-[160px]"
        >
          Learn More
        </Link>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 min-h-[52px] min-w-[160px]"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default SectionH;
