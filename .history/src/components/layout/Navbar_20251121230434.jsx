
import { NavLink } from "react-router-dom"
import { NAVBAR_LINKS } from "../../utils/constants"
import { FaBars, FaSearch, FaUser } from "react-icons/fa"
import { FaBagShopping } from "react-icons/fa6"


const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="container flex justify-between items-center py-4">
                <a href="/" className="text-primary text-xl font-bold">Planto</a>
                <ul className="flex gap-4">

                {NAVBAR_LINKS.map((link) => (
                    <li key={link.id}>
                        <NavLink to={link.path} className={({isActive})=>
                            `text-primary transition font-semibold ${isActive ?"text-secondary":''}`
                        }>{link.label}</NavLink>
                    </li>
                ))}
                </ul>
                <div className="flex gap-4 items-center">
                    <FaSearch size={15}/>
                    <FaUser size={15}/>
                    <FaBagShopping size={15}/>
                </div>
                <div className="flex md:hid">
                    <FaBars/>
                </div>
                

            </div>
        </nav>
    )
}

export default Navbar