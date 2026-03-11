import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoResearch: A Recursive Research Synthesis Engine",
  description:
    "Architecture documentation for AutoResearch, an autonomous nightly research synthesis system that compounds insight quality across iterations through five recursive feedback loops.",
  openGraph: {
    title: "AutoResearch: A Recursive Research Synthesis Engine",
    description:
      "An autonomous nightly research synthesis system that compounds insight quality across iterations through five recursive feedback loops.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AutoResearch: A Recursive Research Synthesis Engine",
    description:
      "An autonomous nightly research synthesis system that compounds insight quality across iterations through five recursive feedback loops.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Nav />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-border py-12 px-6 text-center text-muted text-sm">
          <p>
            AutoResearch is an open architecture. Built with Claude Code +
            Notion MCP.
          </p>
          <p className="mt-2">
            <a
              href="https://github.com/CFLW-AI/AutoResearch"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
