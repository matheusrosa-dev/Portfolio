import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* eslint-disable @next/next/no-img-element */
export function ContactFooter() {
  return (
    <footer className="flex flex-col">
      <span className="bg-gradient-text h-[1px] opacity-30" />

      <div className="w-[62.5rem] max-w-full mx-auto py-4 px-24 flex items-center flex-1 justify-between flex-col md:flex-row">
        <div className="flex items-center gap-1 text-[2rem] select-none">
          {"<"}
          <img alt="Logo M" src="/logo.png" className="size-[1.6rem]" />
          {"/>"}
        </div>

        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className="text-center text-lg font-medium">Contato</h4>
          <span className="flex items-center gap-2">
            <FiMail />
            <p>matheussenarosa8@gmail.com</p>
          </span>

          <span className="flex items-center gap-2 w-fit mx-auto">
            <FaWhatsapp />
            <p>+55 (11) 96464-5573</p>
          </span>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            className="text-2xl cursor-pointer hover:opacity-70 duration-300"
            href="https://www.linkedin.com/in/matheusrosa-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            className="text-2xl cursor-pointer hover:opacity-70 duration-300"
            href="https://github.com/matheusrosa-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
