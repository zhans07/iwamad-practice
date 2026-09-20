type HeaderProps = {
  name: string;
  role: string;
};

function Header({ name, role }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{role}</p>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#goals">Goals</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;