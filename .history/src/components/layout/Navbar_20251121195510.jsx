
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((link)=>(
                   <li key={l}>
                    <NavLink to={link.path}>{link.label}</NavLink>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar