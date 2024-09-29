"use client";
import Navbar from "@/components/navbar";
import dynamic from 'next/dynamic';
import React from "react";
import { processCarouselData, processParallax, processFAQ } from "@/data/data";
import Link from "next/link";

// Dynamically import components
const TextParallaxContentExample = dynamic(() => import('@/components/parallaxText'), {
    ssr: false, // Set to true if you want SSR
});

const SlideShowCarousel = dynamic(() => import('@/components/slideShowCarousel'), {
    ssr: false, // Set to true if you want SSR
});

const Accordion = dynamic(() => import('@/components/accordion'), {
    ssr: true, // Set to true if you want SSR
});

const Footer = dynamic(() => import('@/components/footer'), {
    ssr: false, // Set to true if you want SSR
});

const ProcessPage = () => {
    const links = [
        { name: 'Home', destination: '/', hasScroll: false },
        { name: 'About us', destination: '/about', hasScroll: false },
        { name: 'Contact Us', destination: '/contact' },
    ];

    return (
        <>
            <main className="w-screen bg-gray-200">
                <Navbar links={links} relative={true} />
                <h1 className="text-2xl text-black my-8 text-center md:text-4xl">Sell a house with Ontario Cash for Houses</h1>

                <TextParallaxContentExample {...processParallax} />

                <p className="text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl mb-4">Quick and simple</p>
                
                <SlideShowCarousel {...processCarouselData} />

                <p className="rounded-md bg-gray-400 w-[95%] mx-auto relative p-8 rounded-xl sm:text-xl mt-[rem] mb-[4rem] max-w-[1200px]">
                    Don&apos;t wait any longer to get a cash offer for your property with our straightforward and hassle-free process. Contact us today to take the first step toward a quick and easy sale. Let’s work together to make your real estate journey smooth and successful.
                    <br />
                    <Link href="/contact">
                        <button className="mt-4 bg-blue-500 p-3 rounded-xl hover:scale-[1.05] hover:bg-white transition-all hover:text-blue-500">
                            Let&apos;s get started
                        </button>
                    </Link>
                </p>

                <Accordion {...processFAQ} />

                <Footer links={links} />
            </main>
        </>
    );
};

export default ProcessPage;
