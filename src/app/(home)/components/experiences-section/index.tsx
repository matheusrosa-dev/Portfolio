"use client";

import { LogoItem } from "./components";
import { logos } from "./utils";

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="min-h-screen bg-gradient-projects flex flex-col items-center pb-14"
    >
      <span className="flex w-[50rem] bg-gradient-text h-[1px] max-w-[90%]" />

      <div className="mt-10 md:my-auto">
        <h3 className="text-center mb-12 text-transparent bg-clip-text bg-gradient-text text-xl sm:text-2xl md:text-3xl">
          Experiências
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center gap-y-6">
          {logos.map((item, index) => (
            <LogoItem
              imgElement={item.imgElement}
              title={item.title}
              key={item.title}
              delay={0.05 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
