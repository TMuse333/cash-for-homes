
import { AppProvider } from "@/context/context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });


<meta name="google-site-verification" content="XXaljy6jYzsr11VpxSUrTHYrn_MT1s8RGSu1o0RCFzU" />


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