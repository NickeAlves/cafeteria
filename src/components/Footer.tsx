"use client";

import Link from "next/link";

import "./../styles/globals.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-[var(--brown-color)] w-full h-full py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center text-white justify-center gap-4 md:gap-6 text-center pb-4 hover:text-[var(--hover-navBar-text)]">
            <Link href="https://linkedin.com/in/nicolasfullstack">
              Copyright &copy; {new Date().getFullYear()} by Nicolas Alves. All
              rights reserved.
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4 invert">
          <a href="https://github.com/NickeAlves">
            <img
              src="/icons/github.png"
              alt="github"
              className="w-6 hover:scale-125 transition-transform duration-300"
            />
          </a>
          <a href="https://www.instagram.com/nicke.dev/">
            <img
              src="/icons/instagram.png"
              alt="instagram"
              className="w-6 hover:scale-125 transition-transform duration-300"
            />
          </a>
          <a href="https://linkedin.com/in/nicolasfullstack">
            <img
              src="/icons/linkedin.png"
              alt="linkedin"
              className="w-6 hover:scale-125 transition-transform duration-300"
            />
          </a>
          <a href="https://x.com/im_nicolasalves">
            <img
              src="/icons/x.png"
              alt="x"
              className="w-6 hover:scale-125 transition-transform"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
