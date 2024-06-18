/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function BlogComponent({ img, title, url, message }) {
  return (
    <div className="mx-auto max-w-sm rounded-lg border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <Link href={url}>
        <img className="rounded-t-lg" src={img} alt={title} />
      </Link>
      <div className="p-5">
        <Link href={url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {message}
        </p>
        <Link
          href={url}
          className="inline-flex items-center rounded-lg bg-teal-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Kunjungi
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
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <section className="bg-white pb-32 pt-36 dark:bg-gray-900" id="blog">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Blog
        </h1>
        <div className="mt-10 grid grid-cols-1 space-y-5 lg:grid-cols-2 lg:space-y-0">
          <BlogComponent
            title="Rekomendasi Extensions Untuk Visual Studio Code Menurut Saya"
            img="/article/extensions.png"
            url="article/web-dev-extensions"
            message="Extensions yang bisa kalian pakai khususnya dalam pembuatan website."
          />
        </div>
      </div>
    </section>
  );
}
