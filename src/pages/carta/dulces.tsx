import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Dulces() {
  return (
    <>
      <Head>
        <title>Dulces | Cafetería</title>
        <link rel="icon" href="/web-logo.png" />
      </Head>
      <Header />
      <ScrollToTopButton />
      <main className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-32"></main>
      <Footer />
    </>
  );
}
