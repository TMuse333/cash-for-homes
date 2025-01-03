"use client"


import React, { useState, useEffect, useRef } from 'react';
import { FaPause, FaPlay, FaRedo } from 'react-icons/fa';
import {useIntersectionObserver} from './intersectionObserver/intersectionObserver'
import {motion, AnimatePresence} from 'framer-motion'
import { useGeneralContext } from '@/context/context';
import Image from 'next/image';


interface CarouselProps {
    images: {
        src: string,
        alt: string,
        description: string
    }[]
    title?: string,
    description?: string
}

interface SliderProps {
    src: string,
    alt: string,
    description: string,
    index: number,
    carouselLength:number,
    currentElement:number,
    shift:number
}

const CarouselController: React.FC<ControllerProps> = ({
  carouselLength,
  currentElement,
  setCurrentElement,
 inView,
 shift,
 setShift
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);
  const [slideProgressReset, setSlideProgressReset] = useState(false);
  const [showRefreshBar, setShowRefreshBar] = useState(false);
  const [slideShowPaused, setSlideShowPaused] = useState(false);



  const scrollToElement = (id: string, index: number) => {
    if(!inView){
      return;
    }
      setCurrentElement(index)
      console.log('inview',inView);
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
  };

  function handleCircleClick(index:number){
    if(!inView){
      return
    }
    setCurrentElement(index)
    setShift(-index)
  }



function togglePlay(){
  setSlideShowPaused(!slideShowPaused);
  console.log('pause nation');
}

function resetSlideShow(){
  setCurrentElement(0);
  setShowRefreshBar(false);
  setSlideProgress(0);
  setShift(0)
  scrollToElement(`carousel-element-${0}`, 0);
}

useEffect(()=> {
  setSlideProgress(0);
  setSlideProgressReset(true);
},[currentElement])

useEffect(() => {
  const interval = setInterval(() => {
    if(slideShowPaused || !inView){
      
      return;
    }

    if (slideProgress < 100 ) {
      console.log('filling the bar')
      setShowRefreshBar(false);
      setSlideProgressReset(false);
      setSlideProgress((curr) => curr + 8); // Increment by 8 to reach 100 in a slower time

    } else if (currentElement < carouselLength - 1) {
      setCurrentElement(currentElement + 1);
      scrollToElement(`carousel-element-${currentElement + 1}`, currentElement + 1);
      // setShift((prev)=>prev - 1)
      setSlideProgressReset(true);
      clearInterval(interval); // Stop the interval when slideProgress reaches 100
      setSlideProgress(0);
    }
  }, 250); // Interval of 250ms for smoother transition

  return () => clearInterval(interval); // Clean up the interval on component unmount
}, [slideProgress, currentElement, setCurrentElement, carouselLength, slideShowPaused, inView]);

useEffect(() => {
  if (currentElement === carouselLength - 1 && slideProgress >= 100) {
    console.log('Reached end of carousel with slideProgress at 100');
    setTimeout(() => {
      setShowRefreshBar(true);
    }, 300);
  }
}, [slideProgress, currentElement]);

useEffect(()=> {
  console.log('current shift',shift)
},[shift])


  return (
      <div 
      className='absolute left-[50%] -translate-x-[50%] flex
      bottom-0'>
          <button className='bg-gray-700 ml-auto mr-auto p-4 rounded-xl flex'>
              {Array.from({ length: carouselLength }, (_, index) => (
                  <div
                      key={index}
                      className={`relative bg-gray-400 hover:bg-gray-200 rounded-full h-[15px] w-[15px] mr-2 transition-all ${currentElement === index ? 'w-[60px]' : ''}`}
                      // onClick={() => scrollToElement(`carousel-element-${index}`, index)}
                      onClick={()=>handleCircleClick(index)}
                  >
                    {currentElement === index && (
                       <div className={`absolute  h-full bg-gray-100 rounded-full`}
                       style={{ width:`${slideProgress}%`, transition:!slideProgressReset ? 'width 0.3s ease-in' : 'none' }}/>
                    )}
                  </div>
              ))}
          </button>
          <button className='rounded-full bg-gray-700 h-[50px] w-[50px] mt-auto mb-auto ml-6'>
            {showRefreshBar ? (
               <FaRedo className="icon ml-auto mr-auto scale-[1.5]" onClick={resetSlideShow} />
            ) : slideShowPaused ?  (
              <FaPlay className="icon ml-auto mr-auto scale-[1.5]" onClick={togglePlay}/>
            ) : (
              <FaPause className="icon ml-auto mr-auto scale-[1.5]" onClick={togglePlay} />
            )}
          </button>
      </div>
  );
}

const CarouselElement: React.FC<SliderProps> = ({
  src,
  alt,
  description,
  index,
  carouselLength,
  currentElement,
  shift
}) => {
  const [scrollMarginTop, setScrollMarginTop] = useState(0);
  const isCurrentSlide = currentElement === index;
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const { isMobile } = useGeneralContext();

  const updateScrollMargin = () => {
    const element = document.getElementById(`carousel-element-${index}`);
    if (element) {
        const rect = element.getBoundingClientRect();
        const distanceFromTop = rect.top; // Distance from the viewport top
        setScrollMarginTop(distanceFromTop);
        // console.warn('scroll margin top', distanceFromTop);
    }
};

useEffect(() => {
  // Initial calculation of scroll margin
  updateScrollMargin();

  // Add scroll event listener
  const handleScroll = () => {
      updateScrollMargin();
  };

  window.addEventListener('scroll', handleScroll);

  // Clean up event listener on component unmount
  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, [index]); 

  const handleAnimationComplete = () => {
      setAnimationComplete(!animationComplete);
      console.log('animation completed!');
  };

  return (
      <section 
          id={`carousel-element-${index}`}
          className={`w-[90vw] bg-black relative md:max-h-[800px] ml-auto mr-auto h-[60vh]   flex-shrink-0
          rounded-2xl `}
          style={{
              transform: `translateX(${(shift * 75)}%)`,
              transition: 'transform 1s ease-in',
              scrollSnapAlign: 'center',
              scrollMarginTop: `${scrollMarginTop}px`, // Use the calculated scroll margin
              scrollBehavior: 'smooth'
          }}
      >
         
          <Image
              src={src}
              alt={alt}
              className={`w-[95%] ml-auto mr-auto object-cover h-full max-w-[1200px]
              rounded-3xl`}
              style={{ filter: 'brightness(0.6)', objectPosition: '50% 50%' }}
              width={1000} // Base width as a percentage
              height={55} // Base height as a percentage
          />
      </section>
  );
}

interface ControllerProps {
    carouselLength: number,
    currentElement: number,
    setCurrentElement: (index: number) => void,
    inView:boolean,
    shift:number,
    setShift:React.Dispatch<React.SetStateAction<number>>;
}



const SlideShowCarousel: React.FC<CarouselProps> = ({ images, title, description }) => {
    const [currentElement, setCurrentElement] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const {isMobile} = useGeneralContext()
    const [shift, setShift] = useState(0)

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: !isMobile ? 0.5 : 0.8,
      toggle:true
    };

    const [inView, setInView] = useState(false);

    
    const componentRef = useIntersectionObserver(setInView, options, false, true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.id.replace('carousel-element-', ''));
                        setCurrentElement(index);
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.2,
            }
        );

        const elements = document.querySelectorAll('[id^="carousel-element-"]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);


    useEffect(()=>{
      setCurrentElement(0)
      const element = document.getElementById('carousel-element-0');
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
     
    },[])

    useEffect(() => {
      const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
          // Log the horizontal scroll position
          console.log('Scroll position:', container.scrollLeft);
          
          // Optional: You can calculate and log the percentage scrolled
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          const scrollPercentage = (container.scrollLeft / maxScrollLeft) * 100;
          console.log('Scrolled percentage:', scrollPercentage.toFixed(2) + '%');
        }
      };
  
      const container = containerRef.current;
      if (container) {
        // Add scroll event listener to the container
        container.addEventListener('scroll', handleScroll);
      }
  
      // Cleanup the event listener on component unmount
      return () => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
        }
      };
    }, []);

    return (
        <section className='relative ml-auto mr-auto w-screen mb-[10rem]
        bg-[#00bfff] bg-opacity-[0.2]
      
        '>
          <div ref={componentRef}
          className='relative ml-auto mr-auto w-screen '>
            <div 
                className=" flex 
                w-screen relative
                h-[60vh] 
                md:max-h-[800px]
                overflow-y-scroll
                px-[4rem]
               
                 "
                style={{ scrollSnapType: 'x mandatory' }}
                ref={containerRef}
            >
                {images.map((image, index) => (
                    <CarouselElement
                        {...image}
                        key={index}
                        index={index}
                        carouselLength={images.length}
                        currentElement={currentElement}
                        shift={shift}
                    />
                ))}
            </div>
          </div>
            <CarouselController
                carouselLength={images.length}
                currentElement={currentElement}
                setCurrentElement={setCurrentElement}
                inView={inView}
                shift={shift}
                setShift={setShift}
            />
        </section>
    );
}

export default SlideShowCarousel;