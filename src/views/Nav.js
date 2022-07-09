import "../views/Nav.scss";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" exact="true">
        Home
      </NavLink>
      <NavLink to="/timer">Timer Apps</NavLink>
      <NavLink to="/todo">To do Apps</NavLink>
      <NavLink to="/blogs">Blog Apps</NavLink>
      <NavLink to="/secret">Secret</NavLink>
    </div>
  );
};

export default Nav;
