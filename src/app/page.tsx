"use client";

import "./../styles/globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import CarouselProducts from "@/components/CarouselProducts";
import dynamic from "next/dynamic";

const Mapa = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 rounded-xl flex items-center justify-center">
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
        <title>Inicio | Cafetería ®</title>
        <link rel="icon" href="web-logo-px.png" />
        <meta
          name="description"
          content="Cafetería ® - Café de especialidad en Burgos con más de un siglo de tradición"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <Header />

      <main className="flex flex-col items-center justify-center p-6 pt-40">
        <div className="relative w-full max-w-6xl min-h-[300px] mb-16">
          <img
            src="background-cafeteria.jpg"
            alt="Interior de Cafetería ®"
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
          <div className="absolute top-1/2 left-1/2 md:left-6 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 text-white max-w-[90%] md:max-w-md text-center md:text-left flex flex-col items-center md:items-start gap-4">
            <h1 className="text-2xl pr-52 sm:text-3xl md:text-4xl font-extralight mb-4">
              Café acogedor con aroma único y sabores que enamoran.
            </h1>
          </div>
          <div className="flex flex-row items-center gap-4 absolute top-1/3 left-1/2 md:right-6 transform -translate-x-1/2 md:translate-x-0">
            <img
              src="logo.png"
              alt="Logo Cafetería ®"
              className="w-36 h-36 rounded-full shadow-lg"
              loading="lazy"
            />
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl mb-4 text-white">
              Cafetería ®
            </h1>
          </div>
        </div>

        <section
          id="productos"
          className="flex flex-col justify-center items-center p-6 gap-6 w-full max-w-6xl"
        >
          <h1 className="font-bold text-2xl md:text-3xl">
            - Nuestros productos -
          </h1>
          <CarouselProducts />
          <p className="font-extralight p-6 pl-8 pr-8 md:pl-28 md:pr-28 text-center">
            En <strong>Cafetería ®</strong>, ofrecemos una exquisita selección
            de cafés aromáticos, tés naturales, dulces artesanales y sabrosos
            salados, sin olvidar nuestras famosas{" "}
            <strong>tapas españolas</strong>, preparadas con recetas
            tradicionales que conquistan a todos los paladares.
          </p>
          <Link
            href="/carta"
            className={`px-6 py-3 text-white font-bold rounded-full bg-[var(--brown-color)] hover:bg-[var(--hover-brown-color)] duration-300 transition-all shadow-md ${
              pathname === "/carta" ? "text-white" : "text-white"
            }`}
            aria-label="Ver nuestra carta completa"
          >
            Descubre más
          </Link>
        </section>

        <section id="historia" className="p-6 w-full max-w-6xl">
          <div className="p-6 bg-[var(--brown-color)] rounded-xl shadow-lg">
            <h1 className="font-bold text-white text-2xl md:text-3xl mb-4">
              La historia de Cafetería ®
            </h1>
            <p className="font-extralight text-white p-4 md:p-6 text-justify">
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
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nuestras tiendas en Burgos
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra tu Cafetería ® más cercana
            </p>
          </div>

          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
            <Mapa tiendas={tiendas} />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiendas.map((tienda) => (
              <div
                key={tienda.id}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tienda.nombre}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg
                    className="h-5 w-5 mr-2 text-[var(--brown-color)]"
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
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-[var(--brown-color)] hover:bg-[var(--hover-brown-color)] transition-colors duration-300 w-full"
                  aria-label={`Cómo llegar a ${tienda.nombre}`}
                >
                  Cómo llegar
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
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
