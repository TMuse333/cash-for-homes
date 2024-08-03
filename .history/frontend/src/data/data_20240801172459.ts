import { StaticImageData } from 'next/image';
import cashHome2 from '../../public/cash-for-home2.jpg'

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



export const content1Data: {
    image: StaticImageData;
    customText: string | null;
    description: string[];
    mainTitle: string;
    reverse: boolean;
    hasAnimation:boolean,
    background?:string,
    buttonLink?:string,
    buttonText?:string,
   
  } = {
    image:cashHome2,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'A beautiful view of our restaurant from the outside, showcasing the ambiance and location.',
      'Enjoy dining in a cozy and welcoming environment.',
    ],
    mainTitle: 'Welcome to Our Restaurant',
    reverse: false,
    hasAnimation:true,
    buttonLink:'contact',
    buttonText:'Book a consultation'

  };


  const openeingText = {
    image:''
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