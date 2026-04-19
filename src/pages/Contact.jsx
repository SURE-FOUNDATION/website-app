import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { ASSETS } from "../constants/assets";
import { portalFetchJson } from "../utils/portal";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_PORTAL_CONTACT_ENDPOINT ||
  "https://portal.sfgs.com.ng/?page=contact_submit";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      console.error("Network error details:", error);
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#f8f5f8] p-6 sm:p-8 rounded-xl shadow-sm">

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold text-[#4a0f3f]">Send us a Message</h3>

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
                className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#4a0f3f] disabled:opacity-50"
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
                className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#4a0f3f] disabled:opacity-50"
              />

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="4"
                  disabled={isLoading}
                  minLength="10"
                  maxLength="1000"
                  className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#4a0f3f] disabled:opacity-50 resize-vertical"
                />
                <p className="text-xs text-gray-400 mt-1">{formData.message.length}/1000 characters</p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-[#4a0f3f] text-white font-semibold rounded-lg hover:bg-[#F069B4] transition-colors duration-200 disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {status && (
                <div className={`p-3 rounded-lg text-sm ${
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

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#4a0f3f]">Get in Touch</h3>
              <p className="text-gray-600 text-sm">Feel free to reach out through any of the following channels:</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-[#F069B4] flex-shrink-0 mt-0.5" size={18} />
                  <div className="text-gray-700 text-sm space-y-1">
                    <a className="block hover:text-[#4a0f3f]" href="tel:+2347066574117">+234 7066574117</a>
                    <a className="block hover:text-[#4a0f3f]" href="tel:+2348032750680">+234 8032750680</a>
                    <a className="block hover:text-[#4a0f3f]" href="tel:+2347070879787">+234 7070879787</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-[#F069B4] flex-shrink-0 mt-0.5" size={18} />
                  <a
                    href="mailto:surefoundationgroupofschool@gmail.com"
                    className="text-gray-700 text-sm hover:text-[#4a0f3f] break-all"
                  >
                    surefoundationgroupofschool@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-[#F069B4] flex-shrink-0 mt-0.5" size={18} />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=33%20Ada%20George%20Road%2C%20Agip%2C%20Port%20Harcourt%2C%20Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-sm hover:text-[#4a0f3f]"
                  >
                    33 Ada George Road, Agip, Port Harcourt, Nigeria
                  </a>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#4a0f3f]/10 text-[#4a0f3f] hover:bg-[#4a0f3f] hover:text-white transition-all">
                  <Facebook size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#4a0f3f]/10 text-[#4a0f3f] hover:bg-[#4a0f3f] hover:text-white transition-all">
                  <Twitter size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#4a0f3f]/10 text-[#4a0f3f] hover:bg-[#F069B4] hover:text-white transition-all">
                  <Instagram size={16} />
                </a>
              </div>
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
            className="w-full h-64 sm:h-80 rounded-xl shadow-md border border-gray-100"
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
