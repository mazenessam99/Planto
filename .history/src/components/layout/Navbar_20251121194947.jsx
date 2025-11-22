
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((index,link)=>(
                   <li ke>
                    <Navlink></Navlink>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar