// Next
import Image from "next/image"

// Image
import img from '../../../../public/Frame.png'
import vectorImg from '../../../../public/card-features-icons/Vector.svg'
import alienImg from '../../../../public/card-features-icons/alien.svg'
import infinityImg from '../../../../public/card-features-icons/infinity.svg'


// Components
import { CardFeatures } from "./card-features"

// Css
import style from './features.module.css'

export const Features = () => {
    return(
        <section className={style.featuresContainer}>
            <Image className={style.featuresImg} src={img} alt="image frame"/>

            {/* Card features */}
            <section className={style.containerCardsFeatures}>
                <CardFeatures 
                    icon={vectorImg}
                    title="A single source of truth"
                    text="When you add work to your Slate calendar we automatically calculate useful insights"
                />

                <CardFeatures 
                    icon={alienImg}
                    title="Intuitive interface"
                    text="When you add work to your Slate calendar we automatically calculate useful insights"
                />

                <CardFeatures 
                    icon={infinityImg}
                    title="Or with rules"
                    text="When you add work to your Slate calendar we automatically calculate useful insights"
                />
            </section>
        </section>
    )
}