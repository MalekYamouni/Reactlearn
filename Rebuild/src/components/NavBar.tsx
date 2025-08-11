import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <ul className="list">
      <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
      <li><NavLink to="/favorites" className={({ isActive }) => (isActive ? "active" : "")}>Favoriten</NavLink></li>
      <li><NavLink to="/addProduct" className={({ isActive }) => (isActive ? "active" : "")}>Neu</NavLink></li>
      <li><NavLink to="/shoppingcart" className={({ isActive }) => (isActive ? "active" : "")}>Warenkorb</NavLink></li>
    </ul>
  );
}

export default NavBar;
