import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css"

function NavBar() {
  return (
    <ul className="list">
      <li className="link-home"><NavLink to="/">Home </NavLink></li>
      <li className="link-favorite"><Link to="/favorites" >Favoriten </Link></li>
      <li className="link-addProduct"><Link to="/addProduct" >Neu</Link></li>
    </ul>
  );
}

export default NavBar;
