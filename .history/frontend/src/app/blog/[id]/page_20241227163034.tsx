import { getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Content from '@/components/content';
import Image from 'next/image';

import { Metadata } from 'next';
import Head from 'next/head'
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

type PostProps = {
  params: { id: string };
};

// Dynamic metadata generation
export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const postData = await getPostData(params.id);

  if (!postData) {
    return notFound();
  }



  return {
    title: postData.title,
    description: postData.metaDescription,
    keywords: postData.metaKeywords, // Add this line for meta keywords
    openGraph: {
      title: postData.title,
      description: postData.metaOpenGraph.description,
      url: `https://www.ontariocashforhouses.com/blog/${postData.metaOpenGraph.url}`,
      images: [
        {
          url: "https://www.focusflowsoftware.com/media/focusFlow-logo.png",
          width: 1200,
          height: 630,
          alt: "Sell house fast - Ontario cash for houses",
        },
      ],
      type: "article",
    },
  };
  
}

// Main post component
export default async function Post({ params }: PostProps) {
  const postData = await getPostData(params.id);

  if (!postData) {
    return notFound();
  }

  const links = [
    {
        name:'Home',
        destination:'/',
        hasScroll:false
      },
    {
      name:'How it works',
      destination:'/process',
      hasScroll:false
    },
    
    {
        name:'About us',
        destination:'/about'
    },
   
    {
      name:'Contact Us',
      destination:'/contact'
    }
  ]
  return (
    <>
 <Head>
      {/* Page Title */}
      <title>{postData.metaTitle}</title>

      {/* Meta Description for Search Engines */}
      <meta name="description" content={postData.metaDescription} />

      {/* Meta Keywords for Search Engines */}
      <meta name="keywords" content={postData.metaKeywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={postData.metaOpenGraph.title || postData.title} />
      <meta property="og:description" content={postData.metaOpenGraph.description || postData.metaDescription} />
      <meta property="og:url" content={postData.metaOpenGraph.url} />
      {postData.metaOpenGraph.images.length > 0 && (
        <>
          <meta property="og:image" content={postData.metaOpenGraph.images[0].url} />
          <meta property="og:image:width" content={postData.metaOpenGraph.images[0].width.toString()} />
          <meta property="og:image:height" content={postData.metaOpenGraph.images[0].height.toString()} />
        </>
      )}
      <meta property="og:type" content="article" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaOpenGraph.title || title} />
      <meta name="twitter:description" content={metaOpenGraph.description || metaDescription} />
      {postData.metaOpenGraph.images.length > 0 && (
        <meta name="twitter:image" content={metaOpenGraph.images[0].url} />
      )}

      {/* Article-Specific Meta Tags */}
      <meta name="article:published_time" content={new Date(date).toISOString()} />
      <meta name="article:author" content="Ontario Cash for Houses" />
      <meta name="article:section" content="Real Estate" />
      <meta name="article:tag" content={metaKeywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={metaOpenGraph.url} />

      {/* Additional SEO Enhancements */}
      <meta name="robots" content="index, follow" />
      <meta http-equiv="content-language" content="en-CA" />
    </Head>
     <Navbar
     links={links}
     />
      <main className="w-screen overflow-x-hidden flex flex-col items-center justify-center mt-12
      bg-gray-200 mt-[10rem]"
        // style={{
        //   background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)',
        // }}
        >
        
        <article>
          <section className=''
        //   style={{
        //     background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
        //   }}
          >
           
          <section className="flex flex-col w-screen md:w-[80vw] justify-center items-center mx-auto max-w-[1200px] px-4
          text-black"
         >
            <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
            <p className="text-black">
              {postData.date}, &nbsp; written by Theresa Benteau, owner of Ontario Cash for Houses
            </p>
          </section>

          

          

          <section className="p-4 text-black">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2
            ">
              {postData.header1}
            </h2>
            <p className='whitespace-pre-line'>{postData.description1}</p>
          </section>
          </section>

          <div className='w-[80vw] max-w-[1200px] mx-auto
        h-[5px] bg-[#00bfff] bg-opacity-[0.6]
        my-14'
        />

        {postData.contentBoxes.map((box,index) => (
            <>
            <section key={index}>
              
       <Content
     
       image={box.image}
       description={box.description}
       mainTitle={box.mainTitle}
       reverse={index % 2 === 0}
       alt={box.alt}
       floatingImage={false}
       hasAnimation={false}
       customText={null}
       
     />

     <div className='w-[80vw] max-w-[1200px] mx-auto
        h-[5px] bg-[#00bfff] bg-opacity-[0.6]
        my-14'
        
        />
        </section>
        </>
        ))}

   
<section className='w-[95vw]
md:w-[85vw] mx-auto
max-w-[1000px] mb-12'>


<ReactMarkdown 
className=' markdown-styles'
>{postData.contentHtml}</ReactMarkdown>
{/* <button className='mt-2 p-3
              bg-[#00bfff] hover:text-[#00bfff]
              hover:bg-white transition-all rounded-2xl mr-2'>
                <Link href='/process'>
                Learn more
                </Link>
                </button> */}
                {/* {postData.buttonDestination &&
                postData.buttonText && (
                  <button className='mt-2 p-3
                  hover:bg-[#00bfff] hover:text-white
                  text-[#00bfff] bg-white
                  transition-all rounded-2xl'>
                    <Link href={postData.buttonDestination}>
                  {postData.buttonText}
                    </Link>
                    </button>
                )} */}
</section>

       



        
        

    <section className="p-4 bg-[#00bfff] bg-opacity-[0.2]
        py-6 text-black">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              {postData.header2}
            </h2>
            <p 
            className='whitespace-pre-line mb-6'>{postData.description2}</p>
            {postData.hasButtons  && (
              <>
       <button className='mt-2 p-3
              bg-[#00bfff] hover:text-[#00bfff]
              hover:bg-white transition-all rounded-2xl mr-2'>
                <Link href='/process'>
                Learn more
                </Link>
                </button>
                {postData.buttonDestination &&
                postData.buttonText && (
                  <button className='mt-2 p-3
                  hover:bg-[#00bfff] hover:text-white
                  text-[#00bfff] bg-white
                  transition-all rounded-2xl'>
                    <Link href={postData.buttonDestination}>
                  {postData.buttonText}
                    </Link>
                    </button>
                )}
               
              </>
            )}
          

        
          
          </section>

         
          <Footer
          links={links}/>
        </article>
      </main>
    </>
  );
}