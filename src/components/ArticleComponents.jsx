export function ArticleBy({ by }) {
  return (
    <p className="mb-2 text-left text-lg font-bold text-gray-700 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
      By : {by}
    </p>
  );
}

export function ArticleDate({ date }) {
  return (
    <p className="mb-8 text-left text-lg font-bold text-gray-700 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
      Date : {date}
    </p>
  );
}

export function ArticleList({ list }) {
  return (
    <li className="mb-8 text-left indent-4 text-xl font-bold text-gray-700 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-2xl">
      {list}
    </li>
  );
}

export function ArticleText({ message }) {
  return (
    <p className="mb-8 text-left indent-4 text-lg text-gray-700 dark:text-gray-400 sm:px-16 lg:px-48 lg:text-xl">
      {message}
    </p>
  );
}

export function ArticleTitle({ title }) {
  return (
    <h1 className="mx-auto mb-10 max-w-3xl text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
      {title}
    </h1>
  );
}
