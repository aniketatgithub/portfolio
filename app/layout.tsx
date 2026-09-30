import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aniket-tikariha.web.app"),
  title: "Aniket Tikariha — Production Engineer",
  description:
    "Production Engineer at Meta building AI-native product systems. Previously NetApp, Viasat, and Cheeni Labs. M.S. Software Engineering, San José State University.",
  openGraph: {
    title: "Aniket Tikariha — Production Engineer",
    description:
      "Production Engineer at Meta building AI-native product systems. Previously NetApp, Viasat, and Cheeni Labs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} bg-[#0a0a0b] font-sans text-zinc-100 antialiased selection:bg-amber-400 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
