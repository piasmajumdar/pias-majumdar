import Providers from "./providers";
import "./globals.css";

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
    <html lang="en" className="h-full scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
