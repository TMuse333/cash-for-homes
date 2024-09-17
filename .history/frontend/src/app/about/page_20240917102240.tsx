

const AboutPage = dynamic(() => import('../pageComponents/aboutPage'), {
  ssr: false, // Optional: Disable Server-Side Rendering for this component if needed
  loading: () => <p>Loading...</p>, // Optional: Provide a fallback component while loading
});
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Ontario Cash for Houses",
  description: "Learn more about Ontario Cash for Houses, a trusted company providing fast cash offers for homes in any condition across Ontario, Canada.",
  keywords: "About Ontario Cash For Houses, home buyers Ontario, sell house fast Ontario, cash house buyers Ontario Canada",
  openGraph: {
    title: `About Ontario Cash for Houses | Trusted Cash Home Buyers in Ontario, Canada`,
    description: `Ontario Cash for Houses is a trusted real estate solutions company that specializes in buying homes in any condition across Ontario. Our team is dedicated to providing homeowners with a fast, fair, and hassle-free selling experience, offering cash for houses without the need for repairs, real estate agents, or lengthy closing processes. Learn more about our mission and how we help homeowners in Ontario.`,
    url: "https://www.ontariocashforhouses.com/about", // About page URL
    images: [
      {
        url: "", // Open Graph image for the about page
        width: 1200,
        height: 630,
        alt: "About Ontario Cash for Houses"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'Ontario Cash for Houses | Trusted Home Buyers in Ontario'
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


const About = () => {

  

    return (
        <>
     <AboutPage/>
        </>

    )
}

export default About