import { Inter } from "next/font/google";
import "@/globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/5b7dd6c1d3.js" crossOrigin="anonymous"></Script>
      </head>
      <body className={`${inter.className} text-slate-700 antialiased`}>
        {children}
        <Script src="./flowbite.min.js"></Script>
      </body>
    </html>
  );
}
