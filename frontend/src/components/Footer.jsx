import React from 'react';
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

// 2. Add icon components to the data
const FOLLOW_LINKS = [
  { label: "what's app", href: "#", icon: <RiWhatsappFill  size={20} /> },
  { label: "Linked In", href: "#", icon: <FaLinkedin  size={20} /> },
  { label: "Facebook", href: "#", icon: <FaFacebook  size={20} /> },
];

const QUICK_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Products/Services", href: "#" },
  { label: "Contact Us", href: "#" },
];

const PRODUCT_LINKS = [
  { label: "Featured Products", href: "#" },
  { label: "Top Rated Products", href: "#" },
  { label: "Lates Products", href: "#" }, // Corrected "Lates" to "Latest" if needed
];

export default function Footer() {
  return (
    <footer className="bg-[#D3EDE8]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-8">
        {/* 3. Use a responsive grid for the main layout */}
        <div className="grid grid-cols-1 gap-12 text-gray-900 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="h-[54px] w-[195px] rounded-lg bg-[#D9D9D9]" />
            <div>
              <p className="font-bold text-lg">ECNANOCAT Pvt. Ltd.</p>
              <p className="text-sm font-medium">All Rights Reserved</p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg">Contact</h5>
            <div className="space-y-2 text-sm font-medium">
              <p>Address: 123 Business Avenue, City, State</p>
              <p>Phone: +91-XXXXXXXXXX</p>
              <p>Email: info@[company].com</p>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg">Follow Us On</h5>
            <ul className="space-y-3 font-medium">
              {FOLLOW_LINKS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-3 text-sm capitalize transition hover:opacity-75">
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg">Quick Links</h5>
            <ul className="space-y-3 font-medium">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm transition hover:opacity-75">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Products/Services */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg">Products/services</h5>
            <ul className="space-y-3 font-medium">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm transition hover:opacity-75">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#173126] px-6 py-4 lg:px-8">
        <div className="mx-auto max-w-8xl">
           {/* 4. Use grid for perfect left, center, right alignment */}
          <div className="grid grid-cols-1 items-center gap-4 text-center text-sm text-white md:grid-cols-3">
            <div className="flex items-center justify-center gap-1 md:justify-start">
              <span>©</span>
              <span>2025 Copyright</span>
            </div>
            
            <a href="#" className="transition hover:opacity-75">
              Privacy Policy
            </a>
            
            <a href="#" className="transition hover:opacity-75 md:text-right">
              Terms & conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}