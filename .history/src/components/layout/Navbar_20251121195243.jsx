
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((link,index)=>(
                   <li key={index}>
                    <Navlink to={link.path}>{link.label}</Navlink>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar