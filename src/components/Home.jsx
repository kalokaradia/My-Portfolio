/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-white pt-20 dark:bg-gray-900" id="home">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <Image
          src="/kaloka.jpg"
          alt="Kaloka Radia Nanda"
          width={250}
          height={250}
          className="mx-auto mb-10 rounded-[100%] border-4 border-teal-500 shadow-lg dark:border-teal-700"
        />
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Hello, I&apos;am <span className="block">Kaloka Radia Nanda</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
          I&apos;am a Student and Programmer
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            href="#about"
            className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-900"
          >
            About Me
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="dark:hover:bg-gray-70 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 sm:ms-4"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
