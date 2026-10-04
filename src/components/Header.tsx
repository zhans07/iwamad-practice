import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";

type HeaderProps = {
  name: string;
  role: string;
};

function Header({ name, role }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header>
      <h1>{name}</h1>
      <p>{role}</p>

      <nav>
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
      </nav>

      <p>Likes: {likes}</p>
    </header>
  );
}

export default Header;