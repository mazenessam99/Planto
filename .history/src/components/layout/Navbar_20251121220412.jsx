
import { NavLink } from "react-router-dom"
import { NAVBAR_LINKS } from "../../utils/constants"


const Navbar = () => {
    return (
 <nav className="bg-white shadow">
  <div className="container flex justify-between items-center py-4">
    <h1 className="text-xl font-bold">Logo</h1>

    <ul className="flex gap-6">
      {NAVBAR_LINKS.map(link => (
        <li key={link.id}>
          <NavLink to={link.path}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
</nav>

    )
}

export default Navbar