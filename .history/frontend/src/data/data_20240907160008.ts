import { StaticImageData } from 'next/image';
import cashHome2 from '../../public/cash-for-home2.jpg'
// import dunk from '../../public/best_dunk.mp
import canadianDollar from '../../public/canadian-dollars.jpeg'

import twenty from '../../public/twenty-bills.jpeg'

import group from '../../public/whole-group.webp'
import oldGray from '../../public/old-gray.webp'
import properTrade from '../../public/proper-trade.webp'
import handshake from '../../public/handshake.webp'
import multiHome from '../../public/multi-home.webp'

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
  // {
  //   src:'/proper-trade.webp',
  //   alt:'Trading cash for a house'
  // },
  {
    src:'/handshake.webp',
    alt:'trading cash for a house'
  },
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
  description: "Selling your property can be daunting, but we aim to make it as simple and straightforward as possible. Below, you'll find answers to common questions about our process and how we can help you sell your property quickly and easily.",
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
    buttonText:'Call Us Now',
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
    buttonText:'Call Us Now',
    alt:'A fantastic Home'

  };


  export const content2Data:ContentType= {
    image:oldGray,// Directly import the image as StaticImageData
    customText: null,
    description: [
      `Unlock the secrets to a hassle-free property sale. Our proven process ensures that you get the best offer with minimal effort. Say goodbye to the traditional selling headaches and hello to a streamlined, straightforward experience.

      `,
      `Ready to take control of your property-selling journey? Visit our Process page to see how we turn a complex process into a quick and easy solution. Your dream sale is just a click away—learn more and get started today.`,
    ],
    mainTitle: 'Cash for your property, Quickly',
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
    description:`You deserve a smooth, stress-free selling experience, and we're happy to make that happen. With our expertise, transparent process, and commitment to providing the best offers, selling your property has never been easier. Don't wait—unlock the potential of your property today. Click the button below to book your free consultation and discover how quickly and easily you can sell your property for cash`,
    buttonText:'Book a consulation',
    destination:'/contact'
  }

  export const dunk = '/videos/q3-lion-speech.mp4'

  export const intro = './videos/theresa-intro2.mp4'
  
  export const intro2 = './videos/theresa-intro2.mov'

  export const process = './videos/theresa-process2.mp4'

  export const dolceVita = './videos/dolce-vita-homepage.mov'

  

  export const jvParallaxContent:ParallaxContentType = {
        src:dunk,
        isVideo:true,
        // description:lorem30,
        muted:false,
        thumbnail:'/horizontal-home.jpg',
        heading:'JV Partnership',
        subHeading:'',
        alt:'Aria label nation'
  }

  export const processParallax:ParallaxContentType = {
    src:process,
    isVideo:true,
    description:'Discover how easy it is to sell your property with our streamlined process. We’ve simplified every step to ensure a hassle-free experience, guiding you from the initial call to the final closing. Let’s explore the five key steps to make selling your property quick and straightforward!',
    muted:false,
    thumbnail:'/theresa-sitting.webp',
    heading:'How it works',
    subHeading:'',
    alt:'Aria label nation',


  }

  export const processCarouselData = {
    images: [
      {
        src: '/preview.webp',
        alt: 'Initial Phone Call',
        description: 'The first step in our process is a simple phone call where we gather basic information about your property and understand your situation. This allows us to get a clear picture of what’s going on so that we can provide the best possible solution tailored to your needs.'
      },
      {
        src: '/evaluation.webp',
        alt: 'Property Evaluation',
        description: 'Our team will schedule a property visit at a time that’s convenient for you. The condition of your property is not an issue—we assess it as is. Our experts will carefully evaluate the property, considering various factors to ensure you receive a fair and accurate cash offer.'
      },
      {
        src: '/dark-gray-home.jpg',
        alt: 'Receiving Your Cash Offer',
        description: 'Based on our evaluation and current market conditions, we will present you with a competitive cash offer for your property. We’re here to answer any questions you may have, and once you’re satisfied, the offer will be sent to your lawyer for review.'
      },
      {
        src: '/old-brick-home.jpg',
        alt: 'Accepting the Offer',
        description: 'Once you’ve reviewed and accepted the cash offer, we’ll handle all the legal work and details. You have the flexibility to choose the closing date that works best for you, ensuring a smooth and stress-free transaction process.'
      },
      {
        src: '/proper-trade.webp',
        alt: 'Closing and Getting Paid',
        description: 'At closing, we’ll send all necessary documents to your lawyer. You’ll meet with your lawyer to finalize the sale, and the money will be directly received from your lawyer. It’s that simple—you get your cash quickly and securely.'
      }
    ],
    title: 'Quick and Easy Process',
    description: 'Our streamlined process is designed to make selling your house as quick and easy as possible. From the initial phone call to closing, we handle everything so you can focus on what matters most to you. Here’s how it works:'
  };
  


 export const aboutContent1:Content2Type = {
    image:group,
    title:'About us',
    alt:'About us picture',
    description:'Ontario Cash For Houses is a real estate solutions company that buys houses in Toronto, ON; Windsor, ON; London, ON; Kitchener, ON; Waterloo, ON; Cambridge, ON; Whitby, ON; Oshawa, ON; Milton, ON; Georgetown, ON; North Bay, ON; Simcoe, ON; Goderich, ON; Orillia, ON; Muskoka, ON; and Haliburton, ON.',
    bg:'bg-gradient-to-tr from-blue-800 via-blue-400 to-blue-300'
    
  }

  export const contactContent2:Content2Type = {
    image:handshake,
    title:'Contact us',
    alt:'About us picture',
    description:`Embarking on the journey to sell your property is a significant step, and we’re here to guide you toward greatness. Our dedicated team is committed to ensuring you receive the best possible cash offer for your property, helping you achieve your goals swiftly and effortlessly. With our streamlined process and personalized support, you can trust that you're making the right choice for your future. Contact us today to discover how we can turn your property into a remarkable opportunity and unlock the door to a brighter tomorrow.`,
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
        description: 'Our extensive experience in purchasing properties allows us to save significantly on closing and contractor fees. These savings enable us to present you with a more competitive offer, ensuring you receive the maximum value for your property.'
      },
      {
        src: canadianDollar,
        title: 'Avoid Making Repairs',
        alt: 'alt',
        description: 'We purchase houses in any condition, offering you the convenience of selling without the need for costly and time-consuming repairs. By paying in cash, we streamline the process, so you can sell your house as-is, hassle-free.'
      },
      {
        src: canadianDollar,
        title: 'No Fees',
        alt: 'alt',
        description: 'Our service is entirely transparent with no hidden fees or charges. We are committed to a straightforward transaction, where our only goal is to purchase your property with no strings attached.'
      },
      {
        src: canadianDollar,
        title: 'No Commissions',
        alt: 'alt',
        description: 'By selling directly to us, you avoid the hefty commissions that real estate agents typically charge.'
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
    },
    {
      question:'City',
      placeholder:'Enter city here',
      required:true
    },
    {
      question:'Province',
      placeholder:'Enter Province here',
      required:true
    },
    {
      question:'Reason for selling'
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
"Sell your property in Ontario quickly, no matter the condition or situation.\n\n" +
"Looking to sell your property in Ontario? We specialize in buying properties, offering a quick, hassle-free process that puts cash in your hands—fast.\n\n" +
"We provide a competitive, all-cash offer for your property. If you're happy with the offer, we close the transaction on your timeline, making the process convenient and stress-free.\n\n" +
"As a professional property buying company, we simplify you selling your property by taking care of all the details, so you can move forward with your life.\n\n" +
"Our guaranteed cash offer is why so many motivated sellers across Ontario choose us.";


export const aboutCloser = {
  image:'/twenty-bills.jpeg',
    title:'Ready to Take the Next Step?',
    description:`At Ontario Cash For Houses, we empower homeowners to confidently sell their properties, whether inherited, rental, urban, or rural. We offer competitive cash offers for your home, understanding that every house has a unique story. We’re compassionate, ethical, and experienced real estate problem-solvers, focused on making your home-selling process simple and fast.

    Whether facing foreclosure, repairs, probate, or other challenges, we aim to provide a hassle-free experience. No realtor fees, no closing costs, no repairs needed—we can close in as little as 24 hours. Call us today for a no-obligation cash offer: (226) 917-2806.`,
    destination:'/contact',
    buttonText:'Book a consulation',
} 




export const aboutContent3:ContentType = {
  image:multiHome,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'We’re a family-owned business that focuses on helping homeowners like you find solutions for your problem property, whether you’re going through a foreclosure, divorce, inherited property, nuisance property, back taxes, can’t sell your property, or just need to sell your house for ANY reason. We can help!\n\n',
      `We'll make you a full cash offer—and close fast, so there's no time to waste. Plus, we'll purchase your home AS-IS and pay all closing costs.`,
      `We'll buy houses even in rural towns and counties. Regardless of the condition of your home, age, size or situation. Give us a call and let's talk about your property so we can learn more and make you a full cash offer.`,
    ],
    mainTitle: '',
    reverse: false,
    hasAnimation:true,
    // buttonLink:'contact',
    // buttonText:'Book a consultation',
    alt:'A fantastic Home'

}

export const aboutContent4:ContentType = {
  image:canadianDollar,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'We’re a family-owned business that focuses on helping homeowners like you find solutions for your problem property, whether you’re going through a foreclosure, divorce, inherited property, nuisance property, back taxes, can’t sell your property, or just need to sell your house for ANY reason. We can help!',
      // 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
    ],
    mainTitle: '',
    reverse: false,
    hasAnimation:true,
    // buttonLink:'contact',
    // buttonText:'Book a consultation',
    alt:'A fantastic Home'

}

