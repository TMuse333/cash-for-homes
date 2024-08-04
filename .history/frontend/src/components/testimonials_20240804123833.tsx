import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TestimonialProps {
    testimonials?: {
        title: string,
        description: string,
        name: string
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

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className='bg-black border border-white ml-auto mr-auto max-w-[1200px] w-[80vw] relative
        h-[200px]'>
            <button className='absolute top-1/2 right-0' onClick={nextTestimonial}>
                &rarr;
            </button>
            <button className='absolute top-1/2 left-0' onClick={prevTestimonial}>
                &larr;
            </button>
            <AnimatePresence mode="wait">
                <motion.article
                    key={currentIndex}
                    className='w-[80%] ml-auto mr-auto absolute top-0 left-[50%] -translate-x-[50%]'
                   
                >
                    <motion.p
                      initial={{ opacity: 0,x: -10 }}
                      animate={{ opacity: 1, x:0 }}
                       exit={{ opacity: 0 }}
                      className='text-center mb-4 mt-2 text-3xl'>{currentTestimonial.title}</motion.p>
                    <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, transition:{
                        duration:0.5
                    } }}
                    transition={{ duration: 0.1 }}
                     className='ml-auto mr-auto mb-4'>{currentTestimonial.description}</motion.p>
                    <motion.p 
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, }}
                    transition={{ duration: 0.1 }}
                     className='mb-4'>-{currentTestimonial.name}</motion.p>
                </motion.article>
            </AnimatePresence>
        </section>
    );
};

export default Testimonials;
