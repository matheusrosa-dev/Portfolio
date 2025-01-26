/* eslint-disable @next/next/no-img-element */
import Marquee from "react-fast-marquee";

const imagesSrc = [
  "/tech1.jpg",
  "/tech2.jpg",
  "/tech3.jpg",
  "/tech4.jpg",
  "/tech5.jpg",
];

export function Marquees() {
  const getImagesSrcByIndexesArray = (indexes: number[]) => {
    return indexes.map((index) => imagesSrc[index]);
  };

  return (
    <>
      <Marquee speed={20}>
        {getImagesSrcByIndexesArray([0, 1, 2, 3, 4]).map((src, index) => (
          <img
            src={src}
            key={`first-marquee-${index}`}
            alt="Linhas de código em uma tela de computador"
            className="h-[30vh] border-black border-4"
          />
        ))}
      </Marquee>

      <Marquee speed={20} direction="right">
        {getImagesSrcByIndexesArray([3, 1, 4, 0, 2]).map((src, index) => (
          <img
            src={src}
            key={`second-marquee-${index}`}
            alt="Linhas de código em uma tela de computador"
            className="h-[30vh] border-black border-4"
          />
        ))}
      </Marquee>

      <Marquee speed={20}>
        {getImagesSrcByIndexesArray([0, 1, 2, 3, 4]).map((src, index) => (
          <img
            src={src}
            key={`three-marquee-${index}`}
            alt="Linhas de código em uma tela de computador"
            className="h-[30vh] border-black border-4"
          />
        ))}
      </Marquee>

      <Marquee speed={20} direction="right">
        {getImagesSrcByIndexesArray([3, 1, 4, 0, 2]).map((src, index) => (
          <img
            src={src}
            key={`fourth-marquee-${index}`}
            alt="Linhas de código em uma tela de computador"
            className="h-[30vh] border-black border-4"
          />
        ))}
      </Marquee>
    </>
  );
}
