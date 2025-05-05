"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Carta() {
  const pathname = usePathname();

  return (
    <>
      <Head>
        <title>Carta | Cafetería</title>
        <link rel="icon" href="./web-logo.png" />
      </Head>
      <Header />
      <ScrollToTopButton />
      <main className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-32">
        <div className="relative w-full max-w-6xl">
          <img
            src="logo-menu.png"
            alt="Logo Carta"
            className="w-full h-40 sm:h-60 md:h-60 object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl rounded-xl bg-[var(--brown-color)] pr-6 pl-6 shadow-2xl sm:text-5xl font-bold text-white text-center">
              Carta
            </h1>
          </div>
        </div>
        <div className="pt-6 pb-6 flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
          <div className="rounded-2xl w-60 flex flex-col p-2 justify-center bg-slate-200 items-center">
            <img
              src="coffee-preparation-concept-still-life.jpg"
              alt="Bebidas"
              className="w-full h-20 sm:h-40 md:h-60 object-cover rounded-2xl shadow-xl"
            />
            <h1 className="flex justify-center font-bold text-xl p-2">
              Bebidas
            </h1>
            <p className="text-start p-2 font-extralight">
              Sabores únicos para cada momento. Café, té y más para disfrutar
              cada sorbo.
            </p>
            <div className="p-2">
              <Link
                href="/carta/bebidas"
                className={`px-4 sm:px-6 py-2 sm:py-3 text-white font-bold rounded-full bg-[var(--hover-navBar-text)] hover:bg-[var(--brown-color)] duration-200 transition-all shadow-md text-sm sm:text-base ${
                  pathname === "/carta/bebidas" ? "text-white" : "text-white"
                }`}
                aria-label="Ver nuestra carta de bebidas"
              >
                Descubre más
              </Link>
            </div>
          </div>
          <div className="rounded-2xl w-60 flex flex-col p-2 justify-center bg-slate-200 items-center">
            <img
              src="spanish-snack-tapas.jpg"
              alt="Salados"
              className="w-full h-20 sm:h-40 md:h-60 object-cover rounded-2xl shadow-xl"
            />

            <h1 className="flex justify-center font-bold text-xl p-2">
              Salados
            </h1>
            <p className="p-2 font-extralight">
              Frescura y sabor en cada bocado. Ideal para una pausa deliciosa.
            </p>
            <div className="p-2">
              <Link
                href="/carta/salados"
                className={`px-4 sm:px-6 py-2 sm:py-3 text-white font-bold rounded-full bg-[var(--hover-navBar-text)] hover:bg-[var(--brown-color)] duration-200 transition-all shadow-md text-sm sm:text-base ${
                  pathname === "/carta/salados" ? "text-white" : "text-white"
                }`}
                aria-label="Ver nuestra carta de salados"
              >
                Descubre más
              </Link>
            </div>
          </div>
          <div className="rounded-2xl w-60 flex flex-col p-2 justify-center bg-slate-200 items-center">
            <img
              src="dulces.jpg"
              alt="Dulces"
              className="w-full h-60 sm:h-40 md:h-60 object-cover rounded-2xl shadow-xl"
            />
            <h1 className="flex justify-center font-bold text-xl p-2">
              Dulces
            </h1>
            <p className="p-2 font-extralight">
              Dulzura artesanal que conquista. Perfectos para cerrar con gusto.
            </p>
            <div className="p-2">
              <Link
                href="/carta/dulces"
                className={`px-4 sm:px-6 py-2 sm:py-3 text-white font-bold rounded-full bg-[var(--hover-navBar-text)] hover:bg-[var(--brown-color)] duration-200 transition-all shadow-md text-sm sm:text-base ${
                  pathname === "/carta/dulces" ? "text-white" : "text-white"
                }`}
                aria-label="Ver nuestra carta de dulces"
              >
                Descubre más
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
