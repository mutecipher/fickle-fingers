import Footer from "../components/Footer";
import Header from "../components/Header";
import { Inconsolata, Source_Code_Pro } from "@next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inconsolata.variable} ${sourceCodePro.variable} mx-auto min-h-screen max-w-3xl bg-black font-mono text-zinc-200 antialiased`}
    >
      <head />
      <body className="px-4 md:px-0">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
