import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "../components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baroninc Events",
  description: "Baroninc Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script src="https://unpkg.com/lenis@1.1.5/dist/lenis.min.js"></script>
      </Head>
      <body className={inter.className}>
        <Header />
        {children}

      </body>
    </html>
  );
}
