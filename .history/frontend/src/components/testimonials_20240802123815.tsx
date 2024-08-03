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
    description:'The speed with which you bought my house was phenomenal! I’m so glad I found you guys and am very happy with the service I received. I will be recommending you.',
    name:'B.Garcia'
}


const Testimonials:React.FC<TestimonialProps> = (
    {testimonials}
) => {



    return (<>
    <section className='bg-black'>
        <p>{temp.title}</p>
        <p>{temp.description}</p>

    </section>
    </>

    )
}