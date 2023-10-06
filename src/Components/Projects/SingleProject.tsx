import next from "../../assets/logo/next.png";
import react from "../../assets/logo/react.png";
import { BsGithub, BsGlobeAmericas } from "react-icons/bs";
import { FcGlobe } from "react-icons/fc";
import { BiLoader } from "react-icons/bi";

interface ProjectProps {
  project: {
    id: number;
    name: string;
    imgUrl: string;
    type: string;
    link: string;
    github: string;
    techs: string[];
    status: string;
  };
}

const SingleProject = ({ project }: ProjectProps) => {
  return (
    <div className="border-2 border-gray-400 bg-black ">
      {/* img area  */}
      <a href="" target="_blank" className="relative">
        <img
          src={project.imgUrl}
          alt=""
          className="w-96 h-64 object-contain p-4"
        />
        {project.type === "next" ? (
          <img
            src={next}
            alt=""
            className="absolute top-2 right-2 w-12 h-12  animate-spin-slow bg-[#c2c2c2] p-1 rounded-full"
          />
        ) : (
          <img
            src={react}
            alt=""
            className="absolute top-2 right-2 w-12 h-12  animate-spin-slow bg-[#181818] p-1 rounded-full"
          />
        )}
      </a>
      <div>
        <p className="font-semibold text-lg text-gray-100 border-2  border-t-gray-400 border-x-0 border-b-0 p-2">
          {project.name}
        </p>
        <ul className="flex items-center gap-1 flex-wrap p-2">
          {project.techs.map((tech, index) => (
            <li className="bg-[#2c2c2c] text-sm p-1 text-gray-100 rounded-md">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 ">
        <a
          href={project.link}
          className="  border-2 border-gray-400 border-l-0 border-b-0 p-2  text-gray-100 group     transform transition-all duration-50 ease-linear "
        >
          <p className="  transform transition-all duration-150 ease-linear flex items-center justify-center group-hover:scale-125">
            {" "}
            <BsGithub className="w-6 h-6 " />
          </p>
        </a>
        {project.status === "active" ? (
          <a className="  border-2 border-gray-400 border-b-0  border-x-0 p-2 text-gray-100 group    transform transition-all duration-50 ease-linear cursor-pointer ">
            <p className="group-hover:scale-125  transform transition-all duration-300 ease-linear flex items-center justify-center ">
              {" "}
              <FcGlobe className="w-8 h-8 animate-spin-slow " />
            </p>
            <span className="absolute flex h-3 w-3 top-1 right-[40%]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500 delay-150"></span>
            </span>
          </a>
        ) : (
          <button
            type="button"
            className="  border-2 border-gray-400 border-b-0  border-x-0 p-2 text-gray-100 group    transform transition-all duration-50 ease-linear  "
            disabled
          >
            <p className=" flex items-center justify-center ">
              {" "}
              <BiLoader className="w-8 h-8 " />
              <span>Not hosted</span>
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
