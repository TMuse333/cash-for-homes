import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface TestimonialProps {
    testimonials?: {
        title?: string,
        quote: string,
        author: string,
        effect:string
    }[]
}



const testimonialsData = [
    {
        title: 'Millionaire',
        quote: `I was facing eviction and had only one day before I had to leave. I contacted Ontario Cash for Houses, and they stepped in to help right away. They not only bought my house the same day but also offered to rent it back to me while I looked for a new place. The speed, compassion, and flexibility they showed during such a stressful time were amazing. I’m incredibly grateful for how they turned a crisis into a smooth transition.`,
        author: 'B. Garcia',
        effect: 'Sold house in just 10 days instead of 6 months' // Example effect
    },
    {
        title: 'Satisfied Customer',
        quote: `When my family went through a divorce, we needed to sell our house quickly to create stability for our kids. Ontario Cash for Houses handled everything with sensitivity and speed. They bought our house quickly, allowing us to focus on our family instead of the stress of selling a home. Their support gave us the breathing room we needed to get through a tough time.`,
        author: 'J. Smith',
        effect: 'Closed the sale with minimal hassle and paperwork' // Example effect
    },
    {
        title: 'Satisfied Customer',
        quote: `"After I was diagnosed with cancer, my house was damaged in a fire. With so much going on, selling my home felt impossible.Ontario  came through for me, purchasing my home quickly and lifting a huge burden from my shoulders. Their kindness and professionalism gave me peace of mind during one of the hardest times in my life.`,
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
        title: 'Wealth genius member',
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
        <section className='bg-gradient-to-b from-gray-600 via-gray-600 to-gray-400 border border-white ml-auto mr-auto max-w-[1200px] w-screen 
          relative mb-8 rounded-lg
         h-[400px] sm:w-[90vw]
        '>
           <IoIosArrowForward className="absolute sm:text-5xl top-[40%] right-0 text-2xl hover:text-blue-200
           hover:scale-[1.15] transition-all" onClick={nextTestimonial} />
            <IoIosArrowBack className="absolute top-[40%] left-0 text-2xl
            hover:text-blue-200
            hover:scale-[1.15] transition-all sm:text-5xl" onClick={prevTestimonial} />
            
            <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="font-bold mb-4 pl-8 pr-8 mt-8
          text-lg sm:text-xl sm:pl-12 sm:pr-12"
            initial={{ opacity: 0,x: -10 }}
            animate={{ opacity: 1, x:0 }}
             exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].quote}
          </motion.p>
        </AnimatePresence>

        {/* <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:pr-12 sm:text-xl"
           initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
             >
            {testimonials[currentTestimonial].effect}
          </motion.p>
        </AnimatePresence> */}

        <AnimatePresence  mode='wait'>
          <motion.p key={currentTestimonial} className="mt-8 pl-6 sm:pl-12 pr-8
          sm:text-lg"
           initial={{ opacity: 0, y:30 }}
            animate={{ opacity: 1, y:0,transition: { delay: 0.7 } }}
             exit={{ opacity: 0 }}>
           -{testimonials[currentTestimonial].author}
          </motion.p>
        </AnimatePresence>

        {/* <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:text-lg"
          initial={{ opacity: 0, y:30 }}
          animate={{ opacity: 1, y:0,transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}>
            {testimonials[currentTestimonial].title}
          </motion.p>
        </AnimatePresence> */}

        </section>
    );
};

export default Testimonials;
