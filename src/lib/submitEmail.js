"use server";

import Email from "@/components/emails/email";
import { Resend } from "resend";

export default async function submitEmail({ email, name, message }) {
  console.log(`email: ${email}, name: ${name}, message: ${message}`);
  const resend = new Resend(process.env.RESEND_API_KEY);

  const result = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "kalokaradia@gmail.com",
    subject: `My Portfolio : ${name}`,
    reply_to: email,
    react: <Email message={message} senderEmail={email} />,
  });
  return result;
}
