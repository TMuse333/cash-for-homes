import AboutPage from "../pageComponents/aboutPage"


const About = () => {

  

    return (
        <>
        <Navbar
        links={links}
        />
        <main className="w-screen bg-gray-200 mt-[6rem]">
                {/* <Content2
                {...aboutContent1}
                /> */}

<h1 className=" text-black
mt-[4rem] pt-6
          text-2xl text-center mt-4 sm:text-3xl md:text-5xl">About Ontario Cash for Homes</h1>

<Content
            {...aboutContent3}
            />

            {/* <Content
            {...aboutContent4}
            reverse={true}
            background='bg-gradient-to-tr from-blue-400 via-blue-300 to-blue-200'
            /> */}

            <Closer
            {...aboutCloser}
            />

            <Footer
            links={links}
            />
        </main>
        </>

    )
}

export default About