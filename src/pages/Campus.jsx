import { ASSETS } from "../constants/assets";

const Campus = () => {
  const campuses = [
    {
      image: ASSETS.campus1,
      title: "Sure Foundation - Abel Jumbo Campus",
    },
    {
      image: ASSETS.campus2,
      title: "Sure Foundation - Ada George Campus",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.campusHero}')` }}
      >
        <div className="absolute inset-0 bg-[rgba(4,9,30,0.7)]"></div>
        <h1 className="relative text-white text-4xl font-bold drop-shadow-lg z-10">
          Our Campuses
        </h1>
      </div>

      {/* Campus Section */}
      <section className="container mx-auto flex flex-wrap gap-10 justify-center items-center text-center py-20">
        {campuses.map((campus, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-5 border border-gray-300 rounded-lg bg-white shadow-md w-64 text-center"
          >
            <img
              src={campus.image}
              alt={campus.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{campus.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Campus;
