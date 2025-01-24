import Image from "next/image";
import { Contact, NavbarItem } from "./components";

export function Header() {
  return (
    <header className="flex fixed top-3 w-full z-50">
      <div className="flex justify-between mx-auto w-[62.5rem] max-w-[98%] border border-[#324654] bg-[rgba(0,0,0,.7)] backdrop-blur-md p-1.5 rounded-full">
        <div className="flex items-center gap-2 select-none">
          <span className="flex h-8 w-8 relative rounded-full overflow-hidden">
            <Image
              alt="Perfil"
              src="https://avatars.githubusercontent.com/u/60114211"
              fill
              priority
            />
          </span>

          <h1 className="font-semibold text-base">Matheus Sena Rosa</h1>
        </div>

        <nav className="flex items-center mr-8">
          <ul className="flex gap-4">
            <NavbarItem text="Início" />
            <NavbarItem text="Sobre Mim" />
            <NavbarItem text="Portfólio" />
            <NavbarItem text="Experiências" />
          </ul>
        </nav>

        <Contact />
      </div>
    </header>
  );
}
