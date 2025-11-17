import {  User } from "lucide-react"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-[92px] p-1 bg-white opacity-100 flex items-center">
      <div className="w-[1440px] mx-auto flex items-center justify-between px-8">
        {/* Logo */}
       <div className="flex-shrink-0">
                <Link to="/home">
                 <div className="text-2xl font-bold text-gray-500 ">Econanocat</div>
                
                </Link>
              </div>

        {/* Menu */}
        <ul className="flex items-center space-x-8 text-sm text-gray-500">
          {["Home", "About us","Product","Services","Contact Us"].map(
            (item) => (
              <Link to={`/${item.toLowerCase().split(" ").join("-")}`}
                key={item}
                className={`cursor-pointer hover:text-black
                }`}
              >
                {item}
              </Link>
            )
          )}
        </ul>

        {/* Profile Icon */}
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <User className="w-5 h-5 text-black" />
        </div>
      </div>
    </nav>
  )
}
