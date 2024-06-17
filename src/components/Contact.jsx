/* eslint-disable no-undef */
import { useState } from "react";
import { Resend } from "./emails/resend";
import { Email } from "./emails/email";

export const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`email: ${email}, name: ${name}, message: ${message}`);
        const resend = new Resend("re_8KM4jBHj_8LCKB8F9YoMk2T5sRsfM7RtU");

        await resend.sendEmail({
            from: email,
            to: "kalokaradia@gmail.com",
            subject: `My Portfolio : ${name}`,
            react: <Email url="https://example.com" />,
        });

        setEmail("");
        setName("");
        setMessage("");
    };

    return (
        <section className="bg-white pb-32 pt-36 dark:bg-gray-900" id="contact">
            <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    Contact
                </h1>
                <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Emailmu
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="dark:shadow-sm-light mx-auto block w-full max-w-xl rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Nama
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="dark:shadow-sm-light mx-auto block w-full max-w-xl rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Halo, siapa namamu?"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Pesanmu
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="mx-auto block w-full max-w-xl rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-teal-500 dark:focus:ring-teal-500"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tinggalkan pesanmu disini..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="mx-auto flex items-center justify-center rounded-lg bg-teal-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 sm:w-fit"
                    >
                        Kirim{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="ml-2 mt-0.5 size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </section>
    );
};
