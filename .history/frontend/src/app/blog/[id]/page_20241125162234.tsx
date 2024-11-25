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
    title: postData.title ,
    description: postData.metaDescription ,
    openGraph: {
      title: postData.title ,
      description: postData.metaOpenGraph.description,
      url: `https://www.ontariocashforhouses.com/blog/${params.id}`,
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
      destination:'process',
      hasScroll:false
    },
    
    {
        name:'About us',
        destination:'/about'
    },
   
    {
      name:'Contact Us',
      destination:'contact'
    }
  ]
  return (
    <>
    {/* <Head>
      
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    </Head> */}
     <Navbar
     links={links}
     />
      <main className="w-screen overflow-x-hidden flex flex-col items-center justify-center mt-12
      bg-gray-200"
        // style={{
        //   background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)',
        // }}
        >
        
        <article>
          <section className=''
          style={{
            background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
          }}>
           
          <section className="flex flex-col w-screen md:w-[80vw] justify-center items-center mx-auto max-w-[1200px] px-4"
         >
            <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
            <p className="text-white">
              {postData.date}, &nbsp; written by Theresa Benteau, owner of Ontario Cash for Houses
            </p>
          </section>

          

          

          <section className="p-4">
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
       <Content
       key={index}
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
        </>
        ))}

   



       



        
        

    <section className="p-4 bg-[#00bfff] bg-opacity-[0.2]
        py-6">
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
                <Link href='/lets-work'>
                Book a meeting today
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

          <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>
          <Footer
          links={links}/>
        </article>
      </main>
    </>
  );
}