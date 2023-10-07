import myself2 from "../../assets/myself-2.jpg";
import dev from "../../assets/dev.jpeg";
import { FiArrowUpRight } from "react-icons/fi";
import { FaMedium } from "react-icons/fa6";
import { DiGithubAlt } from "react-icons/di";
import { BiLoader } from "react-icons/bi";

const Contribution = () => {
  return (
    <div className="my-20 min-w-full">
      <div className="bg-[#1d1d1d] min-w-full px-14 py-10  rounded-md">
        <h1 className="text-lg text-gray-100">
          Writing Cheatsheet at ডেভ সংকেত ✍️ . Check out Some ....
        </h1>
        <section className="grid grid-cols-12 gap-5 ">
          <a
            href="https://devsonket.com/html#%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%AE%E0%A6%BF%E0%A6%A1%E0%A6%BF%E0%A7%9F%E0%A6%BE%20(%E0%A6%85%E0%A6%A1%E0%A6%BF%E0%A6%93%20%E0%A6%8F%E0%A6%AC%E0%A6%82%20%E0%A6%AD%E0%A6%BF%E0%A6%A1%E0%A6%BF%E0%A6%93)"
            target="_blank"
            className="border-2 border-gray-100 rounded-md px-5 py-2 mt-8 bg-[#1d1d1d] flex items-center gap-5 group col-span-6"
          >
            <div className="relative">
              <img
                src={myself2}
                alt="myself"
                className="w-16 h-16 mx-auto rounded-full object-cover"
              />
              <img
                src={dev}
                alt="myself"
                className="w-8 h-8 mx-auto rounded-full absolute -bottom-2 right-0 bg-white  p-2 z-10"
              />
            </div>
            <div className="text-gray-100 text-center">
              <h3 className="">Cheatsheet on Html</h3>
              <p className="text-xs">Dev Sonket</p>
            </div>
            <FiArrowUpRight className="w-6 h-6 text-white group-hover:-translate-y-2 group-hover: translate-x-2 transition-all delay-100 duration-300 ease-in-out" />
          </a>
          <a
            href="https://devsonket.com/typescript#%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%AB%E0%A7%87%E0%A6%B8%20%E0%A6%B9%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A6%B8%20%E0%A6%93%20%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A6%B8"
            target="_blank"
            className="border-2 border-gray-100 rounded-md px-5 py-2 mt-8 bg-[#1d1d1d] flex items-center gap-5 group col-span-6"
          >
            <div className="relative">
              <img
                src={myself2}
                alt="myself"
                className="w-16 h-16 mx-auto rounded-full object-cover"
              />
              <img
                src={dev}
                alt="myself"
                className="w-8 h-8 mx-auto rounded-full absolute -bottom-2 right-0 bg-white  p-2 z-10"
              />
            </div>
            <div className="text-gray-100 text-center">
              <h3 className="  ">Cheatsheet on TS</h3>
              <p className="text-xs">Dev Sonket</p>
            </div>
            <FiArrowUpRight className="w-6 h-6 text-white group-hover:-translate-y-2 group-hover: translate-x-2 transition-all delay-100 duration-300 ease-in-out" />
          </a>
        </section>
      </div>
      <div className="mt-10 ">
        <h1 className="text-gray-100">
          Planning about writing at{" "}
          <span className="inline-flex items-center justify-center bg-[#1d1d1d] border border-gray-200 rounded-md gap-2 p-1">
            <FaMedium className="w-4 h-4" />
            <span>Medium</span>
          </span>{" "}
          and contributing more on{" "}
          <span className="inline-flex items-center justify-center bg-[#1d1d1d] border border-gray-200 rounded-md gap-2 p-1 ">
            <DiGithubAlt className="w-4 h-4" />
            <span>Open Source</span>
          </span>{" "}
        </h1>
      </div>
      <div className="mt-20 flex mx-auto items-center justify-center">
        <button
          type="button"
          className="bg-[#1d1d1d] p-10 flex items-center justify-center gap-5 rounded-md
        "
        >
          <BiLoader className="animate-spin-slow text-gray-50 w-10 h-10" />{" "}
          <span className="text-gray-100 text-xl font-bold">
            My Own blog is coming soon....
          </span>
        </button>
      </div>
    </div>
  );
};

export default Contribution;
