import { ASSETS } from "../constants/assets";

const WhychooseUs = () => {
  return (
    <section
      className="w-full h-auto bg-cover bg-center relative pt-12 pb-16"
      style={{
        backgroundImage: `linear-gradient(rgba(240, 241, 244, 0.7), rgba(202, 205, 219, 0.7)), url('${ASSETS.whyChooseUsBg}')`,
      }}
    >
      <h1 className="text-center text-black font-raleway text-2xl font-bold capitalize leading-[25px] h-[50px]">
        Why Choose Us
      </h1>
      <p className="text-center text-gray-600 font-raleway text-base font-normal pt-5 leading-6 mx-auto max-w-2xl">
        Sure Foundation is passionate about the education of all of our students,
        making us an extremely popular and over-subscribed choice for families. We
        are dedicated to the development of your child—academically, socially, and
        spiritually.
        <br />
        <br />
        We boast of academic excellence, holistic development, experienced and
        qualified teachers, state-of-the-art facilities, and a safe, secure
        environment.
      </p>

      <div className="flex justify-center gap-10 mt-10 px-5 grid sm:grid-cols-2 md:flex md:space-x-4 gap-4">
        <div className="flex flex-col items-center text-center text-gray-600 font-raleway max-w-sm">
          <img src={ASSETS.iconMission} alt="Our Mission" className="w-24 h-24 mb-4" />
          <h3 className="text-lg font-semibold">Our Mission</h3>
          <p className="text-base leading-6">
            To provide a conducive atmosphere for learning with a view to attaining a
            high level of moral and academic excellence, and patriotism.
          </p>
        </div>

        <div className="flex flex-col items-center text-center text-gray-600 font-raleway max-w-sm">
          <img src={ASSETS.iconVision} alt="Our Vision" className="w-24 h-24 mb-4" />
          <h3 className="text-lg font-semibold">Our Vision</h3>
          <p className="text-base leading-6">
            To bring up sons and daughters who are morally acceptable, academically
            balanced, socially adjusted, and spiritually matured.
          </p>
        </div>

        <div className="flex flex-col items-center text-center text-gray-600 font-raleway max-w-sm">
          <img
            src={ASSETS.iconPhilosophy}
            alt="Our Philosophy"
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-lg font-semibold">Our Philosophy</h3>
          <p className="text-base leading-6">
            Our approach to pupils is directed by the highest Christian ideals which
            include love and respect for one’s fellow man, service to the whole
            community; friendship, understanding, and fair-mindedness to all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhychooseUs;

