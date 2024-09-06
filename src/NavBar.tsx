import { Navbar } from "flowbite-react";
import enIcon from "./assets/en-icon.png";
import esIcon from "./assets/es-icon.png";
import { useEffect, useState } from "react";

type LangType = "es" | "en";

const langIcon: Record<LangType, string> = {
  es: esIcon,
  en: enIcon,
};

export function NavBar() {
  const [langStatus, setLangStatus] = useState<LangType>("es");
  const [langImage, setLangImage] = useState(langIcon[langStatus]);

  const toggleLang = () => {
    setLangStatus((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  useEffect(() => {
    setLangImage(langIcon[langStatus]);
  }, [langStatus]);

  return (
    <Navbar fluid rounded className="sm:w-[80%] sm:m-auto bg-gray-100">
      <Navbar.Brand href="#" className=" ">
        <span className="text-xl font-semibold text-yellow-100">Portfolio</span>
      </Navbar.Brand>
      <a href="#" className="sm:pl-28" onClick={toggleLang}>
        <img className="sm:w-5" src={langImage} alt="Language icon" />
      </a>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-white-100" href="#">
          Inicio
        </Navbar.Link>
        <Navbar.Link className="text-white-100" href="#">
          Sobre mi
        </Navbar.Link>
        <Navbar.Link className="text-white-100" href="#">
          Proyectos
        </Navbar.Link>
        <Navbar.Link className="text-white-100" href="#">
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
