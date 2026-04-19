import { ASSETS } from "../constants/assets";
import { CheckCircle, Baby, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const primaryLevels = ["Creche / Daycare", "Kindergarten", "Nursery 1 – 2", "Basic 1 – 6"];
const secondaryLevels = ["JSS 1 – 3", "SSS 1 – 3"];

const primarySteps = [
  {
    step: "01",
    title: "Pay Application Fee",
    desc: "Purchase the application form for ₦10,000 before filling it out.",
  },
  {
    step: "02",
    title: "Fill & Submit Form",
    desc: "Complete the form with your child's details and submit it to the admissions office.",
  },
  {
    step: "03",
    title: "Entry Assessment",
    desc: "Candidates for Basic 1–6 sit a Numeracy & Literacy test. Higher classes may include additional subjects.",
  },
  {
    step: "04",
    title: "Admission Letter",
    desc: "Successful candidates receive an official admission letter from the school.",
  },
];

const secondarySteps = [
  {
    step: "01",
    title: "Pay Application Fee",
    desc: "Purchase the application form for ₦10,000 before filling it out.",
  },
  {
    step: "02",
    title: "Fill & Submit Form",
    desc: "Complete and submit the form. Admission is open to both male and female candidates globally.",
  },
  {
    step: "03",
    title: "Entrance Examination",
    desc: "Candidates sit a qualifying entrance examination covering core subjects.",
  },
  {
    step: "04",
    title: "Admission Letter",
    desc: "Successful candidates are issued an official admission letter to resume studies.",
  },
];

const Section = ({ icon: Icon, eyebrow, title, intro, steps, levels }) => (
  <div>
    {/* Section header */}
    <div className="flex items-start gap-4 mb-7">
      <div className="w-12 h-12 rounded-xl bg-[#4a0f3f] flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={22} color="#F069B4" />
      </div>
      <div>
        <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-1">{eyebrow}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">{title}</h2>
      </div>
    </div>

    <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-3xl">{intro}</p>

    {/* Steps */}
    <div className="grid sm:grid-cols-2 gap-4 mb-8">
      {steps.map((s) => (
        <div key={s.step} className="flex gap-4 rounded-2xl bg-white border border-[#e8dce8] p-5 shadow-sm">
          <div className="flex-shrink-0">
            <span className="flex w-9 h-9 items-center justify-center rounded-full bg-[#4a0f3f] text-white text-xs font-bold">
              {s.step}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-[#4a0f3f] text-sm mb-1">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Level tags */}
    <div className="flex flex-wrap gap-2.5">
      {levels.map((level) => (
        <span
          key={level}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4a0f3f] bg-[#f3eaf3] border border-[#c9a0c9] px-4 py-2 rounded-full"
        >
          <CheckCircle size={11} className="text-[#F069B4]" />
          {level}
        </span>
      ))}
    </div>
  </div>
);

const AdmissionSection = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.heroGallery2}')` }}
      >
        <div className="absolute inset-0 bg-[rgba(4,9,30,0.7)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Join Our School
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Admission
          </h1>
          <div className="w-12 h-0.5 bg-[#F069B4] mx-auto mt-5" />
        </div>
      </div>

      {/* Content */}
      <section className="py-16 sm:py-20 px-5 bg-[#faf7fa]">
        <div className="max-w-5xl mx-auto">

          {/* Page intro */}
          <div className="text-center mb-14">
            <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">How to Apply</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f] mb-3">Admission Process</h2>
            <div className="w-10 h-0.5 bg-[#F069B4] mx-auto" />
          </div>

          <div className="space-y-14">

            {/* Divider card: Nursery & Primary */}
            <div className="bg-white rounded-3xl shadow-sm border border-[#e8dce8] p-8 sm:p-10">
              <Section
                icon={Baby}
                eyebrow="Nursery & Primary Section"
                title="Admission for Nursery & Primary"
                intro="Admissions are ongoing for pupils ranging from 3 months old to age 5 into kindergarten, creche/daycare, and nursery classes. To be eligible for Primary One, candidates must turn five years old in the year of admission."
                steps={primarySteps}
                levels={primaryLevels}
              />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#e8dce8]" />
              <span className="text-[#4a0f3f]/30 text-xs font-semibold uppercase tracking-widest">Secondary</span>
              <div className="flex-1 h-px bg-[#e8dce8]" />
            </div>

            {/* Secondary */}
            <div className="bg-white rounded-3xl shadow-sm border border-[#e8dce8] p-8 sm:p-10">
              <Section
                icon={GraduationCap}
                eyebrow="Secondary Section"
                title="Admission for Secondary School"
                intro="Admission into Secondary school is open to both male and female candidates globally. The application form costs ₦10,000 and should be paid before filling out the form."
                steps={secondarySteps}
                levels={secondaryLevels}
              />
            </div>

            {/* CTA */}
            <div
              className="rounded-3xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
              style={{ background: "linear-gradient(135deg, #4a0f3f 0%, #2d0828 100%)" }}
            >
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Ready to join our community?</h3>
                <p className="text-white/60 text-sm">Contact our admissions office for guidance and enquiries.</p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#F069B4] text-white font-semibold text-sm rounded-xl hover:bg-white hover:text-[#4a0f3f] transition-all duration-300"
              >
                Contact Admissions <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionSection;
