/* eslint-disable react/prop-types */
const KBDComponent = ({ skill }) => {
    return (
        <kbd className="rounded-lg border border-gray-200 bg-gray-300 px-2 py-1.5 text-base font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100">
            {skill}
        </kbd>
    );
};

export const Skill = () => {
    return (
        <section className="bg-white pb-32 pt-36 dark:bg-gray-900" id="skill">
            <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    Skill
                </h1>
                <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    <KBDComponent skill="HTML" />
                    <KBDComponent skill="CSS" />
                    <KBDComponent skill="JS" />
                    <KBDComponent skill="Tailwind CSS" />
                    <KBDComponent skill="Bootstrap" />
                    <KBDComponent skill="React" />
                    <KBDComponent skill="Node.js" />
                    <KBDComponent skill="Python" />
                </div>
            </div>
        </section>
    );
};
