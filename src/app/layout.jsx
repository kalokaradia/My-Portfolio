import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Kaloka Radia Nanda",
  description: "Kaloka Radia Nanda Portfolio Website",
  keywords:
    "anime,list anime,wesbite,react,nextjs,kalokaradiananda,HTML,CSS,JavaScript,JS,JSX",
  author: "kalokaradiananda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
