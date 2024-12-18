// Css
import style from './content.module.css'

// Image
import img from '../../../../public/Content/content.png'
import Image from 'next/image'

export const Content = () => {
    return(
        <section className={style.content__container}>
            {/* Introduction of section */}
            <section className={style.introduction__section}>
                <h2 className={style.content__title}>OpenType Feature and Variables fonts</h2>

                {/* Button */}
                <button className={style.btn__try__for__free}>Try For Free</button>
            </section>

            {/* Image from content */}
            <figure className={style.container__figure}>
                <Image className={style.imageContent} src={img} alt="Content image" />
            </figure>
        </section>
    )
}