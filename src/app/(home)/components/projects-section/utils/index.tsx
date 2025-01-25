/* eslint-disable @next/next/no-img-element */
export const projects = [
  {
    title: "Guruja",
    splashBackground: `#d0ff00`,
    cardBackground: `#1b1926`,
    textColor: `#ffffff`,
    description:
      "Plataforma desenvolvida em Next.js voltada a estudos online de concursos públicos.",
    imgElement: () => (
      <img
        src="guruja.jpg"
        alt="Guruja"
        draggable="false"
        className="h-full w-full object-cover select-none"
      />
    ),
  },
  {
    title: "Universal Forecast",
    splashBackground: `#015982`,
    cardBackground: `#ffffff`,
    description:
      "Plataforma desenvolvida em React.js voltada a gestão e administração.",
    imgElement: () => (
      <div className="h-[13rem] flex items-center justify-center pb-[3rem] select-none">
        <img src="universal.jpg" alt="Universal" draggable="false" />
      </div>
    ),
  },
  {
    title: "Ranking dos Políticos",
    splashBackground: `#021d2e`,
    cardBackground: `#d9d9d9`,
    description:
      "Plataforma desenvolvida em Next.js que avalia o desempenho de políticos brasileiros.",
    imgElement: () => (
      <div className="h-[13rem] flex items-center justify-center bg-[#d9d9d9] pb-[3rem] select-none">
        <img src="ranking.png" alt="Ranking dos Políticos" draggable="false" />
      </div>
    ),
  },
  {
    title: "AFPESP",
    description:
      "Plataforma desenvolvida em React Native para notícias relacionadas a funcionários públicos de São Paulo.",
    splashBackground: `#24a32c`,
    textColor: `#ffffff`,
    cardBackground: `#1b1c24`,
    imgElement: () => (
      <div className="h-[13rem] flex items-center justify-center pb-[3rem] bg-[#1b1c24]">
        <img
          src="afpesp.png"
          alt="AFPESP"
          draggable="false"
          className="size-[8rem] select-none drag"
        />
      </div>
    ),
  },
];
