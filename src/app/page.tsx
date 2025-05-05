"use client";

import "./../styles/globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import CarouselProducts from "@/components/CarouselProducts";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[50vh] sm:h-[400px] bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--brown-color)]"></div>
    </div>
  ),
});

const tiendas = [
  {
    id: "1",
    nombre: "Cafetería ® Cordón",
    lat: 42.342316,
    lng: -3.699293,
  },
  {
    id: "2",
    nombre: "Cafetería ® San Juan",
    lat: 42.342806,
    lng: -3.698773,
  },
  {
    id: "3",
    nombre: "Cafetería ® Av. de La Paz",
    lat: 42.34451,
    lng: -3.6941,
  },
];

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <head>
        <title>Inicio | Cafetería</title>
        <link rel="icon" href="./web-logo.png" />
      </head>

      <Header />

      <main className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40">
        <div className="relative w-full max-w-7xl min-h-[40vh] sm:min-h-[50vh] mb-12 sm:mb-16">
          <img
            src="background-cafeteria.jpg"
            alt="Interior de Cafetería ®"
            className="w-full h-full object-cover rounded-xl"
            loading="eager"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-white text-center">
            <div className="max-w-md">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] sm:drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] lg:drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] uppercase">
                Café acogedor con aroma único y sabores que enamoran.
              </h1>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src="logo.png"
                alt="Logo Cafetería ®"
                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <section
          id="productos"
          className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 gap-6 w-full max-w-7xl"
        >
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            Nuestros productos
          </h1>
          <CarouselProducts />
          <p className="font-extralight text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto">
            En <strong>Cafetería ®</strong>, ofrecemos una exquisita selección
            de cafés aromáticos, tés naturales, dulces artesanales y sabrosos
            salados, sin olvidar nuestras famosas{" "}
            <strong>tapas españolas</strong>, preparadas con recetas
            tradicionales que conquistan a todos los paladares.
          </p>
          <Link
            href="/carta"
            className={`px-4 sm:px-6 py-2 sm:py-3 text-white font-bold rounded-full bg-[var(--brown-color)] hover:bg-[var(--hover-brown-color)] duration-300 transition-all shadow-md text-sm sm:text-base ${
              pathname === "/carta" ? "text-white" : "text-white"
            }`}
            aria-label="Ver nuestra carta completa"
          >
            Descubre nuestra carta
          </Link>
        </section>

        <section
          id="historia"
          className="px-4 sm:px-6 lg:px-8 py-12 w-full max-w-7xl"
        >
          <div className="p-4 sm:p-6 lg:p-8 bg-[var(--brown-color)] rounded-xl shadow-lg">
            <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl mb-4">
              La historia de Cafetería ®
            </h1>
            <p className="font-extralight text-white text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              Fundada en 1897 en el corazón de Burgos,{" "}
              <strong>Cafetería ®</strong> comenzó como un pequeño rincón donde
              los amantes del café podían disfrutar de una bebida hecha con
              pasión y dedicación. <br />
              <br />
              Todo comenzó cuando un joven barista llamado Javier, inspirado por
              los aromas y sabores del café, decidió abrir un espacio único
              donde cada taza contara una historia. A lo largo de los años,{" "}
              <strong>Cafetería ®</strong> ha mantenido su compromiso con la
              calidad, utilizando solo los mejores granos de café seleccionados
              de plantaciones de todo el mundo. <br />
              <br />A pesar de los cambios en el tiempo, la esencia de la
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

        <section
          id="tiendas"
          className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Nuestras tiendas en Burgos
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra tu Cafetería ® más cercana
            </p>
          </div>

          <div className="w-full h-[50vh] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
            <Map tiendas={tiendas} />
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {tiendas.map((tienda) => (
              <div
                key={tienda.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {tienda.nombre}
                </h3>
                <div className="flex items-center text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-[var(--brown-color)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Burgos, España</span>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${tienda.lat},${tienda.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 border border-transparent text-sm sm:text-base font-medium rounded-full shadow-sm text-white bg-[var(--brown-color)] hover:bg-[var(--hover-brown-color)] transition-colors duration-300 w-full"
                  aria-label={`Cómo llegar a ${tienda.nombre}`}
                >
                  Cómo llegar
                  <svg
                    className="ml-1 sm:ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
