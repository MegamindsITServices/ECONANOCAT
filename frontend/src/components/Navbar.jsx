import { useState, useEffect } from "react"; // Import useEffect
import { User, ShoppingCart, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

// Reusable component for NavLink to avoid repetition
const NavLinkItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative px-1 py-1 font-medium text-[#0D0A10] transition-colors duration-300 hover:text-black ` +
      `after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-black after:origin-left after:transition-transform after:duration-300 ` +
      (isActive
        ? "font-semibold text-black after:scale-x-100"
        : "after:scale-x-0 hover:after:scale-x-100")
    }
  >
    {label}
  </NavLink>
);


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // 1. State to track scroll

  // 2. Effect to add and remove scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scrolled more than 10px, else false
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#EAF1EF] shadow-sm">
      {/* 3. Apply conditional height and transition */}
      <div
        className={`mx-auto flex w-full items-center justify-between px-4 transition-all duration-300 md:px-8 lg:px-12 ${
          isScrolled ? "h-14" : "h-18"
        }`}
      >
        <Link
          to="/"
          className={`flex-shrink-0 transition-transform duration-300 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        >
          {/* Logo's height and width are kept constant, scale handles the size change */}
          <div className="h-[54px] w-[195px] rounded-lg bg-red-200 mix-blend-multiply" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center text-[17px] text-[#0D0A10] md:flex md:gap-6 lg:gap-12">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <NavLinkItem to={to} label={label} />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu List */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-[#EAF1EF] shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-8 p-8 text-lg">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <NavLinkItem to={to} label={label} onClick={handleLinkClick} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}