import { StaticImageData } from 'next/image';
import cashHome2 from '../../public/cash-for-home2.jpg'
// import dunk from '../../public/best_dunk.mp
import canadianDollar from '../../public/canadian-dollars.jpeg'

import twenty from '../../public/twenty-bills.jpeg'



interface ContentType {
    image: StaticImageData | string;
    customText: string | null;
    description: string[];
    mainTitle: string;
    reverse: boolean;
    hasAnimation:boolean,
    background?:string,
    buttonLink?:string,
    buttonText?:string,
    alt:string,
    video?:boolean,
    poster?:string

}

interface ParallaxContentType {
    src:string,
    alt:string,
    isVideo:boolean
    description?:string,
    muted?:boolean,
    thumbnail?:string,
    heading:string,
    subHeading:string
}

interface Content2Type {
  image:StaticImageData,
  alt:string,
  description:string,
  title:string,
  bg?:string
}




const lorem30 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo rerum corrupti exercitationem et ut libero dicta, natus neque nisi, aperiam cupiditate inventore. Labore maxime temporibus debitis autem molestiae? '

export const heroImages = [
    {
        src:'/home.jpg',
        alt:'A picture of a home'
    },
    {
        src:'/canadian-dollars.jpeg',
        alt:'A lot of cash'
    }
]

export const accordionProps = {
    text: [
        { title: "No Realtor Fees", description: "You won't need a realtor when working with us; we handle everything directly." },
        { title: "Fast Transactions", description: "We offer quick cash deals with minimal paperwork, ensuring a fast transaction." },
        { title: "No Repairs Needed", description: "Sell your property as-is; no need for repairs or renovations before selling." },
        { title: "Flexible Closing Dates", description: "Choose a closing date that works best for you; we are flexible and accommodating." },
        { title: "Cash Offers", description: "Receive a fair cash offer for your home without any hidden fees or obligations." }
    ],
    hasIntro: true,
    intro: "We really are local and different",
    description: "Our service offers a hassle-free way to sell your house quickly for cash, with no realtor fees or repairs needed.",
    link: ''
};


export const processFAQ = {
  text: [
      { 
          title: "What is the first step in your process?", 
          description: "The first step is an initial phone call where we gather basic information about your property and situation. This helps us understand your needs and allows us to offer a tailored solution." 
      },
      { 
          title: "Do I need to make any repairs before selling?", 
          description: "No, you don’t need to make any repairs. We buy houses in any condition, so you can sell your property as-is without worrying about repairs or renovations." 
      },
      { 
          title: "How do you evaluate my property?", 
          description: "We schedule a property evaluation at a time that’s convenient for you. Our team assesses your property’s current condition and considers various factors to ensure you receive a fair cash offer." 
      },
      { 
          title: "How quickly can I get a cash offer?", 
          description: "After evaluating your property, we present you with a cash offer based on the evaluation and market conditions. This offer is competitive, fair, and comes without any obligations." 
      },
      { 
          title: "What happens after I accept the offer?", 
          description: "Once you accept the offer, we handle all the legal work and details. You have the flexibility to choose the closing date that works best for you, making the process smooth and stress-free." 
      },
      { 
          title: "When will I receive my money?", 
          description: "At closing, all necessary documents are sent to your lawyer. You’ll meet with your lawyer to finalize the sale, and the money will be directly transferred to you from your lawyer." 
      },
      { 
          title: "Are there any hidden fees?", 
          description: "No, there are no hidden fees. You receive a straightforward cash offer without any realtor fees, commissions, or additional costs." 
      },
      { 
          title: "Can I choose my closing date?", 
          description: "Yes, you have the flexibility to choose a closing date that fits your schedule. We accommodate your needs to make the process as convenient as possible for you." 
      },
      { 
          title: "Why should I choose your service over others?", 
          description: "Our service offers a hassle-free, quick, and reliable way to sell your house. With no realtor fees, no need for repairs, and fast cash offers, we make the process simple and stress-free." 
      }
  ],
  hasIntro: true,
  intro: "Frequently Asked Questions",
  description: "Selling your house can be a daunting process, but we aim to make it as simple and straightforward as possible. Below, you'll find answers to common questions about our process and how we can help you sell your house quickly and easily.",
  link: ''
};






export const content1Data:ContentType= {
    image:canadianDollar,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
    ],
    mainTitle: 'Cash for your property, quickly',
    reverse: false,
    hasAnimation:true,
    buttonLink:'contact',
    buttonText:'Book a consultation',
    alt:'A fantastic Home'

  };

  export const content3Data:ContentType= {
    image:canadianDollar,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
    ],
    mainTitle: 'Cash for Houses, Quickly',
    reverse: false,
    hasAnimation:true,
    buttonLink:'contact',
    buttonText:'Book a consultation',
    alt:'A fantastic Home'

  };


  export const content2Data:ContentType= {
    image:canadianDollar,// Directly import the image as StaticImageData
    customText: null,
    description: [
      `Unlock the secrets to a hassle-free home sale. Our proven process ensures that you get the best offer with minimal effort. Say goodbye to the traditional selling headaches and hello to a streamlined, straightforward experience.

      `,
      `Ready to take control of your home-selling journey? Visit our Process page to see how we turn a complex process into a quick and easy solution. Your dream sale is just a click away—learn more and get started today.`,
    ],
    mainTitle: 'Cash for Houses, Quickly',
    reverse: true,
    hasAnimation:true,
    buttonLink:'process',
    buttonText:`Learn how it's done`,
    alt:'A lovely picture',
    video:false,
    poster:canadianDollar.src

  };


  export const openingText = {
    image:'/twenty-bills.jpeg',
    title:'Ready to Take the Next Step?',
    description:`Your home deserves a smooth, stress-free selling experience, and we're here to make that happen. With our expertise, transparent process, and commitment to providing the best offers, selling your house has never been easier. Don't wait—unlock the potential of your property today. Click the button below to book your free consultation and discover how quickly and easily you can sell your home for cash`,
    buttonText:'Book a consulation',
    destination:'/contact'
  }

  export const dunk = '/videos/q3-lion-speech.mp4'

  export const intro = './videos/theresa-intro.mp4'

  export const process = './videos/theresa-process.mp4'

  

  export const jvParallaxContent:ParallaxContentType = {
        src:dunk,
        isVideo:true,
        // description:lorem30,
        muted:false,
        thumbnail:'/horizontal-home.jpg',
        heading:'JV Partnership',
        subHeading:'Subtitle here',
        alt:'Aria label nation'
  }

  export const processParallax:ParallaxContentType = {
    src:process,
    isVideo:true,
    description:'Discover how easy it is to sell your home with our streamlined process. We’ve simplified every step to ensure a hassle-free experience, guiding you from the initial call to the final closing. Let’s explore the five key steps that make selling your house quick and straightforward!',
    muted:false,
    thumbnail:'/theresa-sitting.webp',
    heading:'How it works',
    subHeading:'',
    alt:'Aria label nation',


  }

  export const processCarouselData = {
    images: [
      {
        src: '/twenty-bills.jpeg',
        alt: 'Initial Phone Call',
        description: 'The first step in our process is a simple phone call where we gather basic information about your property and understand your situation. This allows us to get a clear picture of what’s going on so that we can provide the best possible solution tailored to your needs.'
      },
      {
        src: '/canadian-dollars.jpeg',
        alt: 'Property Evaluation',
        description: 'Our team will schedule a property evaluation at a time that’s convenient for you. The condition of your property is not an issue—we assess it as is. Our experts will carefully evaluate the property, considering various factors to ensure you receive a fair and accurate cash offer.'
      },
      {
        src: '/dark-gray-home.jpg',
        alt: 'Receiving Your Cash Offer',
        description: 'Based on our evaluation and current market conditions, we will present you with a competitive cash offer for your property. We’re here to answer any questions you may have, and once you’re satisfied, the offer will be sent to your lawyer for review and preparation.'
      },
      {
        src: '/old-brick-home.jpg',
        alt: 'Accepting the Offer',
        description: 'Once you’ve reviewed and accepted the cash offer, we’ll handle all the legal work and details. You have the flexibility to choose the closing date that works best for you, ensuring a smooth and stress-free transaction process.'
      },
      {
        src: '/old-brick-home.jpg',
        alt: 'Closing and Getting Paid',
        description: 'At closing, we’ll send all necessary documents to your lawyer. You’ll meet with your lawyer to finalize the sale, and the money will be directly received from your lawyer. It’s that simple—you get your cash quickly and securely.'
      }
    ],
    title: 'Quick and Easy Process',
    description: 'Our streamlined process is designed to make selling your house as quick and easy as possible. From the initial phone call to closing, we handle everything so you can focus on what matters most to you. Here’s how it works:'
  };
  


 export const aboutContent1:Content2Type = {
    image:canadianDollar,
    title:'About us',
    alt:'About us picture',
    description:lorem30,
    bg:'bg-gradient-to-tr from-blue-800 via-blue-400 to-blue-300'
    
  }

  export const contactContent2:Content2Type = {
    image:canadianDollar,
    title:'Contact us',
    alt:'About us picture',
    description:lorem30,
    bg:''
  }

  interface InfographicType {
    title?:string,
    description?:string,
    images:{
      src:StaticImageData,
      alt:string,
      description:string,
      title:string
    }[]
  }


  export const circleInfographicData1: InfographicType = {
    images: [
      {
        src: twenty,
        title: 'We Pay More',
        alt: 'alt',
        description: 'Our extensive experience in purchasing properties allows us to save significantly on closing and contractor fees. These savings enable us to present you with a more competitive offer, ensuring you receive the maximum value for your home.'
      },
      {
        src: canadianDollar,
        title: 'Avoid Making Repairs',
        alt: 'alt',
        description: 'We purchase homes in any condition, offering you the convenience of selling without the need for costly and time-consuming repairs. By paying in cash, we streamline the process, so you can sell your house as-is, hassle-free.'
      },
      {
        src: canadianDollar,
        title: 'No Fees',
        alt: 'alt',
        description: 'Our service is entirely transparent with no hidden fees or charges. We are committed to a straightforward transaction, where our only goal is to purchase your home with no strings attached.'
      },
      {
        src: canadianDollar,
        title: 'No Commissions',
        alt: 'alt',
        description: 'By selling directly to us, you avoid the hefty commissions that real estate agents typically charge. We act as your direct buyer, eliminating the middleman and ensuring you retain more of your home’s value.'
      },
      {
        src: canadianDollar,
        title: 'Close Fast',
        alt: 'alt',
        description: 'Our ability to pay in cash allows us to close deals at a pace that suits your needs. Whether you wish to close in as little as a week or need more time to make arrangements, we accommodate your schedule, providing flexibility and peace of mind.'
      },
      {
        src: canadianDollar,
        title: 'We Pay Cash',
        alt: 'alt',
        description: 'Paying in cash gives us the unique advantage of bypassing the often cumbersome processes that banks impose on traditional buyers. This means fewer delays, more certainty, and a smoother transaction for you, the seller.'
      },
    ]
  }
  

  export const applicationQuestions = [
    {
        question: 'Seller name',
        placeholder: 'Enter applicant name here',
        required: true,
    },

    {
        question: "Seller email",
        placeholder: 'Enter applicant email here',
        isEmail: true,
        required: true,
    },
    {
        question: 'Seller telephone number',
        placeholder: 'Enter applicant telephone number here',
        isPhoneNumber: true,
        required: true,
    },
    {
      question:'Property address',
      placeholder:'Property address',
      required:true
    }

    // {
    //     question: 'Seller present address',
    //     placeholder: 'Enter applicant present address here',
    //     required: true,
    // },
    // {
    //     question: 'Applicant duration at present address',
    //     placeholder: 'Enter duration here',
    //     required: true,
    // }
];


  

//   images: {
//     src: string,
//     alt: string,
//     description: string
// }[]
// title?: string,
// description?: string

  // src:string,
  //   alt:string,
  //   isVideo:boolean
  //   description?:string,
  //   muted?:boolean,
  //   thumbnail?:string,
  //   heading:string,
  //   subHeading:string

//   image:string,
//     title:string,
//     description:string,
//     buttonText:string,
//     destination:string


// image:  StaticImageData;
//   customText: React.ReactNode;
//   description?: string[] | null  ;
//   reverse: boolean | null;
//   mainTitle?: string | null;
//   floatingImage?: boolean;
//   hasAnimation?: boolean;
//   buttonLink?:string,
//   buttonText?:string

export const introDescription = 
"Sell your house fast in Ontario regardless of condition, age, size or situation.\n\n" +
"We buy houses by providing home sellers with a cash offer to purchase. If you are happy with the offer, we move forward and close the transaction when it’s most convenient for you.\n\n" +
"Are you looking for a way out of a situation that involves a house you own in Ontario? You’ve found the right place! I’m confident we can help you.\n\n" +
"We are a professional house buying company that buys houses fast in Ontario. We pay cash for homes, which makes the entire process simple and quick.\n\n" +
"Our guaranteed all-cash offer is the reason so many of our customers choose us.";
