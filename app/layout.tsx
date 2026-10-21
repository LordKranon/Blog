import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Placeholder Title",
  description: "Placeholder Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="border-b border-black/[.08] dark:border-white/[.145]">
          <nav className="max-w-2xl mx-auto px-6 py-4 flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/games" className="hover:underline underline-offset-4">
              Games
            </Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/[.08] dark:border-white/[.145] py-6">
          <div className="max-w-2xl mx-auto px-6 text-xs text-black/60 dark:text-white/60">
            Placeholder Description
          </div>
        </footer>
      </body>
    </html>
  );
}
