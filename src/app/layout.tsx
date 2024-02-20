import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "./components/ui/navbar";
import CartPopup from "./components/ui/cartPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ecommerce Full Stack",
  description: "Made by Ansh-Sonkusare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" style={{ scrollBehavior: "smooth" }}>
        <body className={`font-sans ${inter.variable} scroll-smooth`}>
          <TRPCReactProvider>
            <Navbar />
            <CartPopup />
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
