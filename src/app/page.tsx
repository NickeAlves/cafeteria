"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import CarouselProducts from "@/components/CarouselProducts";

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <head>
        <title>Inicio | Cafetería</title>
        <link rel="icon" href="web-logo.png" />
      </head>
      <Header />
      <main className="flex flex-col items-center justify-center p-6 pt-40">
        <div className="relative w-full max-w-6xl min-h-[300px]">
          <img
            src="background-cafeteria.jpg"
            alt="cafeteria"
            className="w-full h-full object-cover rounded-xl"
          />

          <div
            className="
              absolute top-1/2 
              left-1/2 md:left-6 
              transform -translate-y-1/2 
              -translate-x-1/2 md:translate-x-0
              text-white 
              max-w-[90%] md:max-w-md 
              text-center md:text-left
              flex flex-col items-center md:items-start gap-4
            "
          >
            <h1 className="text-2xl pr-52 sm:text-3xl md:text-4xl font-extralight mb-4">
              Café acogedor con aroma único y sabores que enamoran.
            </h1>
          </div>
          <div className="flex flex-row items-center gap-4 absolute top-1/3 left-1/2 md:right-6 ">
            <img
              src="logo.png"
              alt="logo"
              className="md:right-6 w-36 h-36 rounded-full shadow-lg"
            />
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl mb-4 text-white">
              Cafetería ®
            </h1>
          </div>
        </div>
        <section
          id="#productos"
          className="flex flex-col justify-center items-center p-6 gap-6"
        >
          <h1 className="font-bold text-2xl">- Nuestros productos -</h1>
          <CarouselProducts />
          <p className="font-extralight p-6 pl-28 pr-28">
            En <strong>Cafetería ®</strong>, ofrecemos una exquisita selección
            de cafés aromáticos, tés naturales, dulces artesanales y sabrosos
            salados, sin olvidar nuestras famosas{" "}
            <strong>tapas españolas</strong>, preparadas con recetas
            tradicionales que conquistan a todos los paladares.
          </p>
          <Link
            href="/carta"
            className={`pl-4 pr-4 p-2 text-white font-extrabold rounded-full bg-[var(--brown-color)] hover:bg-[var(--hover-brown-color)] duration-300${
              pathname === "/carta" ? "text-white" : "text-white"
            }`}
          >
            Descubre más
          </Link>
        </section>

        <section id="#laHistoria" className="p-6">
          <div className="p-6 bg-[var(--brown-color)] rounded-xl">
            <h1 className="font-bold text-white">La historia de Cafetería ®</h1>
            <p className="font-extralight text-white p-6">
              Fundada en 1897 en el corazón de Burgos,{" "}
              <strong>Cafetería ®</strong> comenzó como un pequeño rincón donde
              los amantes del café podían disfrutar de una bebida hecha con
              pasión y dedicación. <br></br>
              <br></br>Todo comenzó cuando un joven barista llamado Javier,
              inspirado por los aromas y sabores del café, decidió abrir un
              espacio único donde cada taza contara una historia. A lo largo de
              los años, <strong>Cafetería ®</strong> ha mantenido su compromiso
              con la calidad, utilizando solo los mejores granos de café
              seleccionados de plantaciones de todo el mundo. <br></br>{" "}
              <br></br>A pesar de los cambios en el tiempo, la esencia de la
              cafetería sigue siendo la misma: ofrecer un ambiente acogedor y
              cálido, donde cada cliente se siente como en casa. Hoy en día,{" "}
              <strong>Cafetería ®</strong> sigue siendo un símbolo en Burgos, un
              lugar donde los habitantes y visitantes pueden disfrutar de un
              café excepcional acompañado de momentos inolvidables. Con más de
              un siglo de historia, <strong>Cafetería ®</strong> ha logrado
              mantenerse como un referente en la ciudad, ofreciendo no solo
              café, sino también una experiencia que conecta a las personas a
              través de una bebida que ha trascendido generaciones.
            </p>
          </div>
        </section>
      </main>
      <footer className=""></footer>
    </>
  );
}
