
import { AppProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Ontario Cash for Houses",
  description: "Ontario Cash for houses gives quick cash houses for",
  keywords: "web design halifax, custom web design services, creative web page design, web designer halifax ",
  openGraph: {
    title: "Focus Flow Software | Creative Web Design",
    description: "Experience the fastest and most creative web design solutions with Focus Flow Software.",
    url: "https://www.focusflowsoftware.com", // Default URL
    images: [
      {
        url: "https://www.focusflowsoftware.com/media/gemeni-two-hand-stick.png", // Global Open Graph image
        width: 1200,
        height: 630,
        alt: "Focus Flow Software - Creative and Fast Web Design"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'FocusFlow Software | Creative and Fast Web Design in Halifax'
  },
  icons: {
    icon: ["/favicon.ico?v=4"
   ],
  //  apple:[
  //   '/apple-touch-icon.png?v=4'
  //  ],
  //  shortcut:[
  //   '/apple-touch-icon.png'
  //  ] 
  },
  // manifest:'/site.webmanifest'
}

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