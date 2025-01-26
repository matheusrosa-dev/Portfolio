/* eslint-disable @next/next/no-img-element */
import Marquee from "react-fast-marquee";

const imagesSrc = [
  "/marquee/tech1.jpg",
  "/marquee/tech2.jpg",
  "/marquee/tech3.jpg",
  "/marquee/tech4.jpg",
  "/marquee/tech5.jpg",
];

export function Marquees() {
  const getImagesSrcByIndexesArray = (indexes: number[]) => {
    return indexes.map((index) => imagesSrc[index]);
  };

  return (
    <>
      <Marquee speed={20}>
        {imagesSrc.map((src, index) => (
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
        {imagesSrc.map((src, index) => (
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
