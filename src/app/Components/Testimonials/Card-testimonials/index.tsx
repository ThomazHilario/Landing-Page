// Css
import Image from 'next/image'
import style from './card-testimonials.module.css'

// Interface
import { TestimonialsCardProps } from '@/app/Interfaces/Testimonials-Card-types'

export const TestimonialsCard = ({ image, name, description }:TestimonialsCardProps) => {
    return(
        <article className={style.card__container__testimonials}>
            <div className={style.data__user}>
                {/* Image */}
                <Image src={image} alt='foto do usuario'/>

                {/* Name */}
                <h2 className={style.title__card__testimonials}>{name}</h2>
            </div>

            <p>{description}</p>
        </article>
    )
}