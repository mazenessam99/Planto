
import { NavLink } from "react-router-dom"
import { NAVBAR_LINKS } from "../../utils/constants"
import { FiHome } from "react-icons/fi"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((link)=>(
                   <li key={link.id}>
                    <FiHome className="inline mr-1" />
                    <NavLink to={link.path}>{link.label}</NavLink>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar