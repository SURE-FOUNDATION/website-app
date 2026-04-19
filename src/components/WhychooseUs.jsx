import { Target, Eye, Lightbulb } from "lucide-react";

const items = [
  {
    Icon: Target,
    title: "Our Mission",
    text: "To provide a conducive atmosphere for learning with a view to attaining a high level of moral and academic excellence, and patriotism.",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    text: "To bring up sons and daughters who are morally acceptable, academically balanced, socially adjusted, and spiritually matured.",
  },
  {
    Icon: Lightbulb,
    title: "Our Philosophy",
    text: "Our approach to pupils is directed by the highest Christian ideals — love, respect, service to community, friendship, and fair-mindedness to all.",
  },
];

const WhychooseUs = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-5" style={{ background: "linear-gradient(135deg, #4a0f3f 0%, #2d0828 100%)" }}>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">Core Beliefs</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Why Choose Us</h2>
          <div className="w-10 h-0.5 bg-[#F069B4] mx-auto mt-4 mb-5" />
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Sure Foundation is passionate about the education of all of our students —
            dedicated to your child's academic, social, and spiritual development.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {items.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className="flex flex-col items-center text-center px-8 py-10 gap-5"
              style={{ background: "linear-gradient(135deg, #4a0f3f 0%, #2d0828 100%)" }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(240,105,180,0.15)" }}>
                <Icon size={28} color="#F069B4" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhychooseUs;
