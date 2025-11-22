
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((link)=>(
                   <li key={link.id}>
                    < to={link.path}>{link.label}</>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar