
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((index,link)=>(
                   <li key={index}>
                    <Navlink>{link.}</Navlink>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar