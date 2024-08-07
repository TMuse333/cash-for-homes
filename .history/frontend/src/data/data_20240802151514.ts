import { StaticImageData } from 'next/image';
import cashHome2 from '../../public/cash-for-home2.jpg'


interface ContentType {
    image: StaticImageData;
    customText: string | null;
    description: string[];
    mainTitle: string;
    reverse: boolean;
    hasAnimation:boolean,
    background?:string,
    buttonLink?:string,
    buttonText?:string,
    alt?:string,
    video?:boolean

}

export const heroImages = [
    {
        src:'/home.jpg',
        alt:'A picture of a home'
    },
    {
        src:'/cash.jpg',
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
    intro: "Loerm ipsum",
    description: "Our service offers a hassle-free way to sell your home quickly for cash, with no realtor fees or repairs needed.",
    link: ''
};






export const content1Data:ContentType= {
    image:cashHome2,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
    ],
    mainTitle: 'Cash for Homes, Quickly',
    reverse: false,
    hasAnimation:true,
    buttonLink:'contact',
    buttonText:'Book a consultation'

  };


  export const content2Data:ContentType= {
    image:cashHome2,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
    ],
    mainTitle: 'Cash for Homes, Quickly',
    reverse: true,
    hasAnimation:true,
    buttonLink:'contact',
    buttonText:'Book a consultation',
    alt:'A lovely picture',
    video:true

  };


  export const openingText = {
    image:'cash_for_home1.jpg',
    title:'Ontario Cash for Homes',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi, itaque veniam cumque laboriosam omnis iure accusantium! Veniam ea vero dolor aliquid, ipsa nisi nesciunt esse repellendus laboriosam explicabo maxime.',
    buttonText:'Book a consulation',
    destination:''
  }


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