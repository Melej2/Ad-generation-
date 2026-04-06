import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdGen — AI Ad Generator for Ecommerce",
  description: "Generate high-converting video and image ad prompts for your ecommerce products using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-gray-50 antialiased">{children}</body>
    </html>
  );
}
