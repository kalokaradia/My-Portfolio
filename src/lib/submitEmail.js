"use server";
import Email from "@/components/emails/email";
import { Resend } from "resend";
export default async function submitEmail({ email, name, message }) {
	console.log(`email: ${email}, name: ${name}, message: ${message}`);
	const resend = new Resend("re_jW1Mob8e_9DtnkoLKxZuZXdeVReyGBJdf");

	const result = await resend.emails.send({
		from: "Acme <onboarding@resend.dev>",
		to: "kalokaradia@gmail.com",
		subject: `My Portfolio : ${name}`,
		react: <Email url="https://example.com" />,
	});
	return result;
}
