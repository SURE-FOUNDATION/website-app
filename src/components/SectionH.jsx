import { Link } from "react-router-dom";
import { ASSETS } from "../constants/assets";

const SectionH = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center w-full h-[80vh] bg-cover bg-center bg-fixed px-12"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('${ASSETS.ctaBg}')`,
      }}
    >
      <h3 className="text-white text-2xl font-bold capitalize mb-4 font-raleway">
        Sure Foundation Group Of Schools
      </h3>

      <p className="text-white text-lg font-medium leading-8 mb-6 font-raleway">
        A School that empowers its students to excel in any endeavor and <br /> to
        find their own voice.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/about"
          className="px-5 py-2 bg-[#4a0f3f] text-[#F069B4] font-semibold rounded-md transition-all duration-300 hover:text-[#4a0f3f] hover:bg-[#F069B4]"
        >
          Visit
        </Link>
        <Link
          to="/contact"
          className="px-7 py-3 bg-[#4a0f3f] text-white font-semibold text-lg rounded-md transition-all duration-300 hover:text-[#4a0f3f] hover:bg-white"
        >
          Contact Us
        </Link>
        <Link
          to="/admission"
          className="px-5 py-2 bg-[#4a0f3f] text-[#F069B4] font-semibold rounded-md transition-all duration-300 hover:text-[#4a0f3f] hover:bg-[#F069B4]"
        >
          Apply
        </Link>
      </div>
    </section>
  );
};

export default SectionH;

