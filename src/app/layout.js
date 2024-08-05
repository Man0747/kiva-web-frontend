import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kiva App",
  description: "A College Platform for Students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <section className="max-w-[640px] m-auto   px-9 md:px-0">
          <Navbar/>
       
          {children}
        </section>
      </body>
    </html>
  );
}
