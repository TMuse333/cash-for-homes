import react from 'react'


interface TestimonialProps {
    testimonials:{
        title:string,
        description:string,
    }[]
   

}

const temp = {
    ''
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