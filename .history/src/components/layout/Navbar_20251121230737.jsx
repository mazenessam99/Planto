import { NavLink } from "react-router-dom";
import { NAVBAR_LINKS } from "../../utils/constants";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container flex justify-between items-center py-4">

        {/* Logo */}
        <a href="/" className="text-primary text-xl font-bold">Planto</a>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6">
          {NAVBAR_LINKS.map((link) => (
            <li key={link.id}>
              <NavLink 
                to={link.path}
                className={({ isActive }) =>
                  `text-primary font-semibold transition
                   hover:text-secondary
                   ${isActive ? "text-secondary underline underline-offset-4" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex gap-6 items-center text-primary">
          <FaSearch size={17} className="cursor-pointer hover:text-secondary" />
          <FaUser size={17} className="cursor-pointer hover:text-secondary" />
          <FaBagShopping size={17} className="cursor-pointer hover:text-secondary" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <FaBars size={22} className="cursor-pointer text-primary" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
