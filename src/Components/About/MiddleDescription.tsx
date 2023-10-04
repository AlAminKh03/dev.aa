import myself2 from "../../assets/myself-2.jpg";
import dev from "../../assets/dev.jpeg";
import { FiArrowUpRight } from "react-icons/fi";
import { SiMozilla, SiNextdotjs, SiReact } from "react-icons/si";

const MiddleDescription = () => {
  return (
    <div>
      {" "}
      <article>
        <p className="  text-gray-100 leading-loose mt-8 ">
          {" "}
          Developed several projects with React and Next.js. Understanding
          everything there is to know about web development. I'm writing and
          enhancing the code.Every day,I try to improve my javascript expertise.
          Sometimes write cheatsheet for developers 🤫 at Dev Sonket . Creating
          an army of coders by assisting in the creation of a better future 💪.
        </p>
      </article>
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
      <article>
        <p className="  text-gray-100 leading-loose mt-8 ">
          {" "}
          📚 I read lot of docs even i started this journey by reading a book
          named{" "}
          <cite className="text-xs">
            A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics.
          </cite>{" "}
          Some of my favourite docs are{" "}
          <button className="inline-flex items-center justify-center bg-[#1d1d1d] gap-2 px-1 rounded-md mx-2">
            <SiMozilla className="w-4 h-4" />
            mdn
          </button>
          <button className="inline-flex items-center justify-center bg-[#1d1d1d] gap-2 px-1 rounded-md mx-2">
            <SiNextdotjs className="w-4 h-4" />
            Next.js
          </button>
          <button className="inline-flex items-center justify-center bg-[#1d1d1d] gap-2 px-1 rounded-md mx-2">
            <SiReact className="w-4 h-4" />
            React.js
          </button>
        </p>
      </article>
    </div>
  );
};

export default MiddleDescription;
