"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavigationMenu({ idNav, textNav }) {
  return (
    <li>
      <Link
        href={idNav}
        className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-teal-700 lg:dark:hover:bg-transparent lg:dark:hover:text-teal-500"
      >
        {textNav}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed z-[999] w-full border-white bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.ico"
            className="h-8"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            K R N
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="font-comfortaa mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800 lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-transparent lg:dark:bg-transparent rtl:space-x-reverse">
            <NavigationMenu idNav="/#home" textNav="Home" />
            <NavigationMenu idNav="/#about" textNav="About" />
            <NavigationMenu idNav="/#project" textNav="Project" />
            <NavigationMenu idNav="/#skill" textNav="Skill" />
            <NavigationMenu idNav="/#experience" textNav="Experience" />
            <NavigationMenu idNav="/#gallery" textNav="Gallery" />
            <NavigationMenu idNav="/#contact" textNav="Contact" />
            <li
              onClick={toggleDarkMode}
              className="ml-3 cursor-pointer py-4 lg:ml-0 lg:py-0"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="moon h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="sun h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
