import Section from "../components/Section";
import SectionH from "../components/SectionH";
import SectionT from "../components/SectionT";
import { Link } from "react-router-dom";
import { ASSETS } from "../constants/assets";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Background */}
      <div
        className="relative min-h-screen w-full bg-cover bg-center before:absolute before:inset-0 before:bg-[rgba(4,9,30,0.7)] flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url('${ASSETS.heroMain}')` }}
      >
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold">
          HIGH ACADEMIC AND MORAL STANDARDS
        </h1>
        <p className="relative z-10 text-white text-2xl md:text-3xl font-medium mt-9">
          Serene and well-structured environment to enable academic excellence.
        </p>

        <Link to="/admission" className="relative z-10 px-6 py-3 mt-20 text-white bg-[#4a0f3f] border border-[#F069B4] rounded-md hover:bg-[#F069B4] hover:text-white transition">
          Apply now
        </Link>
      </div>

      {/* Section Component - Write-up First, Then Images */}
      <Section
        className="mb-5" 
        title="Welcome to Sure Foundation Group Of Schools"
        images={[
          { src: ASSETS.programEarlyYears, alt: "Early Years", caption: "Early Years" },
          { src: ASSETS.programPrimary, alt: "Primary School", caption: "The Primary School" },
          { src: ASSETS.programSecondary, alt: "Secondary School", caption: "The Secondary School" }
        ]}
      >
        {/* Write-up Section */}
        <div className="flex justify-center items-center min-h-[20vh] text-center">
          <p className="max-w-2xl text-lg mb-5 text-black">
            We are a thriving educational community of students whose parents and guardians have made a
            decision for their children/wards to study here for specific reasons: well-trained staff, intensive
            curriculum, and a stimulating learning environment.
          </p>
        </div>
      </Section>


      <SectionT
        className="mb-5"
        title="Learning Is Just The Beginning"
        images={[
          { src: ASSETS.featureIndividualFocus, alt: "Individual Focus", caption: "Individual Focus" },
          { src: ASSETS.featureLearningCommunities, alt: "Learning Communities", caption: "Learning Communities" },
          { src: ASSETS.featureAcademicExcellence, alt: "Academic Excellence", caption: "Academic Excellence" },
          { src: ASSETS.featureCreativeThinking, alt: "Creative Thinking", caption: "Creative Thinking" },
          { src: ASSETS.facilities1, alt: "State of the Art Facilities", caption: "State of the Art Facilities" },
          { src: ASSETS.featureExtracurricular, alt: "Extra Curricular Activities", caption: "Extra Curricular Activities" }
        ]}
      >
        {/* Write-up Section */}
        <div className="flex justify-center items-center min-h-[20vh] text-center">
          <p className="max-w-2xl mb-5 mt-5 text-lg text-black">
            We are a thriving educational community of students whose parents and guardians have made a
            decision for their children/wards to study here for specific reasons: well-trained staff, intensive
            curriculum, and a stimulating learning environment.
          </p>
        </div>
      </SectionT>

      {/* Another Hero Section (If Needed) */}
      <SectionH />

    </div>
  );
};

export default HomePage;
