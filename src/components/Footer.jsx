import { Link } from "react-router-dom";
import { ASSETS } from "../constants/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  
  return (
    <footer
  className="text-gray-400 p-10 md:p-16 flex flex-wrap justify-between gap-6 bg-[#4a0f3f]"
  // style={{ backgroundColor: 'rgb(117, 59, 59)' }}
>
      {/* Logo & Description */}
      <div className="flex-1 max-w-sm">
        <img src={ASSETS.logo} alt="Sure Foundation" className="max-w-[200px] mb-4" />
        <p className="text-sm leading-6 text-white">
          A leading school offering a comprehensive education program for students aged 3 to 18 in the Port Harcourt City of Nigeria.
        </p>
      </div>
      
      {/* Quick Links */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-lg mb-4 text-white">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link to="/" className="text-white hover:text-yellow-500 transition">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-yellow-500 transition">About</Link></li>
          <li><Link to="/admission" className="text-white hover:text-yellow-500 transition">Admission</Link></li>
          <li><Link to="/contact" className="text-white hover:text-yellow-500 transition">Contact</Link></li>
          <li><Link to="/calender" className="text-white hover:text-yellow-500 transition">Calendar</Link></li>
          <li>
            <a
              href="https://portal.sfgs.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition"
            >
              Portal
            </a>
          </li>
        </ul>
      </div>
      
      {/* Admission Links */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-lg mb-4 text-white">Admission</h3>
        <ul className="space-y-2">
          <li><Link to="/admission" className="text-white hover:text-yellow-500 transition">How to Apply</Link></li>
          <li><Link to="/admission" className="text-white hover:text-yellow-500 transition">Admission Criteria</Link></li>
          <li><Link to="/admission" className="text-white hover:text-yellow-500 transition">{currentYear}/{nextYear} Admission</Link></li>
          <li><Link to="/contact" className="text-white hover:text-yellow-500 transition">Contact Us</Link></li>
        </ul>
      </div>
      
      {/* Contact Information */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-lg mb-4 text-white">Sure Foundation Group Of Schools,</h3>
        <p className="text-sm text-white leading-7">
          <i className="fas fa-map-marker-alt text-yellow-500 mr-2"></i> 33 Ada George Road, Agip, Port Harcourt<br />
          <i className="fas fa-phone text-yellow-500 mr-2"></i> <a href="tel:+2348150903459" className="hover:text-yellow-500">+234 815 090 3459</a><br />
          <i className="fas fa-phone text-yellow-500 mr-2"></i> <a href="tel:+2348141309816" className="hover:text-yellow-500">+234 814 130 9816</a><br />
        </p>
      </div>
      
      {/* Footer Bottom */}
      <div className="w-full text-center border-t border-gray-600 pt-5 mt-5 text-sm">
        <p>&copy; {new Date().getFullYear()} Sure Foundation Group Of Schools. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-3">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon) => (
            <a key={icon} href="#" className="text-white text-xl hover:text-yellow-500 transition">
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
