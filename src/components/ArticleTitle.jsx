export default function ArticleTitle({ title }) {
  return (
    <h1 className="mx-auto mb-10 max-w-3xl text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
      {title}
    </h1>
  );
}
