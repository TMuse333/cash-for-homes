import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useIntersectionObserver } from './intersectionObserver';

const TextFormat2: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  };
  const componentRef = useIntersectionObserver(setIsVisible, options);

  const textVariants: Variants = {
    initial: {
      opacity: 0,
      x: -25
    },
    animate: {
      opacity: 1,
      x: 0,
    //   transition: {
    //     delay: 0.3
    //   }
    }
  };

  const listVariants = (index: number): Variants => {
    return {
      initial: {
        opacity: 0,
        x: -25
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.3+ index * 0.3
        }
      }
    };
  };

  return (
    <motion.section
      ref={componentRef}
      className="text-black pl-6 pt-6
      md:w-[50vw] bg-red-200 md:ml-"
      initial="initial"
      animate={isVisible ? "animate" : "initial"}
    >
      <motion.h3
        className="text-2xl font-bold mb-4"
        variants={textVariants}
      >
        Are you a motivated seller?
      </motion.h3>

      <motion.ul className="mb-2 list-disc">
        {['Do you need to sell quickly?', 'Does your property need a lot of repairs?', 'Do you want a fast cash offer?'].map((item, index) => (
          <motion.li
            key={index}
            className="mb-2"
            variants={listVariants(index)}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <motion.p 
      
      initial={{
        opacity:0
      }}
      animate={{
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        delay:1.3
      }}
      >
        If you answered <span className="text-lg text-green-400">YES</span> to these three questions...
        <br /><br />
        <span className="font-bold text-xl">Contact us today!</span>
      </motion.p>

      <Link href='contact'>
        <motion.button
          className="bg-blue-400 hover:bg-white transition-colors text-white hover:text-blue-400 p-3 rounded-xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1.5 }}
        >
          Contact us
        </motion.button>
      </Link>
    </motion.section>
  );
};

export default TextFormat2;
