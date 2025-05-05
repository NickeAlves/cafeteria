"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import "./../styles/globals.css";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`p-2 relative overflow-hidden text-white group hover:duration-300${
          pathname === "/" ? "text-white" : "text-white"
        }`}
      >
        Inicio
        <span
          className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
            pathname === "/" ? "w-full" : "w-0 group-hover:w-full "
          }`}
        ></span>
      </Link>
      <Link
        href="/carta"
        className={`font-sans p-2 relative overflow-hidden text-white group hover:duration-300${
          pathname === "/carta" ? "text-white" : "text-white"
        }`}
      >
        Carta
        <span
          className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
            pathname === "/carta" ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </Link>
      <Link
        href="/#tiendas"
        className={`font-sans p-2 relative overflow-hidden group hover:duration-300 ${
          pathname === "/#tiendas" ? "text-white" : "text-white"
        }`}
      >
        Tíendas
        <span
          className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
            pathname === "/#tiendas" ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </Link>
      <Link
        href="/contacto"
        className={`font-sans p-2 relative overflow-hidden group hover:duration-300 ${
          pathname === "/contacto" ? "text-white" : "text-white"
        }`}
      >
        Contacto
        <span
          className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
            pathname === "/contacto" ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </Link>
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-[var(--hover-brown-color)]"
            : "bg-[var(--brown-color)]"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
          <Link href={"/"}>
            <img
              src="/logo.png"
              alt="photo"
              className="rounded-full w-20 h-20 hover:scale-75 duration-300"
            />
          </Link>

          <div className="gap-6 items-center font-sans hidden md:flex">
            <NavLinks />
          </div>

          <div className="md:hidden">
            <button onClick={toggleNavBar} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="md:hidden bg-[var(--brown-color)] w-full absolute top-20 left-0 p-4 shadow-2xl transition-all duration-300 max-h-[500px] overflow-hidden ease-in-out"
            style={{
              maxHeight: isOpen ? "500px" : "0",
            }}
          >
            <div className="flex flex-col items-center gap-4 bg-[var(--custom-color)]">
              <NavLinks />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
