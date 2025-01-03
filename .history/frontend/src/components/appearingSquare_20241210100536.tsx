"use client"

import React, { useEffect, useState , useRef} from "react";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import SlidingText from "./slidingText";

interface ContentProps {
    src: string;
    alt?: string;
    isVideo?: boolean;
    description?: string;
    id: string;
    sliderText: string;
    thumbnail?:string
}

const AppearingContent: React.FC<ContentProps> = ({
    src,
    alt,
    isVideo,
    description,
    id,
    sliderText,
    thumbnail
}) => {
    const [scope, animate] = useAnimate();
    const [animationStarted, setAnimationStarted] = useState(false);

    const handleAnimation = async () => {

        await animate(`#p-${id}`, {opacity:1})

        // Start by making the container visible
        await animate(`#container-${id}`, { opacity: 1 });

        // Animate each side of the border sequentially
        await animate(`#border-top-${id}`, { width: "100%" }, { duration: 0.5 });
        await animate(`#border-left-${id}`, { height: "50vh" }, { duration: 0.5 });
        await animate(`#border-bottom-${id}`, { width: "100%" }, { duration: 0.5 });
      
        await animate(`#border-right-${id}`, { height: "50vh" }, { duration: 0.5 });


        // Animate image opacity
        await animate(`#content-${id}`, { opacity: 1 },
        { duration: 0.5 });
    };

    useEffect(() => {
        if (animationStarted) {
            handleAnimation();
        }
    }, [animationStarted]);

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Scaling the section when scrolling past it
    const scale = useTransform(scrollYProgress, [0.25, 1], [1, 0.55]);

    return (
        <motion.section
        style={{
            scale
        }}
         className="w-screen relative my-8">
            <SlidingText text={sliderText} setSlideComplete={setAnimationStarted} />

            <section className="relative" ref={scope}>
                

                <div
                    id={`container-${id}`}
                    className="w-[90vw] max-w-[1000px] max-h-[500px] relative opacity-0
                    mx-auto my-auto "
                >
                    <div
                        id={`border-top-${id}`}
                        className="absolute top-0 left-0 h-[2px] bg-black"
                        style={{ width: "0%" }} // Start with zero width
                    ></div>
                      <div
                        id={`border-right-${id}`}
                        className="absolute bottom-0 right-0 w-[2px] bg-black"
                        style={{ height: "0%" }} // Start with zero height, from bottom
                    ></div>
                    <div
                        id={`border-bottom-${id}`}
                        className="absolute bottom-0 left-0 h-[2px] bg-black"
                        style={{ width: "0%" }} // Start with zero width
                    ></div>
                    <div
                        id={`border-left-${id}`}
                        className="absolute top-0 left-0 w-[2px] bg-black"
                        style={{ height: "0%" }} // Start with zero height
                    ></div>

                        {isVideo ? (
                            <>

<video
id={`content-${id}`}
poster={thumbnail}
controls
className="w-full mx-auto object-contain opacity-0
max-h-[500px] h-[50vh]">
    <source src={src} type='video/mp4'/>

</video>


</>

                        ) : (

                            <motion.img
                            id={`content-${id}`}
                            src={src}
                            alt={alt}
                            className="w-full mx-auto object-contain opacity-0

                            max-h-[500px]"
                        />
                        )}

                   
                </div>
                <p id={`p-${id}`} className="text-left px-4 opacity-1 my-6
                text-black
                mx-auto max-w-[900px] md:text-lg
                ">
                  {description}
                </p>
            </section>
        </motion.section>
    );
};

export default AppearingContent;