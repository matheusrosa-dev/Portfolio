/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { variants } from "./utils";

export function HomeSection() {
  const [animation, setAnimation] = useState("down");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation((prev) => (prev === "base" ? "down" : "base"));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-gradient-radial h-screen flex justify-center items-center pb-16">
      <motion.div
        variants={variants}
        animate={animation}
        transition={{ duration: 4 }}
        className="flex flex-col items-center relative [&>*]:bg-gradient-text [&>*]:bg-clip-text [&>*]:hover:text-transparent [&>*]:text-white [&>h3]:text-transparent [&>h3]:hover:text-white"
      >
        <h3 className=" duration-300 text-base sm:text-lg">
          Desenvolver soluções
        </h3>

        <h2 className="font-bold tracking-tighter font-[oswald] select-none duration-300 text-[4rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem]">
          PORTFÓLIO
        </h2>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 select-none duration-300 text-4xl md:text-6xl lg:text-8xl">
          {"<"}
          <img
            alt="Logo M"
            src="/logo.png"
            className="size-[1.6rem] md:size-[2.6rem] lg:size-[4.3rem]"
          />
          {"/>"}
        </div>
      </motion.div>
    </section>
  );
}
