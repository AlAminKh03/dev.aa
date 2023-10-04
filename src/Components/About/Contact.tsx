import { FiArrowUpRight } from "react-icons/fi";
const Contact = () => {
  return (
    <div className="mt-20">
      <p className="text-center font-bold text-gray-200 text-xl">
        Get in touch
      </p>
      <div className="flex items-center justify-center gap-10">
        <div>
          <a
            href="mailto:alaminkhan6203@gmail.com"
            title="alaminkhan6203@gmail.com"
            className="text-gray-100 inline-flex items-center justify-center group bg-[#1d1d1d] border border-gray-600 rounded-md px-5 py-2 mt-8 gap-5 "
          >
            Email me
            <FiArrowUpRight className="w-6 h-6 text-white group-hover:-translate-y-2 group-hover: translate-x-2 transition-all delay-100 duration-300 ease-in-out" />
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/AlAminKhan6203"
            target="_blank"
            title="twitter.com/AlAminKhan6203"
            className="text-gray-100 inline-flex items-center justify-center group bg-[#1d1d1d] border border-gray-600 rounded-md px-5 py-2 mt-8 gap-5 "
          >
            Follow me
            <FiArrowUpRight className="w-6 h-6 text-white group-hover:-translate-y-2 group-hover: translate-x-2 transition-all delay-100 duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
