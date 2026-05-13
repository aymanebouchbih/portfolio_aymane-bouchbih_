import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aymane Bouchbih | Ingénieur Fullstack",
  description: "Portfolio de développeur moderne utilisant React et Next.js démontrant une interface utilisateur futuriste anti-gravité flottante, Spring Boot, React et DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased bg-white text-slate-900 selection:bg-sky-200`}>
        {children}
      </body>
    </html>
  );
}
