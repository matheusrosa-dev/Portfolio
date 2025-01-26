import { Marquees } from "./components";

export function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="h-screen bg-black flex flex-col items-center relative overflow-hidden"
    >
      <span className="flex w-[50rem] bg-gradient-text h-[1px] max-w-[90%] z-[2]" />

      <div className="absolute w-full h-full z-0">
        <Marquees />
      </div>

      <div className="absolute bg-gradient-black w-full h-full z-[1]"></div>

      <div className="my-auto z-[2]">
        <h3 className="text-transparent text-center bg-clip-text bg-gradient-text text-xl sm:text-2xl md:text-3xl">
          Sobre mim
        </h3>

        <h4 className="text-4xl font-medium text-center mt-4 mb-2">Olá!</h4>

        <p className="text-center text-lg w-[90%] max-w-[36rem] mx-auto">
          Me chamo Matheus e atuo na área de desenvolvimento de software há mais
          de 3 anos. Tenho experiência com desenvolvimento web e mobile usando
          React.js, React Native e Node.js. Estou sempre aprimorando meus
          conhecimentos e indo atrás de novos desafios.
        </p>

        <div className="mt-4 flex flex-col justify-center gap-1">
          <span className="text-center block  text-xs text-gray-400">
            Quer saber mais sobre mim?
          </span>

          <button className="mx-auto hover:opacity-70 duration-300">
            Contato
          </button>
        </div>
      </div>
    </section>
  );
}
