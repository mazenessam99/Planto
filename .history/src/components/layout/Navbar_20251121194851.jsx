
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                {NAVBAR_LINKS.map((index,link)=>(
                    <Navlink></Navlink>
                ))}
            </li>
        </ul>

    </nav>
  )
}

export default Navbar