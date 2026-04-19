const Section = ({ title, children, images, className = "" }) => {
  return (
    <section className={`py-12 px-4 text-white ${className}`}>
      {/* Section Title */}
      <h2 className="text-3xl text-[#F069B4] font-bold text-center">{title}</h2>

      {/* Children (Write-up) - Always Comes First */}
      <div className="text-black">{children}</div>

      {/* Images - Displayed Below the Write-up */}
      <div className="grid md:grid-cols-3 gap-6 px-8 ">
        {images.map((img, index) => (
          <div key={index} className="relative group text-center overflow-hidden rounded-lg">
            {/* Image */}
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105" />

            {/* Caption with Background */}
            <div className="absolute bottom-0 left-0 w-full bg-[#4a0f3f] text-white text-sm py-2 transition-all duration-200 group-hover:h-full group-hover:flex group-hover:items-center group-hover:justify-center group-hover:bg-[rgba(60,4,7,0.7)]">
              {img.caption}
            </div>
          </div>
        ))}
      </div>



    </section>
  );
};

export default Section;
