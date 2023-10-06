import preview1 from "../../assets/preview-1.jpeg";
import preview2 from "../../assets/preview 2.jpeg";
import preview3 from "../../assets/preview-3.jpeg";
import preview4 from "../../assets/preview-4.jpeg";
import preview5 from "../../assets/preview-5.jpeg";
import preview6 from "../../assets/preview-6.jpeg";
import myself from "../../assets/myself.jpg";

const ProjectCatalog = () => {
  return (
    <section className="grid grid-cols-12 gap-3 mt-10">
      <div className="col-span-4 ">
        <img
          src={preview1}
          alt="preview 1"
          className="mb-5 rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <img
          src={preview3}
          alt="preview 1"
          className="rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="col-span-4">
        <img
          src={preview5}
          alt="preview 1"
          className="mb-5 rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
        />

        <img
          src={myself}
          alt="preview 1"
          className=" rounded-md  h-[175px] mx-auto mb-5 object-cover"
        />
        <img
          src={preview2}
          alt="preview 1"
          className="rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="col-span-4">
        <img
          src={preview4}
          alt="preview 1"
          className="mb-5 rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <img
          src={preview6}
          alt="preview 1"
          className="rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default ProjectCatalog;
