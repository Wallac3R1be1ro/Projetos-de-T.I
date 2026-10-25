import { useEffect, useState } from "react";
import logo from "../src/assets/logo.png"; // ajuste o caminho se o arquivo ficar em outra pasta

// Fonte única dos links: desktop e mobile usam o mesmo array.
const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Explore", href: "#explore" },
  { label: "Contacts", href: "#contacts" },
];

// Mesmo breakpoint do `xl:` do Tailwind (1280px).
const DESKTOP_QUERY = "(min-width: 1280px)";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Fecha o menu se a tela for ampliada até o layout desktop (ex.: girar o aparelho).
  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    const handleChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Fecha com a tecla Esc, só enquanto o menu estiver aberto.
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="relative z-50 flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
      {/* Logo */}
      <a href="#home">
        <img
          src={logo}
          alt="Logo da empresa"
          className="w-20 hover:scale-105 transition-all"
        />
      </a>

      {/* Menu desktop */}
      <nav aria-label="Navegação principal" className="hidden xl:block">
        <ul className="flex items-center gap-12 font-semibold text-base">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Busca
      <div className="relative hidden md:flex items-center justify-center gap-3">
        <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
        <input
          type="text"
          placeholder="Search..."
          aria-label="Buscar"
          className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
        />
      </div>*/}

      {/* Botão do menu mobile */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        className="xl:hidden"
      >
        <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} text-5xl`}></i>
      </button>

      {/* Menu mobile
          - top-full: cola no fim do header, qualquer que seja a altura dele
          - invisible + opacity-0 + pointer-events-none: fechado de verdade
            (sem cliques fantasmas e fora da navegação por Tab) */}
      <nav
        id="mobile-menu"
        aria-label="Navegação mobile"
        className={`absolute xl:hidden top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center font-semibold text-lg">
          {LINKS.map(({ label, href }) => (
            <li key={label} className="w-full">
              <a
                href={href}
                onClick={closeMenu}
                className="block w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
