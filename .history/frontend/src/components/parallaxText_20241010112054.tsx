import  { ReactNode, useRef, useEffect, useState, memo } from "react";
import { motion, useScroll, useTransform, motionValue, MotionValue} from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";
// import laptop from '../../media/laptop.jpg'
import {  useAppContext } from "@/context/context";
import { useVideoIntersectionObserver} from "./intersectionObserver";
import Link from "next/link";


interface Props {
    src:string,
    alt:string,
    isVideo:boolean
    description?:string,
    muted?:boolean,
    thumbnail?:string,
    heading:string,
    subHeading:string,
    buttonText?:string,
    destination?:string
   
}

interface VideoProps {
    src:string,
    alt:string,
    thumbnail?:string
    muted?:boolean
}








 const TextParallaxContentExample:React.FC<Props>
 = ({src,alt,isVideo, description,muted,
thumbnail,subHeading,heading,buttonText,destination }) => {
  TextParallaxContentExample.displayName = 'TextParallaxContentExample'
  return (
    <div className=" relative bg-gray-200 mb-4">
      <TextParallaxContent
        imgUrl={src}
        alt={alt}
        subheading={subHeading}
        heading={heading}
        isVideo={isVideo}
      muted={muted}
      thumbnail={thumbnail}
       
      >
        {description && (
            <p className="rounded-md bg-gray-400
            w-[80%] ml-auto mr-auto relative
            p-8 rounded-xl sm:text-xl w-full"
            style={{
              whiteSpace:'pre-line'
            }}>
              {description}
              {destination && (
                <>
                <br/><br/>
                <Link href={destination}
                passHref>

               
                <button className="bg-black
                p-3 text-white 
                rounded-xl hover:text-black
                hover:bg-white
                transition-colors">
{buttonText}
                </button>
                </Link>
                </>
                
              )}
              

            </p>
        )}
       
      </TextParallaxContent>
    
    </div>
  );
};

const IMG_PADDING = 12;

const Video: React.FC<VideoProps> = ({ src, muted = true, thumbnail }) => {

  Video.displayName = 'Video'
  const [videoPlaying, setVideoPlaying] = useState(false);

  const [inView, setInView] = useState(false);

  const options = {
    root: null,
    rootMargin: !inView ? '50px' : '500px',
    threshold: 0.8,
  };

  const videoRef = useVideoIntersectionObserver(setInView, options, true);
  const { scrollYProgress } = useScroll(); // Use Framer Motion's useScroll

  // Check scroll position to determine if the video should play
  useEffect(() => {
    const handleScroll = () => {
      if (scrollYProgress.get() > 0.5 && !videoPlaying && inView) { // Play video when scrolled past 50% and in view
        setVideoPlaying(true);
      } else if (scrollYProgress.get() <= 0.5 && videoPlaying) { // Pause video when scrolled back above 50%
        setVideoPlaying(false);
      }
    };

    const unsubscribe = scrollYProgress.onChange(handleScroll); // Listen for scroll changes
    return () => unsubscribe(); // Cleanup
  }, [scrollYProgress, videoPlaying, inView]);

  useEffect(() => {
    if (videoRef.current && !inView && muted) {
      setVideoPlaying(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    } else if (videoRef.current && !inView && !muted) {
      setVideoPlaying(false);
      videoRef.current.pause();
    }
  }, [inView]);

  useEffect(() => {
    if (videoPlaying && videoRef.current && muted) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [videoPlaying]);

  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();

      // Enter fullscreen mode
      const videoElement = videoRef.current as HTMLVideoElement & {
        requestFullscreen?: () => void;
        mozRequestFullScreen?: () => void;
        webkitRequestFullscreen?: () => void;
        msRequestFullscreen?: () => void;
      };
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
      }
    }
  };

  return (
    <>
      {muted === true ? (
        <motion.video
          ref={videoRef}
          className="w-full h-full object-contain relative z-[4000] bg-black"
          preload="auto"
          muted
          aria-label="A great video" // For accessibility
          loop
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      ) : (
        <>
          {!playing ? (
            <div className="relative w-full h-full z-[4000] bg-black">
              <motion.img
                src={thumbnail}
                className="w-full h-full object-contain cursor-pointer"
                onClick={handlePlayClick}
                alt='A video explaining how Ontario Cash for Houses will sell your property for cash quickly'
              />
              <button
                className="absolute inset-0 flex items-center justify-center"
                onClick={handlePlayClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 p-2 text-white relative bg-gray-400 rounded-full hover:bg-gray-600 transition-colors scale-[3]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </button>
            </div>
          ) : (
            <motion.video
              ref={videoRef}
              className="w-screen h-screen object-contain relative z-[3999] bg-black"
              src={src}
              muted={muted}
              controls
              autoPlay
            >
              Your browser does not support the video tag.
            </motion.video>
          )}
        </>
      )}
    </>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
  alt,
  isVideo,
  muted,
  thumbnail

 
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: ReactNode;
  alt:string
  isVideo:boolean,
  muted?:boolean,
  thumbnail?:string

}) => {


  return (
    <div
      style={{
        // paddingLeft: IMG_PADDING,
        // paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage 
        imgUrl={imgUrl}
        isVideo={isVideo}
        alt={alt}
        muted={muted}
        thumbnail={thumbnail}
        
       />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <motion.div
        className=" inset-0 flex flex-col items-center justify-center"
        style={{
          scale: useTransform(
            useScroll().scrollYProgress,
            [0, 1],
            [1, 0.65]
          )
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const StickyImage = ({ imgUrl, isVideo, alt,muted,thumbnail }: { imgUrl: string, isVideo?:boolean
  alt:string,muted?:boolean,
  thumbnail?:string,
 }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const {textYPosition} = useAppContext()

  const motionTextYPosition = motionValue(textYPosition);

  const brightness = useTransform(
    motionTextYPosition,
    [0, -100],  // Range of scrollYProgress values
    [0.2, 1] // Range of brightness values
  );

  const [imgBrightness, setImgBrightness] = useState(0.2)

  const [videoPlaying, setVideoPlaying] = useState(false)


  useEffect(() => {
    const unsubscribe = brightness.onChange((value) => {
     
      setImgBrightness(value)
    });

    return () => {
      unsubscribe();
    };
  }, [brightness]);



  

  

  return (
    <motion.div
      style={{
        // backgroundImage: `url(${imgUrl})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        
        height:'100vh',
        top: IMG_PADDING,
        scale,
        filter: `brightness(${imgBrightness})`,
        
       
      }}
      ref={targetRef}
      className="sticky z-[0] overflow-hidden  relative"
    >
        {!isVideo ? (

       
        <motion.img className="w-full h-full object-contain relative"
        src={imgUrl}
        alt={alt}
        fetchPriority='high'
       
        />

         ) : (
          <Video
          src={imgUrl}
          alt={alt}
          muted={muted}
          thumbnail={thumbnail}
          
         />
        
        )

         }
       
      <motion.div
        className="absolute inset-0 relative "
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = memo(({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
  });

  const { setTextYPosition } = useAppContext();

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  // Log the y position
  useEffect(() => {
      const unsubscribe = y.onChange((value) => {
          setTextYPosition(value);
      });
      return unsubscribe;
  }, [y, setTextYPosition]);

  return (
      <motion.div
          style={{
              y,
              opacity,
          }}
          ref={targetRef}
          className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
          <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
              {subheading}
          </p>
          <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </motion.div>
  );
});


export default TextParallaxContentExample


  