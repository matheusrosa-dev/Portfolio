import { Card } from "./components";
import { projects } from "./utils";

export function ProjectsSection() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center pb-14">
      <span className="flex w-[50rem] bg-gradient-text h-[1px] max-w-[98%]" />

      <h3 className="mt-10 mb-4 text-transparent bg-clip-text bg-gradient-text text-3xl">
        Projetos que participei
      </h3>

      <div className="my-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((item) => (
            <Card {...item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
