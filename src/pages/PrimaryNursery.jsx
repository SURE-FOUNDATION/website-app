import { ASSETS } from "../constants/assets";
import { BookOpen, Music, Dumbbell, Bus } from "lucide-react";

const curricularSubjects = [
  "Mathematics", "English Language", "Science", "Social Studies",
  "Arts & Crafts", "Moral Education", "Computer Studies",
];

const extraCurricular = [
  { icon: <Dumbbell size={22} />, label: "Sports", desc: "Football, Basketball, Swimming and Athletics", color: "#4a0f3f" },
  { icon: <Music size={22} />, label: "Music & Drama", desc: "Choir, instrumental classes, and stage performances", color: "#6b1558" },
  { icon: <BookOpen size={22} />, label: "Art & Craft", desc: "Painting, drawing, and creative handwork", color: "#8c1a70" },
  { icon: <Bus size={22} />, label: "Field Trips", desc: "Educational excursions and community activities", color: "#F069B4" },
];

const PrimaryNursery = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.programPrimary}')` }}
      >
        <div className="absolute inset-0 bg-[rgba(4,9,30,0.7)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Early Years &amp; Primary
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Primary / Nursery School
          </h1>
          <div className="w-12 h-0.5 bg-[#F069B4] mx-auto mt-5" />
        </div>
      </div>

      {/* Content */}
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Curricular */}
          <div>
            <div className="mb-6">
              <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-2">Academics</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">Curricular Activities</h2>
              <div className="w-10 h-0.5 bg-[#F069B4] mt-3" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              We provide a well-structured curriculum that nurtures every child's intellectual and moral development,
              preparing them for higher levels of education.
            </p>
            <div className="flex flex-wrap gap-3">
              {curricularSubjects.map((subj, i) => (
                <span
                  key={subj}
                  className="px-5 py-2.5 text-sm font-semibold rounded-xl shadow-sm"
                  style={{
                    background: i % 2 === 0 ? "#4a0f3f" : "#fff",
                    color: i % 2 === 0 ? "#fff" : "#4a0f3f",
                    border: i % 2 !== 0 ? "1.5px solid #4a0f3f" : "none",
                  }}
                >
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
            <div className="grid sm:grid-cols-2 gap-5">
              {extraCurricular.map((item, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col bg-white">
                  <div className="h-1.5 w-full" style={{ background: item.color }} />
                  <div className="p-6 flex gap-4 items-start">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: item.color + "15" }}
                    >
                      <span style={{ color: item.color }}>{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#4a0f3f] text-base mb-1">{item.label}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
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

export default PrimaryNursery;
