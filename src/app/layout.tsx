import type { Metadata } from "next";
import "./globals.css";
import { grotesk } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Loki - A série",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${grotesk.variable}`}>{children}</body>
    </html>
  );
}
