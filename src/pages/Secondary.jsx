import { ASSETS } from "../constants/assets";

const Secondary = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center before:absolute before:inset-0 before:content-[''] before:bg-[rgba(4,9,30,0.85)] flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.campus2}')` }}
      >
        <h1 className="text-white drop-shadow-lg text-center text-4xl font-bold">
          Secondary School
        </h1>
      </div>

      <div className="p-10 max-w-4xl mx-auto">
        <div className="bg-white shadow-md p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Curricular Activities
          </h2>
          <p className="text-gray-600">
            Our secondary school curriculum is designed to prepare students for
            national and international examinations.
          </p>
          <p className="text-gray-600 mt-2">
            Subjects include Physics, Chemistry, Biology, Mathematics, English,
            Literature, Economics, and more.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Extra-Curricular Activities
          </h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Debate Club</li>
            <li>Science and Robotics Club</li>
            <li>Music and Dance</li>
            <li>Drama and Theatre</li>
            <li>Sports Competitions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Secondary;

