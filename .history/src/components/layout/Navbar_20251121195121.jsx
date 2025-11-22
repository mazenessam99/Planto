
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((index,link)=>(
                   <li key={index}>
                    <Navlink to={link}>{link.label}</Navlink>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar