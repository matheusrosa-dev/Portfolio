import { Card } from "./components";
import { projects } from "./utils";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-projects flex flex-col items-center pb-14"
    >
      <span className="flex w-[50rem] bg-gradient-text h-[1px] max-w-[90%]" />

      <h3 className="mt-10 mb-4 text-transparent bg-clip-text bg-gradient-text text-xl sm:text-2xl md:text-3xl">
        Projetos em que participei
      </h3>

      <div className="my-auto flex w-full card-sm:w-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full max-w-full">
          {projects.map((item) => (
            <Card {...item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
