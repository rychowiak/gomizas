import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <nav className="">
      <div>
        <a href="#home">
          <img src="images/logo1.png" alt="logo" className="size-32 rounded-full" />
        </a>

        <ul>
          {navLinks.map(({id, title}) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
