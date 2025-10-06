import { User, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-[#EAF1EF] shadow-sm">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-12">
        <Link to="/" className="flex-shrink-0">
          <div className="h-[54px] w-[195px] rounded-lg bg-red-200 mix-blend-multiply" />
        </Link>

        <ul className="hidden items-center gap-12 text-[17px] text-[#0D0A10] md:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative px-1 py-1 transition-colors ${
                    isActive
                      ? "font-semibold text-black"
                      : "font-medium text-[#0D0A10] hover:text-black"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
