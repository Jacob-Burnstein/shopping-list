import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping List",
  description: "All of your lists in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${quicksand.className}`}>{children}</body>
    </html>
  );
}
