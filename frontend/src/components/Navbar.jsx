import { useState, useEffect, useRef } from "react";
import { User, ShoppingCart, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/product" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

const NavLinkItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative px-1 py-1 font-medium text-[#0D0A10] transition-colors duration-300 hover:text-black 
      after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-black after:origin-left after:transition-transform after:duration-300
      ${isActive ? "font-semibold text-black after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`
    }
  >
    {label}
  </NavLink>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);

      // If mobile menu is open, keep navbar visible
      if (isMenuOpen) {
        setIsHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      // If scrolling down and beyond threshold, hide navbar
      if (currentY > lastScrollY.current && currentY > 100) {
        setIsHidden(true);
      } else {
        // scrolling up -> show navbar
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => isMenuOpen && setIsMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto flex w-full items-center justify-between px-4 transition-all duration-300 md:px-8 lg:px-12
        bg-[#EAF1EF]/60 backdrop-blur-sm ${isScrolled ? "h-14 shadow-md" : "h-18 shadow-sm"}`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={`flex-shrink-0 transition-transform duration-300 
            ${isScrolled ? "scale-90" : "scale-100"}`}
        >
          <div className="text-[#4FAA84] text-2xl font-bold">ECONANOCAT</div>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-[#EAF1EF]/90 shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-8 p-8 text-lg">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <NavLinkItem
                  to={to}
                  label={label}
                  onClick={handleLinkClick}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
