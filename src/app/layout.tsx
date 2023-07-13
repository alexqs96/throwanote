import { GithubLogo, LinkedinLogo } from "@/components/Icons";
import "./globals.css";
import localFont from "next/font/local";
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/Header";

const virgilFont = localFont({ src: "../../public/fonts/Virgil.woff2" });

export const metadata = {
  metadataBase: new URL(`https://throwanote.vercel.app`),
  title: "Throw a Note",
  openGraph:{
    type: "website",
    url: "https://throwanote.vercel.app",
    title: "Throw a Note",
    siteName: "Throw a Note",
    description: 'Crea notas anonimas publicas o privadas en throw a note.',
    images: "/img/og_image.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className="max-w-[1920px] mx-auto border-x border-x-black/70 bg-white"
    >
      <body className={"paperLines relative " + virgilFont.className}>
        <div className="md:paperHoles">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Header />
        <PageWrapper>{children}</PageWrapper>
       
      </body>
    </html>
  );
}
