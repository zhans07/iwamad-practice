
import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";
import logo from "../assets/logo.svg";

type HeaderProps = {
  name: string;
  role: string;
};

function Header({ name, role }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <img src={logo} alt="" className="site-header__logo" />
        <div>
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
      </div>

      <nav className="site-header__nav" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Skills
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Register
        </NavLink>
      </nav>

      <p className="site-header__likes">Likes: {likes}</p>
    </header>
  );
}

export default Header;
