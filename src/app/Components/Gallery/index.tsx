// Next-image
import Image, { StaticImageData } from "next/image"

// images
import img1 from '../../../../public/gallery_images/Rectangle-1.png'
import img2 from '../../../../public/gallery_images/Rectangle-2.png'
import img3 from '../../../../public/gallery_images/Rectangle-3.png'
import img4 from '../../../../public/gallery_images/Rectangle-4.png'
import img5 from '../../../../public/gallery_images/Rectangle-5.png'
import img6 from '../../../../public/gallery_images/Rectangle-6.png'
import img7 from '../../../../public/gallery_images/Rectangle-7.png'

// Components 
import { Button } from "../Button"

// Css
import style from './gallery.module.css'

export const Gallery = () => {

    const imagesSources:{source:StaticImageData, alt:string, height:number, width:number}[] = [
        {
            source:img1,
            alt:'Image from gallery',
            width:225,
            height:285
        },
        {
            source:img2,
            alt:'Image from gallery',
            width:225,
            height:285
        },
        {
            source:img3,
            alt:'Image from gallery',
            width:225,
            height:285
        },
        {
            source:img4,
            alt:'Image from gallery',
            width:225,
            height:285
        },
        {
            source:img5,
            alt:'Image from gallery',
            width:395,
            height:285
        },
        {
            source:img6,
            alt:'Image from gallery',
            width:225,
            height:285
        },
        {
            source:img7,
            alt:'Image from gallery',
            width:395,
            height:285
        }
    ]

    return(
        <section className={style.gallery__container}>
            {/* Images */}
            <section className={style.gallery__images__container}>
                {imagesSources.length > 0 && imagesSources.map((image, idx) => (
                    <Image
                        className={style.img} 
                        key={idx} 
                        src={image.source} 
                        alt={image.alt} 
                        width={image.width} 
                        height={image.height}
                    />
                ))}
            </section>

            <Button>See More</Button>
        </section>
    )
}