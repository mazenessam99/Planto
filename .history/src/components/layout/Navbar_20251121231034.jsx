import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAVBAR_LINKS } from "../../utils/constants";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">

        {/* Logo */}
        <a href="/" className="text-primary text-xl font-bold">
          Planto
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center">
          {NAVBAR_LINKS.map((link) => (
            <li key={link.id} className="relative">
              {/* Dropdown Link Example */}
              {link.label === "Shop" ? (
                <div 
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span className="cursor-pointer text-primary hover:text-secondary font-semibold">
                    Shop ▾
                  </span>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 bg-white shadow-lg p-4 rounded-md w-40">
                      <a className="block py-1 hover:text-secondary" href="#">
                        Indoor Plants
                      </a>
                      <a className="block py-1 hover:text-secondary" href="#">
                        Outdoor Plants
                      </a>
                      <a className="block py-1 hover:text-secondary" href="#">
                        Accessories
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-primary font-semibold transition hover:text-secondary
                     ${isActive ? "text-secondary underline underline-offset-4" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Search + Icons */}
        <div className="hidden md:flex gap-6 items-center text-primary">
          {/* Search Box */}
          <div className="relative">
            <input 
              type="text"
              placeholder="Search..."
              className="border rounded-full pl-3 pr-8 py-1 text-sm focus:outline-secondary"
            />
            <FaSearch size={15} className="absolute right-2 top-2 text-gray-500" />
          </div>

          <FaUser size={17} className="cursor-pointer hover:text-secondary" />
          <FaBagShopping size={17} className="cursor-pointer hover:text-secondary" />
        </div>

        {/* Mobile Button */}
        <button 
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-primary"
        >
          <FaBars size={22}/>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setMenuOpen(false)}>
          <div 
            className="bg-white w-64 h-full p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="mb-6" onClick={() => setMenuOpen(false)}>
              <IoClose size={28} className="text-primary" />
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-4 text-primary font-semibold">
              {NAVBAR_LINKS.map((link) => (
                <li key={link.id}>
                  <NavLink 
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({isActive}) =>
                      `block py-1 ${isActive ? "text-secondary" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Icons */}
            <div className="flex gap-6 mt-6 text-primary">
              <FaUser size={17} />
              <FaBagShopping size={17} />
              <FaSearch size={17} />
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
