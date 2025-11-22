
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((link)=>(
                   <li key={link.id}>
                    <NavLi to={link.path}>{link.label}</NavLi>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar