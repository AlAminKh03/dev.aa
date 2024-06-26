import Contact from "./About/Contact";
import FirstHeading from "./About/FirstHeading";
import MiddleDescription from "./About/MiddleDescription";
import ProjectCatalog from "./About/ProjectCatalog";
import SkillShowcase from "./About/SkillShowcase";

const Home = () => {
  return (
    <main className=" mt-20 mb-40 ">
      <FirstHeading />
      <ProjectCatalog />
      <MiddleDescription />
      <SkillShowcase />
      <Contact />
    </main>
  );
};

export default Home;
