// Next
import Image from 'next/image'

// Css import
import style from './banner.module.css'

// Images
import banner from '../../../../public/banner_images/banner.png'

export const Banner = () => {
    return(
        <section className={style.banner}>
            <Image className={style.bannerImg} src={banner} alt='Image dashboard'/> 
        </section>
    )
}