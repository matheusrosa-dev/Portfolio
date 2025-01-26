import { Header } from "@components";
import {
  AboutMeSection,
  ExperiencesSection,
  HomeSection,
  ProjectsSection,
} from "./components";

function Home() {
  return (
    <>
      <Header />

      <HomeSection />

      <AboutMeSection />

      <ProjectsSection />

      <ExperiencesSection />
    </>
  );
}

export default Home;
