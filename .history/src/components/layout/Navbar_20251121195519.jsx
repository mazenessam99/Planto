
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((link)=>(
                   <li key={link.id}>
                    <N to={link.path}>{link.label}</N>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar