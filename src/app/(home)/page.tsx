import { Header } from "@components";
import {
  AboutMeSection,
  ContactFooter,
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

      <ContactFooter />
    </>
  );
}

export default Home;
