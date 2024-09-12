
import { AppProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Ontario Cash for Houses",
  description: "Ontario Cash for houses gives quick cash offers for houses in any condition",
  keywords: "cash for houses ontario, sell home quick ontario",
  openGraph: {
    title: "Ontario Cash for Houses | Giving you quick cash offers for you property",
    description: "Ontario Cash for houses gives quick cash offers for houses in any condition",
    url: "https://www.focusflowsoftware.com", // Default URL
    images: [
      {
        url: "", // Global Open Graph image
        width: 1200,
        height: 630,
        alt: "Cash for Houses"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'Ontario Cash for Houses | Giving you quick cash offers for you property'
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


      <body className={inter.className}>{children}
      <Analytics/>
<SpeedInsights/>
      </body>
      </AppProvider>

    </html>

  );
}