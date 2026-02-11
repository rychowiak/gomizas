
import { navLinks } from "../../constants";

const Navbar = () => {

  return (
    <nav className="">
      <div className="flex items-center justify-around">
        <a href="#home">
          <img
            src="images/logo1.png"
            alt="logo"
            className="size-20 rounded-full"
          />
        </a>

        <ul>
          {navLinks.map(({ id, title }) => (
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
