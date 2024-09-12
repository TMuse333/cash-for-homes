






const Process = () => {

 

    return (
            <>
          
            <main className="w-screen  bg-gray-200
   ">
                <Navbar
                links={links}
                relative={true}
                />
                
                <TextParallaxContentExample
                {...processParallax}
               
                />

                <p className="text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl mb-4">Quick and simple</p>
                

                <SlideShowCarousel
                {...processCarouselData}/>


 

            <p className="rounded-md bg-gray-400
            w-[95%] mx-auto relative
            p-8 rounded-xl sm:text-xl mt-[rem] mb-[4rem]
            max-w-[1200px]">
            Don&apos;t wait any longer to get a cash offer for your property with our straightforward and hassle-free process. Contact us today to take the first step toward a quick and easy sale. Let’s work together to make your real estate journey smooth and successful.
            <br/>
            <Link href="/contact">

         
             <button className="mt-4 bg-blue-500 p-3 rounded-xl hover:scale-[1.05]
             hover:bg-white transition-all hover:text-blue-500">
                Let&apos;s get started
             </button>
             </Link>
            </p>

            <Accordion
            {...processFAQ}
            />

                

                <Footer
                links={links}
                />
                        
            </main>
            
            
            </>
    )
}

export default Process