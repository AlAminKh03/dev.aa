import Lottie from "lottie-react";
import clock from "../../assets/clock.json";
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import tailwind from "../../assets/logo/tailwind.png";
import sass from "../../assets/logo/sass.png";
import js from "../../assets/logo/Js.png";
import ts from "../../assets/logo/Ts.png";
import react from "../../assets/logo/react.png";
import next from "../../assets/logo/next.png";
import redux from "../../assets/logo/redux.png";
import graph from "../../assets/logo/apollo.png";
import node from "../../assets/logo/node.png";
import express from "../../assets/logo/express.png";
import mongo from "../../assets/logo/mongodb.png";

const SkillShowcase = () => {
  return (
    <div>
      <section className="mt-10">
        <div className="flex items-center">
          <h1 className="text-gray-50 text-lg font-bold ">
            {" "}
            Let's see who is been eating my time
          </h1>
          <Lottie animationData={clock} className="h-14 w-14" />
        </div>
        <div className="text-gray-100 mt-4 ">
          <h3 className="techHead1   bg-[#1d1d1d] inline-block p-2">
            Markup and styling
          </h3>
          <div className="flex items-center gap-4 mt-10 ">
            <img src={html} alt="html" className="w-14 h-14 markupImg" />
            <img src={css} alt="css" className="w-14 h-14 markupImg" />
            <img
              src={tailwind}
              alt="tailwind"
              className="w-14 h-14 markupImg"
            />
            <img src={sass} alt="sass" className="w-14 h-14 markupImg" />
          </div>
        </div>
        <div className="text-gray-100 mt-8 ">
          <h3 className="techHead1   bg-[#1d1d1d] inline-block p-2">
            Language
          </h3>
          <div className="flex items-center gap-4 mt-10 ">
            <img src={ts} alt="html" className="w-14 h-14 markupImg" />
            <img src={js} alt="css" className="w-14 h-14 markupImg" />
          </div>
        </div>
        <div className="text-gray-100 mt-8 ">
          <h3 className="techHead1   bg-[#1d1d1d] inline-block p-2">
            Frameworks and libraries
          </h3>
          <div className="flex items-center gap-4 mt-10 ">
            <img src={react} alt="html" className="w-14 h-14 markupImg" />
            <img src={next} alt="css" className="w-14 h-14 markupImg" />
            <img src={redux} alt="css" className="w-14 h-14 markupImg" />
            <img src={graph} alt="css" className="w-14 h-14 markupImg" />
          </div>
        </div>
        <div className="text-gray-100 mt-8 ">
          <h3 className="techHead1   bg-[#1d1d1d] inline-block p-2">
            Server side program & database
          </h3>
          <div className="flex items-center gap-4 mt-10 ">
            <img src={node} alt="html" className="w-14 h-14 markupImg" />
            <img
              src={express}
              alt="css"
              className="w-18 h-14 bg-[#8d8d8d] p-1 rounded-md"
            />
            <img src={mongo} alt="css" className="w-14 h-14 markupImg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillShowcase;
