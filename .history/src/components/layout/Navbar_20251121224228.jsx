
import { NavLink } from "react-router-dom"
import { NAVBAR_LINKS } from "../../utils/constants"


const Navbar = () => {
    return (
        <nav className="bg- shadow">
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
            </div>
        </nav>
    )
}

export default Navbar