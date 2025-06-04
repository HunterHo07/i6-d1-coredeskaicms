import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "CoreDeskAi - Universal Admin Dashboard | Zero-Code API Integration",
  description: "Transform any REST API into a powerful admin dashboard in minutes. No coding required. Real-time data, advanced filtering, Excel export, and beautiful UI.",
  keywords: "admin dashboard, API integration, no-code, CMS, back-office, data visualization, real-time analytics",
  authors: [{ name: "CoreDeskAi Team" }],
  creator: "CoreDeskAi",
  publisher: "CoreDeskAi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coredeskai.com",
    title: "CoreDeskAi - Universal Admin Dashboard",
    description: "Transform any REST API into a powerful admin dashboard in minutes. No coding required.",
    siteName: "CoreDeskAi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CoreDeskAi - Universal Admin Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreDeskAi - Universal Admin Dashboard",
    description: "Transform any REST API into a powerful admin dashboard in minutes. No coding required.",
    images: ["/og-image.jpg"],
    creator: "@coredeskai",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00d4ff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00d4ff" />
        <meta name="msapplication-TileColor" content="#00d4ff" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
