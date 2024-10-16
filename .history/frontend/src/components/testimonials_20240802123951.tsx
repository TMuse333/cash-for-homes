import react from 'react'


interface TestimonialProps {
    testimonials?:{
        title:string,
        description:string,
        name:string
    }[]
   

}

const temp = {
    title:'Quick and great price',
    description:'The speed with which you bought my house was phenomenal! I’m so glad I found you guys and am very happy with the service I received. I will be recommending you.',
    name:'B.Garcia'
}


const Testimonials:React.FC<TestimonialProps> = (
    {testimonials}
) => {



    return (<>
    <section className='bg-black border border-white 
    ml-auto mr-auto max-w-[1200px] w-[80vw]'>
        <p className='text-center mb-4 mt-2 text-3xl'>{temp.title}</p>
        <p>{temp.description}</p>

    </section>
    </>

    )
}


export default Testimonials