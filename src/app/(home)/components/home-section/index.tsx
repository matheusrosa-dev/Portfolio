"use client";

import Image from "next/image";
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
        <h3 className="text-lg duration-300">Desenvolver soluções</h3>

        <h2 className="text-[12rem] font-bold tracking-tighter font-[oswald] select-none duration-300">
          PORTFÓLIO
        </h2>

        <div className="flex items-center text-8xl gap-4 select-none duration-300">
          {"<"}
          <Image alt="Logo M" src="/logo.png" width={70} height={70} />
          {"/>"}
        </div>
      </motion.div>
    </section>
  );
}
