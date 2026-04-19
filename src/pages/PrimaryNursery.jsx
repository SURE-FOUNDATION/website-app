import { ASSETS } from "../constants/assets";

const PrimaryNursery = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center before:absolute before:inset-0 before:content-[''] before:bg-[rgba(4,9,30,0.7)] flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.campus2}')` }}
      >
        <h1 className="text-white drop-shadow-lg text-center text-4xl font-bold">
          Primary/Nursery School
        </h1>
      </div>

      <div className="p-10 max-w-4xl mx-auto">
        <div className="bg-white shadow-md p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Curricular Activities
          </h2>
          <p className="text-gray-600">
            We provide a well-structured curriculum that includes Mathematics,
            Science, English, Arts, and Moral Education.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Extra-Curricular Activities
          </h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Sports (Football, Basketball, Swimming)</li>
            <li>Music and Drama</li>
            <li>Art and Craft</li>
            <li>Field Trips and Excursions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrimaryNursery;

