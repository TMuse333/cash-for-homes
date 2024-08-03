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
        description: 'The speed with which you bought my house was phenomenal! I’m so glad I found you guys and am very happy with the service I received. I will be recommending you.',
        name: 'B. Garcia'
    },
    {
        title: 'Excellent Service',
        description: 'Selling my home was a breeze. The team was professional and made everything so easy.',
        name: 'J. Smith'
    },
    {
        title: 'Highly Recommend',
        description: 'I was skeptical at first, but the process was smooth and I got a fair price for my home.',
        name: 'A. Johnson'
    },
    {
        title: 'Great Experience',
        description: 'I was able to sell my home quickly and without any hassle. Highly recommend their service!',
        name: 'L. Williams'
    },
    {
        title: 'Fantastic Job',
        description: 'The team handled everything perfectly and I got a great deal for my house. Thank you!',
        name: 'M. Brown'
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
            <AnimatePresence>
                <motion.article
                    key={currentIndex}
                    className='w-[80%] ml-auto mr-auto absolute top-0 left-[50%] '
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, }}
                    transition={{ duration: 0.5 }}
                >
                    <p className='text-center mb-4 mt-2 text-3xl'>{currentTestimonial.title}</p>
                    <p className='ml-auto mr-auto mb-4'>{currentTestimonial.description}</p>
                    <p className='mb-4'>-{currentTestimonial.name}</p>
                </motion.article>
            </AnimatePresence>
        </section>
    );
};

export default Testimonials;
