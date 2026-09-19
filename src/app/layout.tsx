import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Preloader } from "../components/preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fransua John Villesis — Fullstack Developer",
  description:
    "Portfolio of Fransua John Villesis, a fullstack developer crafting minimal, fast, and thoughtful web experiences with React, Next.js, and TypeScript.",
  metadataBase: new URL("https://portfolio-ten-inky.vercel.app"),
  icons: {
    icon: [
      {
        url: "/FJLogo/fj-split-field-black-128.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/FJLogo/fj-split-field-white-128.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/FJLogo/fj-split-field-black-256.png",
  },
  openGraph: {
    title: "Fransua John Villesis — Fullstack Developer",
    description:
      "I build software that looks good and works even better. Minimal, fast, thoughtful web apps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fransua John Villesis — Fullstack Developer",
    description:
      "Minimal, fast, thoughtful web experiences. React / Next.js / TypeScript.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col grain">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
