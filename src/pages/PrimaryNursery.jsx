import { ASSETS } from "../constants/assets";
import { BookOpen, Music, Dumbbell, Bus } from "lucide-react";

const curricularSubjects = [
  "Mathematics", "English Language", "Science", "Social Studies",
  "Arts & Crafts", "Moral Education", "Computer Studies",
];

const extraCurricular = [
  { icon: <Dumbbell size={18} />, label: "Sports", desc: "Football, Basketball, Swimming and Athletics" },
  { icon: <Music size={18} />, label: "Music &amp; Drama", desc: "Choir, instrumental classes, and stage performances" },
  { icon: <BookOpen size={18} />, label: "Art &amp; Craft", desc: "Painting, drawing, and creative handwork" },
  { icon: <Bus size={18} />, label: "Field Trips", desc: "Educational excursions and community activities" },
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
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Curricular */}
          <div>
            <div className="mb-6">
              <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-2">Academics</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">Curricular Activities</h2>
              <div className="w-10 h-0.5 bg-[#F069B4] mt-3" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We provide a well-structured curriculum that nurtures every child's intellectual and moral development,
              preparing them for higher levels of education.
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

export default PrimaryNursery;
