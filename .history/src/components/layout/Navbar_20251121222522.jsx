
import { NavLink } from "react-router-dom"
import { NAVBAR_LINKS } from "../../utils/constants"


const Navbar = () => {
    return (
        <nav className="shadow ">
            <div className="container flex justify-between items-center py-4">
                <a href="/" className="text-primary">Planto</a>
                <ul className="flex gap-4">

                {NAVBAR_LINKS.map((link) => (
                    <li key={link.id}>
                        <NavLink to={link.path} className={()}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar