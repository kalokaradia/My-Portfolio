/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
function ProjectComponent({ img, title, url, message }) {
	return (
		<div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-lg dark:border-gray-700 dark:bg-gray-800">
			<a target="_blank" href={url}>
				<img className="rounded-t-lg" src={img} alt={title} />
			</a>
			<div className="p-5">
				<a target="_blank" href={url}>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{message}
				</p>
				<a
					target="_blank"
					href={url}
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
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
				</a>
			</div>
		</div>
	);
}

export default function Project() {
	return (
		<section className="pb-32 bg-white pt-36 dark:bg-gray-900" id="project">
			<div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
				<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
					Project
				</h1>
				<div className="grid grid-cols-1 mt-10 space-y-5 lg:grid-cols-2 lg:space-y-0">
					<ProjectComponent
						title="Tic Tac Toe With React"
						img="/ttt-with-react.vercel.app.png"
						url="https://ttt-with-react.vercel.app/"
						message="Saya membuat permainan tic tac toe sederhana dengan react dan vitejs sebagai bundler."
					/>
					<ProjectComponent
						title="Flamingoo Note"
						img="/flamingoo-note.vercel.app.png"
						url="https://flamingoo-note.vercel.app/"
						message="Catatan sederhana yang saya buat dengan react dan vitejs sebagai bundler."
					/>
				</div>
			</div>
		</section>
	);
}
