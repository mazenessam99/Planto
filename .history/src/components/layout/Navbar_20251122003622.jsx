import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAVBAR_LINKS } from "../../utils/constants";
import { FaBars, FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow  z-50">
            <div className="container flex justify-between items-center py-4">
                {/* Logo */}
                <a href="/" className="text-primary text-xl font-bold">Planto</a>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 items-center">
                    {NAVBAR_LINKS.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-primary font-semibold transition hover:text-secondary
                                ${isActive ? "text-secondary underline underline-offset-4" : ""}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Desktop Icons + Search */}
                <div className="hidden md:flex gap-6 items-center text-primary">
                    {/* Search input */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded-full pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                        <FaSearch size={15} className="absolute right-2 top-2 text-gray-500" />
                    </div>

                    <FaUser size={17} className="cursor-pointer hover:text-secondary" />
                    <FaShoppingBag size={17} className="cursor-pointer hover:text-secondary" />
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                >
                    <FaBars size={22} />
                </button>
            </div>

            {/* Mobile overlay + drawer (AnimatePresence for exit animation) */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMenuOpen(false)}
                    >
                        {/* Drawer */}
                        <motion.div
                            className="bg-white w-72 h-full shadow-lg p-6"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "linear", duration: 0.4 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close */}
                            <div className="flex justify-between items-center mb-6">
                                <a href="/" className="text-lg font-bold text-primary">Planto</a>
                                <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                                    <IoClose size={26} className="text-primary" />
                                </button>
                            </div>

                            {/* Mobile Search */}
                            <div className="mb-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full border rounded-full pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                                    />
                                    <FaSearch size={15} className="absolute right-3 top-3 text-gray-500" />
                                </div>
                            </div>

                            {/* Links */}
                            <ul className="flex flex-col gap-4 text-primary font-semibold">
                                {NAVBAR_LINKS.map((link) => (
                                    <li key={link.id}>
                                        <NavLink
                                            to={link.path}
                                            onClick={() => setMenuOpen(false)}
                                            className={({ isActive }) =>
                                                `block py-2 ${isActive ? "text-secondary" : ""}`
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            {/* Icons */}
                            <div className="flex gap-4 mt-6 text-primary">
                                <FaUser size={18} />
                                <FaShoppingBag size={18} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
