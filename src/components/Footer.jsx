import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-40 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="#" className="flex items-center">
              <Image
                src="/logo.ico"
                className="me-3"
                alt="Logo"
                width={32}
                height={32}
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                K R N
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="space-y-4 font-medium text-gray-500 dark:text-gray-400">
                <li>
                  <Link
                    target="_blank"
                    href="https://flowbite.com/"
                    className="hover:underline"
                  >
                    Flowbite
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://react.dev/"
                    className="hover:underline"
                  >
                    React
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://nextjs.org/"
                    className="hover:underline"
                  >
                    Next.js
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://vercel.com/"
                    className="hover:underline"
                  >
                    Vercel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    href="https://github.com/kalokaradia"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2023 Kaloka Radia Nanda . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <Link
              target="_blank"
              href="https://github.com/kalokaradia"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
