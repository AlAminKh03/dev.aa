import { NavLink } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between">
      <div className="mt-20 flex items-start gap-5 text-gray-400 ">
        {" "}
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
      </div>
      <div className="flex items-center justify-center mt-20 gap-4">
        <a href="">
          <FaXTwitter className="text-white text-xl hover:scale-110 transition-all transform duration-150 ease-linear" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100008742093722"
          target="_blank"
        >
          {" "}
          <BsFacebook className="text-[#0866ff] text-xl hover:scale-110 transition-all transform duration-150 ease-linear" />
        </a>

        <a href="https://www.linkedin.com/in/alaminkhan03/" target="_blank">
          {" "}
          <BsLinkedin className="text-[#0a66c2] text-xl hover:scale-110 transition-all transform duration-150 ease-linear" />
        </a>

        <a href="https://github.com/AlAminKh03" target="_blank">
          <BsGithub className="text-white text-xl hover:scale-110 transition-all transform duration-150 ease-linear" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
