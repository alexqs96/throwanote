import { GithubLogo, LinkedinLogo } from "@/components/Icons";
import "./globals.css";
import localFont from "next/font/local";
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/Header";

const virgilFont = localFont({ src: "../../public/fonts/Virgil.woff2" });

export const metadata = {
  title: "Throw a Note",
  description: "Crea notas anonimas publicas o privadas en throw a note.",
  openGraph: {
    type: "website",
    url: "https://throwanote.vercel.app",
    title: "Throw a Note",
    siteName: "Throw a Note",
    description: "Crea notas anonimas publicas o privadas en throw a note.",
    images: "/img/og_image.png",
  },
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
        <footer className="absolute bottom-10 z-10 px-[1%] max-lg:hidden">
          <div className="md:flex hidden items-center gap-6 w-fit rotate-[20deg]">
            <a
              className="-mt-8 -rotate-12 transition-transform duration-200 hover:-rotate-[19deg]"
              href="https://www.linkedin.com/in/alexander-mamani"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Linkedin Profile"
            >
              <LinkedinLogo size={54} />
            </a>

            <a
              className="transition-transform duration-200 hover:-rotate-[19deg]"
              href="https://github.com/alexqs96"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Github Profile"
            >
              <GithubLogo size={54} />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
