import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Partha Sarathy | Java Backend Developer",
  description:
    "Java Backend Developer with expertise in Spring Boot, REST APIs, and cloud-native solutions. Building scalable systems at TCS.",
  keywords: [
    "Java Developer",
    "Backend Developer",
    "Spring Boot",
    "REST APIs",
    "Software Engineer",
  ],
  authors: [{ name: "Partha Sarathy" }],
  openGraph: {
    type: "website",
    title: "Partha Sarathy | Java Backend Developer",
    description:
      "Java Backend Developer with expertise in Spring Boot, REST APIs, and cloud-native solutions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}
