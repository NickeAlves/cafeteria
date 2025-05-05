import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

export default function Bebidas() {
  return (
    <>
      <Head>
        <title>Bebidas | Cafetería</title>
        <link rel="icon" href="/web-logo.png" />
      </Head>
      <Header />
      <ScrollToTopButton />
      <main className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-24 sm:pt-32 lg:pt-32 gap-6">
        <div className="flex gap-2 w-full bg-gray-300 rounded-xl shadow-xl">
          <Image
            src="/products/bebidas/cofee.jpg"
            alt="Americano"
            width={200}
            height={100}
            className="rounded-2xl shadow-xl"
          />
          <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold">Americano</h1>
            <p className="font-extralight pt-12">
              Café americano elaborado a mano. Sabor equilibrado, aroma
              envolvente y cuerpo ligero. Preparado con dedicación para quienes
              disfrutan de un buen café, sin prisas y con gusto.
            </p>
            <p className="font-medium text-2xl pt-12">1,50 €</p>
          </div>
        </div>
        <div className="flex gap-2 w-full bg-gray-300 rounded-xl shadow-xl">
          <Image
            src="/products/bebidas/coffe-milk.jpg"
            alt="Café con leche"
            width={200}
            height={100}
            className="rounded-2xl shadow-xl"
          />
          <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold">Café con leche</h1>
            <p className="font-extralight pt-12">
              Café con leche artesanal preparado a mano. La combinación perfecta
              de café intenso y leche cremosa. Una bebida suave y reconfortante,
              ideal para cualquier momento del día.
            </p>
            <p className="font-medium text-2xl pt-12">1,50 €</p>
          </div>
        </div>
        <div className="flex gap-2 w-full bg-gray-300 rounded-xl shadow-xl">
          <Image
            src="/products/bebidas/capuccino.jpg"
            alt="Capuccino"
            width={200}
            height={100}
            className="rounded-2xl shadow-xl"
          />
          <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold">Capuccino</h1>
            <p className="font-extralight pt-12">
              Capuchino artesanal hecho a mano. Espuma suave, café intenso y un
              toque de dulzura. Preparado con mimo y con ingredientes
              seleccionados para que disfrutes cada sorbo como un momento
              especial.
            </p>
            <p className="font-medium text-2xl pt-12">2,00 €</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
