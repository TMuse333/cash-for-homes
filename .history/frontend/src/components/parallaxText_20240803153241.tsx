import  { ReactNode, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, motionValue, MotionValue} from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";
// import laptop from '../../media/laptop.jpg'
import { AppContext, useAppContext } from "@/context/context";





interface Props {
    src:string,
    alt:string,
    isVideo:boolean
    description?:string
}

interface VideoProps {
    src:string,
    alt:string,
    motionTextYPosition:MotionValue<number>
}


const Video:React.FC<VideoProps> = (
    {src, alt, motionTextYPosition}
) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoPlaying, setVideoPlaying] = useState(false)
    const {textYPosition} = useAppContext()

    const options = {
        root:'null',
        rootMargin:'0px',
        threshold:0.5
    }

    useEffect(() => {
        const currentPosition = motionTextYPosition.get();
        const threshold = -100;
        if (Math.abs(currentPosition - threshold) < 1) {
          console.warn('video moment');
          setVideoPlaying(true);
        
        } else {
          setVideoPlaying(false);
        }
        console.log('text y position', currentPosition);
      }, [textYPosition]);

    return (
        <motion.video
       
        ref={videoRef}
        className="w-full h-full object-contain relative z-[4000]"
        controls
       preload="auto"
       autoPlay
       
      >
        <source 
        
        src={src} type="video/mp4"/>
       </motion.video>
    )
}




export const TextParallaxContentExample:React.FC<Props>
 = ({src,alt,isVideo, description}) => {
  return (
    <div className=" relative">
      <TextParallaxContent
        imgUrl={src}
        alt={alt}
        subheading="Subtitle here"
        heading="Main title here"
        isVideo={isVideo}
       
      >
        {description && (
            <p className="rounded-md bg-gray-500"></p>
        )}
       
      </TextParallaxContent>
    
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
  alt,
  isVideo
 
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: ReactNode;
  alt:string
  isVideo:boolean

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
        
       />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl, isVideo, alt }: { imgUrl: string, isVideo?:boolean,
alt:string }) => {
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

  const videoRef = useRef<HTMLVideoElement>(null);


  

  useEffect(() => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [videoPlaying]);

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

       
        <motion.img className="w-full h-full object-contain"
        src={imgUrl}
        alt={alt}
       
        />

         ) : (
          <Video
          src={imgUrl}
          alt={alt}
          motionTextYPosition={motionTextYPosition}/>
        
        )

         }
       
      <motion.div
        className="absolute inset-0 "
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
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

    const { setTextYPosition} = useAppContext()
  
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    // Log the y position
    useEffect(() => {
        const unsubscribe = y.onChange((value) => {
         

          setTextYPosition(value)
        });
        return unsubscribe;
      }, []);



  
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
  };
  