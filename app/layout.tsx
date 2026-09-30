import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aniket-tikariha.web.app"),
  title: "Aniket Tikariha — Production Engineer",
  description:
    "Aniket Tikariha, Production Engineer at Meta. Backend systems that ship fast and stay up. Previously NetApp, Viasat, Cheeni Labs.",
  openGraph: {
    title: "Aniket Tikariha — Production Engineer",
    description:
      "Production Engineer at Meta. Backend systems that ship fast and stay up.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${grotesk.variable} bg-[#0a0a0b] font-sans text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
