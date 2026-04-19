import { ASSETS } from "../constants/assets";

export default function FoundersDesk() {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12">
      <h2 className="text-2xl font-bold mb-8">From our Founder&apos;s Desk</h2>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
        <div className="lg:w-1/2">
          <p className="text-lg leading-relaxed mb-6">
            At Sure Foundation, we believe every child is born with the potential to
            lead, create, and inspire. Since 1998, our mission has been to nurture
            that potential in a supportive, structured, and joyful environment. What
            began as a vision to raise confident, independent thinkers is now a
            thriving community of learners shaped by compassion, curiosity, and
            character.
            <br />
            <br />
            We offer a holistic education that blends Nigerian and Montessori
            curricula with modern strategies—balancing academic excellence with
            creativity, emotional intelligence, and strong values. Our caring
            teachers, joyful students, and trusting parents create a family-like
            atmosphere where every child is seen, heard, and celebrated. From arts,
            sports, music, STEM, and entrepreneurship to leadership clubs and
            community service, we prepare our students not just for exams, but for
            life.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img
            src={ASSETS.heroMain}
            alt="Founder"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="lg:col-span-2">
          <p className="text-lg leading-relaxed">
            As you explore this website and learn more about our school, I hope you
            get a sense of the heart behind our work. We are more than a place of
            learning; it is a home for possibility—a place where every child is known
            by name, supported in their struggles, and celebrated in their growth.
            Our goal is simple: to provide each learner with a solid foundation—
            academically, emotionally, and morally—so they leave our school not just
            with knowledge, but with confidence and the courage to make a difference
            in the world. We invite you to be part of our story.
          </p>
        </div>
      </div>
    </section>
  );
}

