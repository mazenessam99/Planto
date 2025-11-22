
import { NAVBAR_LINKS } from "../../utils/constants"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                {NAVBAR_LINKS.map(())}
            </li>
        </ul>

    </nav>
  )
}

export default Navbar