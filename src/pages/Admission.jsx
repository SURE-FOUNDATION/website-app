import AboutSection from "../components/AboutSection";
import { ASSETS } from "../constants/assets";

const AdmissionSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center before:absolute before:inset-0 before:content-[''] before:bg-[rgba(4,9,30,0.7)] flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.campus2}')` }}
      >
        <h1 className="text-white drop-shadow-lg justify-center text-center items-center text-4xl font-bold">Admission</h1>
      </div>

      {/* Main Content */}
      <section className="w-full px-auto md:px-10 lg:px-20">
        {/* Navigation */}
        <AboutSection />

        {/* Admission for Nursery & Primary */}
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold text-gray-800">ADMISSION</h1>
          <h2 className="text-lg text-gray-600">FOR NURSERY AND PRIMARY SECTION</h2>
        </div>

        {/* Application Process */}
        <section className=" bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Application Process</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Entry candidates should satisfy school entry requirements in line with the admission policy. Admissions are ongoing for pupils (ranging from 3 months old to age 5) into kindergarten, creche/daycare, and nursery classes.
            <br /><br />
            Candidates seeking admission into Basic One to Six will take tests in Numeracy and Literacy as part of the entry process and may be required to take tests in additional subjects for higher classes. Successful candidates are then given admission letters.
            <br /><br />
            To be eligible for admission into Primary One, candidates must turn five years old in the year of admission. The application form costs N10,000, payable before filling out the form.
          </p>
        </section>

        {/* Admission for Secondary */}
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold text-gray-800">ADMISSION</h1>
          <h2 className="text-lg text-gray-600">FOR SECONDARY SECTION</h2>
        </div>

        {/* Secondary Application Process */}
        <section className="mb-17  bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Application Process</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Admission into Secondary school is open to both male and female candidates globally.
            <br /><br />
            The application form costs N10,000 and should be paid before filling out the form.
          </p>
        </section>
      </section>
    </>
  );
};

export default AdmissionSection;
