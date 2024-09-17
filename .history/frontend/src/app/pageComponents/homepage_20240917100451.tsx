import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar";
import ImageHero from "@/components/imageHero";

// Dynamically import the other components
const TextParallaxContentExample = dynamic(() => import('@/components/parallaxText').then(mod => mod.TextParallaxContentExample));
const Content = dynamic(() => import('@/components/content'));
const Accordion = dynamic(() => import('@/components/accordion'));
const CircleInfoGraphic = dynamic(() => import('@/components/circleInfographic'));
const Testimonials = dynamic(() => import('@/components/testimonials'));
const Closer = dynamic(() => import('@/components/closer'));
const Footer = dynamic(() => import('@/components/footer'));

const Homepage = () => {
  const links = [
    { name: 'How it works', destination: 'process', hasScroll: false },
    { name: 'About us', destination: 'about', hasScroll: false },
    { name: 'Contact Us', destination: 'contact' },
  ];

  return (
    <>
      <Navbar links={links} />
      <main className="bg-gray-200 mt-[6rem]">
        <ImageHero images={heroImages} />

        <TextParallaxContentExample
          src={intro2}
          alt="meme"
          isVideo={true}
          heading="Welcome to Ontario Cash for Houses"
          description={introDescription}
          muted={false}
          thumbnail={theresaDog.src}
          destination="/contact"
          buttonText="Get Your Cash Offer"
        />

        <Content {...content2Data} />

        {/* Add the rest of the content as dynamically loaded components */}
        <Content customText={<TextFormat2 />} image={nicerHome} hasAnimation={true} reverse={false} />
        <Content customText={<TextFormat reverse={true} isAnimated={true} />} image={nicerHome} hasAnimation={true} reverse={true} />
        <Accordion {...accordionProps} inContent={true} margin="mr-12" />
        <CircleInfoGraphic {...circleInfographicData1} />
        <Testimonials />
        <Closer {...openingText} />
        <Footer links={links} />
      </main>
    </>
  );
};

export default Homepage;
