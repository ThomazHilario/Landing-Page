// Css
import style from './partners.module.css'

// images
import apple from '../../../../public/Partners_images/logos_apple-app-store.svg'
import apiary from '../../../../public/Partners_images/logos_apiary.svg'
import android from '../../../../public/Partners_images/logos_android-icon.svg'
import basecamp from '../../../../public/Partners_images/logos_basecamp.svg'
import airbnb from '../../../../public/Partners_images/logos_airbnb.svg'
import ibm from '../../../../public/Partners_images/logos_ibm.svg'
import Image from 'next/image'

// Components
import { Button } from '../Button'

export const Partners = () => {

    const partnersImages = [
        {
            svg:apple,
            width:60,
            height:60
        },
        {
            svg:apiary,
            width:60,
            height:60.7
        },
        {
            svg:android,
            width:60,
            height:70.55
        },
        {
            svg:basecamp,
            width:72.11,
            height:60
        },
        {
            svg:airbnb,
            width:60,
            height:64.69
        },
        {
            svg:ibm,
            width:149.85,
            height:60
        }
    ]

    return(
        <section className={style.partnersContainer}>
            
            <section className={style.contentPartners}>
                {partnersImages.length > 0 && partnersImages.map((image, index) => (
                    <Image 
                        key={index} 
                        src={image.svg} 
                        alt='logos das partners'
                        priority={false}
                    />
                ))}
            </section>

            <Button>All Partners</Button>
        </section>
    )
}