
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                {NAVBAR_LINKS.map((index,nav))}
            </li>
        </ul>

    </nav>
  )
}

export default Navbar