// React
import Image from "next/image"

// Interface
interface SectionContainerProps{
    icon:string,
    title:string,
    text:string,
}

// Css
import style from './card-features.module.css'

export const CardFeatures = ({icon, title, text}:SectionContainerProps) => {
    return(
        <article className={style.cardFeaturesContainer}>
            <div className={style.headerCardFeatures}>
                {/* Icon */}
                <Image src={icon} alt="icon image" />

                {/* Title */}
                <h2 className={style.title}>{title}</h2>
            </div>

            {/* Text */}
            <p className={style.textCardFeatures}>{text}</p>
        </article>
    )
}