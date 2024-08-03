import react from 'react'


interface TestimonialProps {
    testimonials:{
        title:string,
        description:string,
        name:string
    }[]
   

}

const temp = {
    'Quick and great price'
}


const Testimonials:React.FC<TestimonialProps> = (
    {testimonials}
) => {



    return (<>
    <section className='bg-black'>

    </section>
    </>

    )
}