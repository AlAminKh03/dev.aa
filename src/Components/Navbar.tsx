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
          projects
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
        <a
          href="https://docs.google.com/document/d/1AabYcK1XUnV3xgopThy9LAJqhFJ2BZlPAK5K7K_em50/edit?usp=sharing"
          target="_blank"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 p-1 rounded-md resume hover:scale-110 transition-all transform duration-150 ease-linear"
        >
          <span className="text-gray-50 text-sm font-semibold ">Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
