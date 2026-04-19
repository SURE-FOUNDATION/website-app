import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ASSETS } from "../constants/assets";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#4a0f3f] text-[#F069B4]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-white">
          <img
            src={ASSETS.logo}
            alt="Sure Foundation"
            className="h-10 w-10 rounded bg-white object-contain p-1"
          />
          <span className="hidden sm:inline font-semibold tracking-wide">
            Sure Foundation
          </span>
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><Link to="/admission" className="hover:text-white">Admission</Link></li>
          <li><Link to="/calender" className="hover:text-white">Calendar</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>

          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-white">Schools ▼</button>
            <ul
              className={`absolute left-0 mt-2 bg-white text-[#4a0f3f] shadow-lg rounded-md w-48 overflow-hidden transform transition-all duration-200 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li><Link to="/primary-nursery" className="block px-4 py-2 hover:bg-[#F069B4] hover:text-white">Primary/Nursery</Link></li>
              <li><Link to="/secondary" className="block px-4 py-2 hover:bg-[#F069B4] hover:text-white">Secondary</Link></li>
            </ul>
          </li>

          <li>
            <a
              href="https://portal.sfgs.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#F069B4] rounded-md hover:bg-[#F069B4] hover:text-white transition"
            >
              Portal
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden text-[#F069B4] text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center text-[#F069B4] transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          type="button"
          className="absolute top-5 right-5 text-4xl"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={36} />
        </button>

        <ul className="space-y-6 text-xl font-medium">
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/admission" onClick={() => setIsMobileMenuOpen(false)}>Admission</Link></li>
          <li><Link to="/calender" onClick={() => setIsMobileMenuOpen(false)}>Calendar</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>

          <li className="text-center">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center gap-2 w-full"
            >
              Schools ▼
            </button>
            {isDropdownOpen && (
              <ul className="mt-3 space-y-2 text-lg">
                <li><Link to="/primary-nursery" onClick={() => setIsMobileMenuOpen(false)}>Primary/Nursery</Link></li>
                <li><Link to="/secondary" onClick={() => setIsMobileMenuOpen(false)}>Secondary</Link></li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="https://portal.sfgs.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#F069B4] rounded-md hover:bg-[#F069B4] hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portal
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

