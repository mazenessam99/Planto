
import { NavLink } from "react-router-dom"
import { NAVBAR_LINKS } from "../../utils/constants"


const Navbar = () => {
  return (
    <nav>
        <ul>
            
            {NAVBAR_LINKS.map((link)=>(
                <li key={link.id}>
                    <NavLink to={link.path} className={"text-primary"}>{link.label}</NavLink>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar