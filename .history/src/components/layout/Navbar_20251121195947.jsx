
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((link)=>(
                   <li key={link.id}>
                    <NavLin to={link.path}>{link.label}</NavLin>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar