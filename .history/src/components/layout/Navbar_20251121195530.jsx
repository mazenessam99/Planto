
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((link)=>(
                   <li key={link.id}>
                    <NavL to={link.path}>{link.label}</NavL>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar