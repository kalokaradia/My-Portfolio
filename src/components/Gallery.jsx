import Image from "next/image";

function GalleryComponent({ name, url }) {
  return (
    <div className="mx-auto overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image
        className="h-auto w-full rounded-lg object-cover"
        src={url}
        alt={name}
        width={5000}
        height={5000}
      />
      <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
        {name}
      </p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="bg-white pb-32 pt-36 dark:bg-gray-900" id="gallery">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Gallery
        </h1>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <GalleryComponent url="/android-chrome-192x192.png" name="Logo" />
          <GalleryComponent
            url="/ttt-with-react.vercel.app.png"
            name="Tic Tac Toe With React"
          />
          <GalleryComponent
            url="/flamingoo-note.vercel.app.png"
            name="Flamingoo Note"
          />
          <GalleryComponent url="/kaloka.jpg" name="Kaloka Radia Nanda" />
        </div>
      </div>
    </section>
  );
}
