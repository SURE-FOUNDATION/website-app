import { ASSETS } from "../constants/assets";
import { Mic, FlaskConical, Trophy, Theater, Users } from "lucide-react";

const curricularSubjects = [
  "Mathematics", "English Language", "Physics", "Chemistry",
  "Biology", "Economics", "Literature in English",
  "Government", "Commerce", "Further Mathematics",
];

const extraCurricular = [
  { icon: <Mic size={18} />, label: "Debate Club", desc: "Builds public speaking, reasoning and argumentation skills" },
  { icon: <FlaskConical size={18} />, label: "Science &amp; Robotics Club", desc: "Hands-on STEM projects and competitions" },
  { icon: <Users size={18} />, label: "Music &amp; Dance", desc: "Choir, cultural dance, and talent showcases" },
  { icon: <Theater size={18} />, label: "Drama &amp; Theatre", desc: "Stage performances, writing and acting workshops" },
  { icon: <Trophy size={18} />, label: "Sports Competitions", desc: "Inter-school athletics, football and basketball leagues" },
];

const Secondary = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.programSecondary}')` }}
      >
        <div className="absolute inset-0 bg-[rgba(4,9,30,0.75)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Senior Education
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Secondary School
          </h1>
          <div className="w-12 h-0.5 bg-[#F069B4] mx-auto mt-5" />
        </div>
      </div>

      {/* Content */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Curricular */}
          <div>
            <div className="mb-6">
              <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-2">Academics</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">Curricular Activities</h2>
              <div className="w-10 h-0.5 bg-[#F069B4] mt-3" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our secondary school curriculum is designed to prepare students for national and international
              examinations including WAEC, NECO, and JAMB, building a strong academic foundation for higher education.
            </p>
            <div className="flex flex-wrap gap-3">
              {curricularSubjects.map((subj) => (
                <span key={subj} className="px-4 py-2 bg-[#f8f5f8] border border-[#4a0f3f]/20 text-[#4a0f3f] text-sm font-medium rounded-full">
                  {subj}
                </span>
              ))}
            </div>
          </div>

          {/* Extra-Curricular */}
          <div>
            <div className="mb-6">
              <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-2">Beyond the Classroom</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">Extra-Curricular Activities</h2>
              <div className="w-10 h-0.5 bg-[#F069B4] mt-3" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {extraCurricular.map((item, i) => (
                <div key={i} className="bg-[#f8f5f8] border-l-4 border-[#4a0f3f] rounded-r-lg p-5 shadow-sm flex gap-4 items-start">
                  <span className="text-[#F069B4] flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#4a0f3f] text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.label }} />
                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Secondary;
