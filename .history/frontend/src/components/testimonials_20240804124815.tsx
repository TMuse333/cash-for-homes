import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface TestimonialProps {
    testimonials?: {
        title: string,
        quote: string,
        author: string,
        effect:string
    }[]
}

const testimonialsData = [
    {
        title: 'Quick and great price',
        quote: '“The speed with which you bought my house was phenomenal! I’m so glad I found you guys and am very happy with the service I received. I will be recommending you.”',
        author: 'B. Garcia',
        effect: 'Sold house in just 10 days instead of 6 months' // Example effect
    },
    {
        title: 'Excellent Service',
        quote: '“Selling my home was a breeze. The team was professional and made everything so easy.”',
        author: 'J. Smith',
        effect: 'Closed the sale with minimal hassle and paperwork' // Example effect
    },
    {
        title: 'Highly Recommend',
        quote: '“I was skeptical at first, but the process was smooth and I got a fair price for my home.”',
        author: 'A. Johnson',
        effect: 'Achieved a fair market price in just 3 weeks' // Example effect
    },
    {
        title: 'Great Experience',
        quote: '“I was able to sell my home quickly and without any hassle. Highly recommend their service!”',
        author: 'L. Williams',
        effect: 'Sold my home in record time with no complications' // Example effect
    },
    {
        title: 'Fantastic Job',
        quote: '“The team handled everything perfectly and I got a great deal for my house. Thank you!”',
        author: 'M. Brown',
        effect: 'Secured an excellent deal within 2 weeks' // Example effect
    }
];


const Testimonials: React.FC<TestimonialProps> = ({ testimonials = testimonialsData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };


    return (
        <section className='bg-black border border-white ml-auto mr-auto max-w-[1200px] w-[95vw] 
          relative mb-8
         h-[450px]
        '>
           <IoIosArrowForward className="absolute top-1/2 right-0 text-4xl" onClick={nextTestimonial} />
            <IoIosArrowBack className="absolute top-1/2 left-0 text-4xl" onClick={prevTestimonial} />
            <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="font-heavy mb-4 pl-3 pr-3 mt-8"
            initial={{ opacity: 0,x: -10 }}
            animate={{ opacity: 1, x:0 }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].quote}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="effect"
           initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
             >
            {testimonials[currentTestimonial].effect}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="author"
           initial={{ opacity: 0, y:30 }}
            animate={{ opacity: 1, y:0,transition: { delay: 0.7 } }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].author}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="title"
          initial={{ opacity: 0, y:30 }}
          animate={{ opacity: 1, y:0,transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].title}
          </motion.p>
        </AnimatePresence>

        </section>
    );
};

export default Testimonials;
