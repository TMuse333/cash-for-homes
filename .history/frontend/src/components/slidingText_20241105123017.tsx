import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAppContext } from "@/context/context";

interface TextProps {
    text: string;
    setSlideComplete?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingText: React.FC<TextProps> = ({ text, setSlideComplete }) => {
    // Reference to the target element to track scroll position
    const targetRef = useRef(null);

    // Get scroll progress relative to the targetRef
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"], // Adjust these offsets as needed
    });

    const {isMobile} = useAppContext()

    // Transform scroll progress to x position, scale, and opacity
    const x = useTransform(scrollYProgress, [0,!is 0.8], [350, 0]); // Adjust as needed
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.55], [0, 0.0, 1]);

    // Monitor changes in the `x` value and set `setSlideComplete` to true when x reaches 0
    useEffect(() => {
        const unsubscribe = x.on("change", (latestX) => {
            if (latestX === 0 && setSlideComplete) {
                setSlideComplete(true);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [x, setSlideComplete]);

    return (
        <div ref={targetRef}>
            <motion.h2
                className="text-2xl  bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent 
                text-4xl sm:text-5xl font-semibold text-center relative"
                style={{ x, opacity }} // Apply the animated styles
            >
                {text}
            </motion.h2>
        </div>
    );
};

export default SlidingText;