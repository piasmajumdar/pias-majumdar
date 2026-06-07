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
  title: "Pias Majumdar | AI/ML Engineer & Full Stack Developer",
  description: "Portfolio of Pias Majumdar, building AI-powered web products. Specializing in deep learning, multimodal architectures, and production-ready full-stack applications.",
  keywords: ["AI/ML Engineer", "Full Stack Developer", "Deep Learning", "Next.js", "Pias Majumdar", "VIT-AP"],
  authors: [{ name: "Pias Majumdar" }],
  creator: "Pias Majumdar",
  openGraph: {
    title: "Pias Majumdar | AI/ML Engineer & Full Stack Developer",
    description: "Building intelligent AI-powered web products. Exploring NLP, Computer Vision, and Time Series Forecasting.",
    url: "https://piasmajumdar.vercel.app",
    siteName: "Pias Majumdar Portfolio",
    locale: "en_US",
    type: "website",
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
