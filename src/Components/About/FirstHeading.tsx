type Props = {};

const FirstHeading = (props: Props) => {
  return (
    <article>
      <h2 className="text-7xl font-semibold text-gray-50 ">
        Hello,
        <br /> I'm Al Amin{" "}
      </h2>

      <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 mt-3">
        A frontend Developer
      </h3>

      <p className="break-keep text-gray-100 leading-loose mt-8 ">
        I'm a frontend developer, optimist, learner, teacher and{" "}
        <span className="inline-flex items-center justify-center bg-[#1d1d1d] border border-gray-200 rounded-md">
          🐱‍💻
          <span>open source contributor</span>
        </span>
        . I currently doing my Internship as frontend developer at NiftyIt
        Experience at React and Next.js, where I help the community for React.js
        Graphql and Next.js.
      </p>
    </article>
  );
};

export default FirstHeading;
