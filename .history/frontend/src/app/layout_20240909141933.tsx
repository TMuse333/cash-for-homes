
import { AppProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

//lol

export const metadata: Metadata = {
  title: "Ontario Cash For Houses",
  description: "We Buy Houses in ANY Condition. And We Can Close In LESS Than 7-30 Days From Today",
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