import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundCanvas from "@/components/layout/BackgroundCanvas";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import { portfolioData } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.developer.name} | ${portfolioData.developer.title}`,
    template: `%s | ${portfolioData.developer.name}`,
  },
  description: portfolioData.developer.summary,
  keywords: [
    "Jakka Harika Devi",
    "Data Engineering",
    "Data Scientist",
    "Python Developer",
    "SQL Developer",
    "AWS Cloud",
    "Power BI",
    "Generative AI",
    "Computer Science Portfolio",
  ],
  authors: [{ name: portfolioData.developer.name }],
  creator: portfolioData.developer.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jakka-harika-devi-portfolio.vercel.app",
    title: `${portfolioData.developer.name} | Data Engineering & Cloud Portfolio`,
    description: portfolioData.developer.summary,
    siteName: `${portfolioData.developer.name} Portfolio`,
    images: [
      {
        url: portfolioData.developer.avatarUrl,
        width: 1200,
        height: 630,
        alt: portfolioData.developer.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.developer.name} | Portfolio`,
    description: portfolioData.developer.summary,
    creator: "@harikajakka",
    images: [portfolioData.developer.avatarUrl],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} antialiased bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <BackgroundCanvas />
          <Navbar />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
