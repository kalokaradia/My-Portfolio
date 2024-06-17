/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
function GalleryComponent({ name, url }) {
	return (
		<div className="p-4 mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<img className="object-cover w-full h-auto" src={url} alt={name} />
			<p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
				{name}
			</p>
		</div>
	);
}

export default function Gallery() {
	return (
		<section className="pb-32 bg-white pt-36 dark:bg-gray-900" id="gallery">
			<div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
				<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
					Gallery
				</h1>
				<div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-3 lg:grid-cols-4">
					<GalleryComponent
						url="/android-chrome-192x192.png"
						name="Logo"
					/>
					<GalleryComponent
						url="/ttt-with-react.vercel.app.png"
						name="Tic Tac Toe With React"
					/>
					<GalleryComponent
						url="/flamingoo-note.vercel.app.png"
						name="Flamingoo Note"
					/>
				</div>
			</div>
		</section>
	);
}
