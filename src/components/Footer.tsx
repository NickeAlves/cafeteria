"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./../styles/globals.css";

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <footer className="bg-[var(--brown-color)] w-full h-full py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center pb-4">
            <Link
              href="/rights"
              className={`font-sans text-white hover:text-[var(--hover-navBar-text)] transition-colors text-sm md:text-base ${
                pathname === "/rights" ? "underline" : ""
              }`}
            >
              Copyright &copy; {new Date().getFullYear()} by Nicolas Alves. All
              rights reserved.
            </Link>
            <Link
              href="/terms"
              className={`font-sans text-white hover:text-[var(--hover-navBar-text)] transition-colors text-sm md:text-base ${
                pathname === "/terms" ? "underline" : ""
              }`}
            >
              Terms of Use
            </Link>
            <Link
              href="/policy"
              className={`font-sans text-white hover:text-[var(--hover-navBar-text)] transition-colors text-sm md:text-base ${
                pathname === "/policy" ? "underline" : ""
              }`}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4 invert">
          <a href="https://github.com/NickeAlves">
            <img
              src="/icons/github.png"
              alt="github"
              className="w-6 hover:scale-125 transition-transform"
            />
          </a>
          <a href="https://www.instagram.com/nicke.dev/">
            <img
              src="/icons/instagram.png"
              alt="instagram"
              className="w-6 hover:scale-125 transition-transform"
            />
          </a>
          <a href="https://linkedin.com/in/nicolasfullstack">
            <img
              src="/icons/linkedin.png"
              alt="linkedin"
              className="w-6 hover:scale-125 transition-transform"
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
