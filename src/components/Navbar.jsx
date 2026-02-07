"use client";
import clsx from "clsx";
import { useLenis } from "lenis/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const[isOpen, setIsOpen] = useState(false);

  const lenis = useLenis();
  const halfLength = Math.floor(navLinks.length / 2);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 ",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-sm",
      )}
    >
      {/* mobile navbar */}
      <div className="container flex h-14 items-center max-lg:px-5">
        <a
          href="#home"
          onClick={() => lenis?.scrollTo("#hero", { lerp: 0.1 })}
          className="lg:hidden flex-1 cursor-pointer z-2"
        >
          <img
            src="/images/logo1.png"
            alt="logo"
            className="rounded-full h-32"
            onClick={() => setIsOpen(false)}
          />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  {navLinks.slice(0, halfLength).map(({ id, title }) => (
                    <a
                      key={id}
                      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                    >
                      {title}
                    </a>
                  ))}
                </li>

                <li className="nav-logo">
                  <a
                    href=""
                    onClick={() => lenis?.scrollTo("#hero", { lerp: 0.1 })}
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer"
                  >
                    <img
                      src="/images/logo1.png"
                      alt="logo"
                      className="rounded-full h-40"
                    />
                  </a>
                </li>

                <li className="nav-li">
                  {navLinks.slice(halfLength).map(({ id, title }) => (
                    <a
                      key={id}
                      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                    >
                      {title}
                    </a>
                  ))}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* toggle menu button */}
        <button
          className="relative lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            className="size-1/2 object-contain"
            alt="magic"
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            width={20}
            height={20}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
