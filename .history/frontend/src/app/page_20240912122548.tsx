import Homepage from "./pageComponents/homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Cash for Houses",
  description: "Ontario Cash for houses gives quick cash offers for houses in any condition",
  keywords: "Ontario Cash For houses, sell house fast cash ontario canada",
  openGraph: {
    title: "Ontario Cash for Houses |Selling Houses fast in Ontario",
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
const Home =()=> {





  return (
    
    <>

   

    <>
    
   <Homepage/>

  </>

   
  </>
  );
}
