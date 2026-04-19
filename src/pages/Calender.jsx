import { ASSETS } from "../constants/assets";

const Calender = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center before:absolute before:inset-0 before:bg-[rgba(4,9,30,0.7)] flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.academicCalendarHero}')` }}
      >
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">Academic Calendar</h1>
      </div>

      {/* Calendar Content */}
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold text-red-600">Academic Schedule</h2>
        <p className="mt-4 text-lg text-gray-700">
          Stay updated with our academic schedules and events.
        </p>

        {/* PDF Embed or Link */}
        <div className="mt-8">
          <a
            href={ASSETS.academicCalendarPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Academic Calendar (PDF)
          </a>

        </div>
      </div>
    </>
  );
};

export default Calender;
