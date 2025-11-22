
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            
                {NAVBAR_LINKS.map((index,link)=>(
                   <li key={}>
                    <Navlink></Navlink>
                   </li>
                ))}
            
        </ul>

    </nav>
  )
}

export default Navbar