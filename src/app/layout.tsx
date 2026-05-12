import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SystemOverrideProvider } from "@/context/SystemOverrideContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Marneni Anil Chiranjeeth | Software Development Engineer",
  description: "Professional portfolio of Marneni Anil Chiranjeeth, a Software Development Engineer specializing in Distributed Systems, Backend Engineering, and AI-integrated systems. Explore projects in isolated code execution and real-time monitoring.",
  keywords: ["Software Engineer", "Backend Developer", "Distributed Systems", "Go", "Python", "Kubernetes", "Kafka", "Real-time Systems"],
  authors: [{ name: "Marneni Anil Chiranjeeth" }],
  creator: "Marneni Anil Chiranjeeth",
  openGraph: {
    title: "Marneni Anil Chiranjeeth | Systems Engineering Portfolio",
    description: "Building scalable distributed systems and robust backend architecture.",
    url: "https://anilmarneni.com",
    siteName: "Anil Chiranjeeth Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marneni Anil Chiranjeeth Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marneni Anil Chiranjeeth | Software Engineer",
    description: "Backend & Distributed Systems Portfolio",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${instrumentSerif.variable} ${mono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SystemOverrideProvider>
            {children}
          </SystemOverrideProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

