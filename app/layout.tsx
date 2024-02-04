import { AuthProvider } from "./contexts/AuthContext";
import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "./components/header/NavBar";

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
    <AuthProvider>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
          {/* <script
            src="https://kit.fontawesome.com/367ff4af65.js"
            // crossorigin="anonymous"
          ></script> */}
        </head>
        <body className={` ${quicksand.className}`}>
          <NavBar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
