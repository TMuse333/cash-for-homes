import react from 'react'


interface TestimonialProps {
    testimonials:{
        title:string,
        description:string,
        name:string
    }[]
   

}

const temp = {
    title:'Quick and great price',
    description:'Cash for homes '
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