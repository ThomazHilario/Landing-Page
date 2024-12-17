// Images
import img from '../../../../public/Testimonials/img1.png'
import img2 from '../../../../public/Testimonials/img2.png'
import img3 from '../../../../public/Testimonials/img3.png'
import img4 from '../../../../public/Testimonials/img4.png'

// Css
import style from './testimonials.module.css'

// Components
import { TestimonialsCard } from './Card-testimonials'

export const Testimonials = () => {

    const testimonials = [
        {
            image:img,
            name:'Claire Bell Designer',
            description:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'
        },
        {
            image:img2,
            name:'Francisco Lane Designer',
            description:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'
        },
        {
            image:img3,
            name:'Ralph Fisher Designer',
            description:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'
        },
        {
            image:img4,
            name:'Jorge Murphy Designer',
            description:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'
        }
    ]

    return(
        <section className={style.testimonials__container}>
            {testimonials.length > 0 && testimonials.map((testimonial, index) => (
                <TestimonialsCard
                    image={testimonial.image}
                    name={testimonial.name}
                    description={testimonial.description}
                />
            ))}
        </section>
    )
}