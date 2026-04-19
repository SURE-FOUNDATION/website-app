import { ASSETS } from "../constants/assets";
import { CheckCircle } from "lucide-react";

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
      <section className="py-16 sm:py-20 px-5">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Nursery & Primary */}
          <div>
            <div className="mb-6">
              <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-2">Nursery &amp; Primary Section</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">Admission for Nursery &amp; Primary</h2>
              <div className="w-10 h-0.5 bg-[#F069B4] mt-3" />
            </div>

            <div className="bg-[#f8f5f8] rounded-xl p-6 sm:p-8 shadow-sm border-l-4 border-[#4a0f3f]">
              <h3 className="text-lg font-semibold text-[#4a0f3f] mb-4">Application Process</h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                <p>
                  Entry candidates should satisfy school entry requirements in line with the admission policy.
                  Admissions are ongoing for pupils (ranging from 3 months old to age 5) into kindergarten,
                  creche/daycare, and nursery classes.
                </p>
                <p>
                  Candidates seeking admission into Basic One to Six will take tests in Numeracy and Literacy as
                  part of the entry process and may be required to take tests in additional subjects for higher
                  classes. Successful candidates are then given admission letters.
                </p>
                <p>
                  To be eligible for admission into Primary One, candidates must turn five years old in the year
                  of admission. The application form costs <strong>₦10,000</strong>, payable before filling out the form.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-4">
                {["Creche / Daycare", "Kindergarten", "Nursery 1 – 2", "Basic 1 – 6"].map((level) => (
                  <span key={level} className="flex items-center gap-1.5 text-xs font-medium text-[#4a0f3f] bg-white border border-[#4a0f3f]/20 px-3 py-1.5 rounded-full">
                    <CheckCircle size={12} className="text-[#F069B4]" />
                    {level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div>
            <div className="mb-6">
              <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-2">Secondary Section</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">Admission for Secondary School</h2>
              <div className="w-10 h-0.5 bg-[#F069B4] mt-3" />
            </div>

            <div className="bg-[#f8f5f8] rounded-xl p-6 sm:p-8 shadow-sm border-l-4 border-[#4a0f3f]">
              <h3 className="text-lg font-semibold text-[#4a0f3f] mb-4">Application Process</h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                <p>
                  Admission into Secondary school is open to both male and female candidates globally.
                </p>
                <p>
                  The application form costs <strong>₦10,000</strong> and should be paid before filling out the form.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-4">
                {["JSS 1 – 3", "SSS 1 – 3"].map((level) => (
                  <span key={level} className="flex items-center gap-1.5 text-xs font-medium text-[#4a0f3f] bg-white border border-[#4a0f3f]/20 px-3 py-1.5 rounded-full">
                    <CheckCircle size={12} className="text-[#F069B4]" />
                    {level}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AdmissionSection;
