// Next
import Image, { StaticImageData } from "next/image";

// Interface
interface CardContentsProps{
    title:string;
    description:string;
    imageUrl:StaticImageData;
    buttonName:string
}

// Css
import style from './card-contents.module.css'


export const CardContents = ({title, description, imageUrl, buttonName}:CardContentsProps) => {
    return(
        <article className={style.cardContents}>
            {/* Title */}
            <h2 className={style.cardTitle}>{title}</h2>

            {/* Descriptio */}
            <p className={style.cardDescription}>{description}</p>

            <button className={style.cardButton}>{buttonName}</button>

            {/* Image */}
            <Image className={style.imageCard} src={imageUrl} alt="card image"/>
        </article>
    )
}