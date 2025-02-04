import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function NavLinks() {
  return (
    <>
      <li>
        <NavLink exact to="/" className="list-style">Home</NavLink>
      </li>
      <li>
        <Link to="contact"
          smooth={true}
          duration={1}
          className="list-style">
          contact
        </Link>
      </li>
      <li>

        <Link to="exercises" className="list-style">
          Exercises
        </Link>
      </li>
      
      <li>

        <Link to="plans"
          smooth={true}
          duration={1}
          className="list-style">
          Plans
        </Link>
      </li>
    </>
  )
}
