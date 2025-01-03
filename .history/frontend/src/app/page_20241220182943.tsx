import Homepage from "./pageComponents/homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Cash for Houses",
  description: "Ontario Cash for houses gives quick cash offers for houses in any condition",
  keywords: "Ontario Cash For houses, sell house fast cash ontario canada, sell house cash fast ontario",
  openGraph: {
    title: `Ontario Cash for Houses | sell cash fast house ontario`,
    description: `Looking to sell cash fast house Ontario? Ontario Cash for Houses provides quick, hassle-free cash offers for homes in any condition across Ontario, Canada. Whether you're facing foreclosure, dealing with an inheritance, or want to skip the traditional real estate process, we buy houses as-is with no repairs or realtor fees. Get a fair cash offer today and close in as little as 7 days. Specializing in helping Ontario homeowners sell their property fast for cash, including areas like Windsor, Chatham, London, and Kitchener.`
,
    url: "https://www.ontariocashforhouses.com", // Default URL
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
    siteName: 'Ontario Cash for Houses | sell house fast cash ontario canada'
  },
  icons: {
    icon: ["/favicon.ico?v=4"
   ],
  
  },
  
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


export default Home