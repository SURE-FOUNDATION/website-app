import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from "lucide-react";
import { ASSETS } from "../constants/assets";
import { portalFetchJson } from "../utils/portal";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_PORTAL_CONTACT_ENDPOINT ||
  "https://portal.sfgs.com.ng/?page=contact_submit";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");
    try {
      const result = await portalFetchJson(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (result?.success) {
        setStatus(result.success);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
        return;
      }
      setStatus("Message sent.");
    } catch (error) {
      setStatus(error?.message || "Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">

      {/* Hero */}
      <div
        className="relative min-h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('${ASSETS.whyChooseUsBg}')` }}
      >
        <div className="absolute inset-0 bg-[rgba(4,9,30,0.7)]" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Contact Us
          </h1>
          <div className="w-12 h-0.5 bg-[#F069B4] mx-auto mt-5" />
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F069B4] text-xs font-semibold uppercase tracking-[0.18em] mb-3">Reach Out</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4a0f3f]">We'd love to hear from you</h2>
            <div className="w-10 h-0.5 bg-[#F069B4] mx-auto mt-4" />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg grid md:grid-cols-[2fr_3fr]">

            {/* Left — Contact Info */}
            <div className="bg-[#4a0f3f] px-8 py-10 flex flex-col justify-between gap-8">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">Contact Information</h3>
                <p className="text-white/60 text-sm">Reach us through any of these channels.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#F069B4]" />
                  </div>
                  <div className="text-white/80 text-sm space-y-1">
                    <a className="block hover:text-[#F069B4] transition-colors" href="tel:+2347066574117">+234 7066574117</a>
                    <a className="block hover:text-[#F069B4] transition-colors" href="tel:+2348032750680">+234 8032750680</a>
                    <a className="block hover:text-[#F069B4] transition-colors" href="tel:+2347070879787">+234 7070879787</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#F069B4]" />
                  </div>
                  <a
                    href="mailto:surefoundationgroupofschool@gmail.com"
                    className="text-white/80 text-sm hover:text-[#F069B4] transition-colors break-all"
                  >
                    surefoundationgroupofschool@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#F069B4]" />
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=33%20Ada%20George%20Road%2C%20Agip%2C%20Port%20Harcourt%2C%20Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-sm hover:text-[#F069B4] transition-colors"
                  >
                    33 Ada George Road, Agip,<br />Port Harcourt, Nigeria
                  </a>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {[
                  { href: "https://facebook.com", Icon: Facebook },
                  { href: "https://twitter.com", Icon: Twitter },
                  { href: "https://instagram.com", Icon: Instagram },
                ].map(({ href, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-[#F069B4] transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white px-8 py-10">
              <h3 className="text-lg font-bold text-[#4a0f3f] mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={isLoading}
                  minLength="2"
                  maxLength="100"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-[#f8f5f8] focus:outline-none focus:ring-2 focus:ring-[#4a0f3f] disabled:opacity-50 text-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  disabled={isLoading}
                  maxLength="100"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-[#f8f5f8] focus:outline-none focus:ring-2 focus:ring-[#4a0f3f] disabled:opacity-50 text-sm"
                />
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    disabled={isLoading}
                    minLength="10"
                    maxLength="1000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-[#f8f5f8] focus:outline-none focus:ring-2 focus:ring-[#4a0f3f] disabled:opacity-50 resize-vertical text-sm"
                  />
                  <p className="text-xs text-gray-400 mt-1">{formData.message.length}/1000</p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 flex items-center justify-center gap-2 rounded-xl bg-[#4a0f3f] text-white font-semibold text-sm hover:bg-[#F069B4] transition-colors duration-200 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>

                {status && (
                  <div className={`px-4 py-3 rounded-xl text-sm ${
                    status.includes("successfully")
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : status.includes("Sending")
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 px-5">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-[#4a0f3f] mb-4">Our Location</h3>
          <iframe
            title="Google Map - Sure Foundation Group of Schools"
            className="w-full h-64 sm:h-80 rounded-2xl shadow-md border border-gray-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7694183363833!2d6.979764973977257!3d4.809609095165839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce5ad10db071%3A0x8006133cf065813e!2ssure%20foundation%20group%20of%20schools!5e0!3m2!1sen!2sau!4v1740086912752!5m2!1sen!2sau"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
