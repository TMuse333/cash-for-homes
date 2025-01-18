import Homepage from "./pageComponents/homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Cash for Houses",
  description: "Ontario Cash for Houses offers fast, hassle-free cash offers for homes in any condition across Ontario, Canada. Whether you're dealing with a life change or simply need to sell quickly, our team of cash home buyers ensures a smooth, stress-free process. No repairs, no cleaning—just a fair cash offer for your house. If you're looking to sell your house cash fast in Ontario, we make it easy to get cash in hand and move forward with confidence.",
  keywords: ["Ontario Cash For houses", sell house fast cash ontario canada, sell house cash fast ontario"],
  openGraph: {
    title: `Ontario Cash for Houses | sell cash fast house ontario`,
    description: `Looking to sell a house fast for cash in Ontario? Ontario Cash for Houses provides quick, hassle-free cash offers for homes in any condition across Ontario, Canada. Whether you're facing foreclosure, dealing with an inheritance, or want to skip the traditional real estate process, we buy houses as-is with no repairs or realtor fees. Get a fair cash offer today and close in as little as 7 days. Specializing in helping Ontario homeowners sell their property fast for cash, including areas like Windsor, Chatham, London, and Kitchener.`
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