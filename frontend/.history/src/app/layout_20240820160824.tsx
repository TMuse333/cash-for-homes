
import { AppProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ontario Cash For Houses",
  description: "A website made with the power of the Quantum Realm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   

   
    <html lang="en">
<AppProvider>


      <body className={inter.className}>{children}</body>
      </AppProvider>
    </html>

  );
}