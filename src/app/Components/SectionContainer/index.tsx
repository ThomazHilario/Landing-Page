// React
import { ReactNode } from "react"

// Interface
interface SectionContainerProps{
    title:string,
    text?:string,
    children:ReactNode
}

// Css
import style from './sectionContainer.module.css'

export const SectionContainer = ({title, text, children}:SectionContainerProps) => {
    return(
        <section className={style.sectionContainer}>
            {/* Title */}
            <h1 className={style.title}>{title}</h1>

            {/* Paragraph */}
            <p className={style.paragraph}>{text}</p>

            {/* Content */}
            {children}
        </section>
    )
}