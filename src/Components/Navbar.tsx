import { NavLink } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="mt-20 flex items-start gap-5 text-gray-400 ">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        about
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        project
      </NavLink>
      <NavLink
        to="/contribution"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        contribution
      </NavLink>
    </nav>
  );
};

export default Navbar;
