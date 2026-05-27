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
  title: "Marneni Anil Chiranjeeth | Backend & Systems-Oriented Developer",
  description: "Professional portfolio of Marneni Anil Chiranjeeth, a backend-focused systems-oriented student engineer. Explore projects in distributed caching architectures, real-time telemetry pipelines, and AI benchmark tools.",
  keywords: ["Software Engineer", "Backend Developer", "Systems Engineering", "Node.js", "Express.js", "Redis", "BullMQ", "FastAPI", "MongoDB", "PostgreSQL", "Docker", "MERN Stack"],
  authors: [{ name: "Marneni Anil Chiranjeeth" }],
  creator: "Marneni Anil Chiranjeeth",
  openGraph: {
    title: "Marneni Anil Chiranjeeth | Backend & Systems Portfolio",
    description: "Building modular, production-inspired backend systems and real-time workflows.",
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
    title: "Marneni Anil Chiranjeeth | Backend Developer",
    description: "Backend & Systems-Oriented Developer Portfolio",
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

