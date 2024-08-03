import react from 'react'


interface TestimonialProps {
    testimonials:{
        title:string,
        description:string,
    }
   

}


const Testimonials:React.FC<TestimonialProps> (
    {t}
)