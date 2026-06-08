import Providers from "./providers";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import FloatingDock from "@/components/FloatingDock";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://pias-majumdar.vercel.app"),
  title: "Pias Majumdar | Full Stack Developer & AI/ML Engineer",
  description: "Hi, I'm Pias Majumdar. A Full-Stack Engineer who codes at the intersection of robust backend architecture and interactive frontend design, powered by intelligent AI models.",
  keywords: ["AI/ML Engineer", "Full Stack Developer", "Deep Learning", "Next.js", "Pias Majumdar", "VIT-AP"],
  authors: [{ name: "Pias Majumdar" }],
  creator: "Pias Majumdar",
  openGraph: {
    title: "Pias Majumdar | Full Stack Developer & AI/ML Engineer",
    description: "Hi, I'm Pias Majumdar. A Full-Stack Engineer who codes at the intersection of robust backend architecture and interactive frontend design, powered by intelligent AI models.",
    url: "https://pias-majumdar.vercel.app",
    siteName: "Pias Majumdar Portfolio",
    images: [
      {
        url: "/pias-v2.png",
        width: 800,
        height: 800,
        alt: "Pias Majumdar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pias Majumdar | Full Stack Developer & AI/ML Engineer",
    description: "Hi, I'm Pias Majumdar. A Full-Stack Engineer who codes at the intersection of robust backend architecture and interactive frontend design, powered by intelligent AI models.",
    images: ["/pias-v2.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full scroll-smooth antialiased ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Preloader />
        <CustomCursor />
        <Providers>
          {children}
          <FloatingDock />
        </Providers>
      </body>
    </html>
  );
}
