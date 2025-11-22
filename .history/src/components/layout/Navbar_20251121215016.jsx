
import { NavLink } from "react-router-dom"
import { NAVBAR_LINKS } from "../../utils/constants"


const Navbar = () => {
    return (
        <nav className="shadow">
            <div className="container flex justify-between items-center">
                <h1 className="text-primary">Planto</h1>
                <ul cla>

                {NAVBAR_LINKS.map((link) => (
                    <li key={link.id}>
                        <NavLink to={link.path} className={"text-primary"}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar