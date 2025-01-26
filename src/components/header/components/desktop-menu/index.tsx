import Image from "next/image";
import { Contact, NavbarItem } from "./components";
import { RiMenu3Line } from "react-icons/ri";

type Props = {
  onOpenMobileMenu: () => void;
};

export function DesktopMenu({ onOpenMobileMenu }: Props) {
  const onClickNavbarItem = (elementId: string) => {
    if (elementId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (elementId === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(elementId);

    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="flex justify-between mx-auto w-[62.5rem] border-b  border-[#324654] bg-[rgba(0,0,0,.6)] backdrop-blur-sm p-1.5  sm:border sm:rounded-full">
        <div className="flex items-center gap-2 select-none">
          <span className="flex h-8 w-8 relative rounded-full overflow-hidden">
            <Image
              alt="Perfil"
              src="https://avatars.githubusercontent.com/u/60114211"
              fill
              priority
            />
          </span>

          <h1 className="font-semibold text-base flex gap-1">
            Matheus
            <span className="hidden sm:block">Sena Rosa</span>
          </h1>
        </div>

        <nav className="items-center mr-8 hidden lg:flex">
          <ul className="flex gap-4">
            <NavbarItem
              text="Início"
              onClick={() => onClickNavbarItem("home")}
            />
            <NavbarItem
              text="Sobre Mim"
              onClick={() => onClickNavbarItem("about-me")}
            />
            <NavbarItem
              text="Portfólio"
              onClick={() => onClickNavbarItem("projects")}
            />
            <NavbarItem
              text="Experiências"
              onClick={() => onClickNavbarItem("experiences")}
            />
          </ul>
        </nav>

        <div className="flex gap-2">
          <Contact onClick={() => onClickNavbarItem("contact")} />

          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="hover:opacity-70 duration-300 block sm:hidden"
          >
            <RiMenu3Line className="size-8" />
          </button>
        </div>
      </header>

      <button
        type="button"
        onClick={onOpenMobileMenu}
        className="bg-clip-text hover:opacity-70 duration-300 hidden sm:block lg:hidden"
      >
        <RiMenu3Line className="size-8" />
      </button>
    </>
  );
}
