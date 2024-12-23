// Images
import twitter from '../../../../../public/social_medias_icos/twitter.svg'
import facebook from '../../../../../public/social_medias_icos/facebook.svg'
import linkedin from '../../../../../public/social_medias_icos/Linkedin.svg'

// css
import style from './social-medias.module.css'
import Image from 'next/image'

export const SocialMedias = () => {
    return(
        <section className={style.social__medias__container}>
            <ul className={style.contacts__container}>
                <li className={style.contacts}>
                    <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8885 38.8806C15.2129 39.1123 15.6015 39.2368 16.0001 39.2368C16.3987 39.2368 16.7874 39.1123 17.1118 38.8806C17.6945 38.4686 31.389 28.5805 31.3335 16.2371C31.3335 7.78273 24.4545 0.903809 16.0001 0.903809C7.54571 0.903809 0.666795 7.78272 0.666795 16.2276C0.611211 28.5805 14.3058 38.4686 14.8885 38.8806ZM16.0001 4.73714C22.3424 4.73714 27.5001 9.89489 27.5001 16.2467C27.5404 24.7529 19.0898 32.3908 16.0001 34.8959C12.9124 32.3889 4.45988 24.7491 4.50013 16.2371C4.50013 9.89489 9.65788 4.73714 16.0001 4.73714Z" fill="white"/>
                    </svg>
                    7480 Mockingbird Hill undefined 
                </li>

                <li className={style.contacts}>
                    <svg width="21" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3333 0.0288086H4.66663C2.24579 0.0288086 0.291626 1.98298 0.291626 4.40381V27.7371C0.291626 30.158 2.24579 32.1121 4.66663 32.1121H16.3333C18.7541 32.1121 20.7083 30.158 20.7083 27.7371V4.40381C20.7083 1.98298 18.7541 0.0288086 16.3333 0.0288086ZM13.4166 29.1955H7.58329V27.7371H13.4166V29.1955ZM18.1562 24.8205H2.84371V4.40381H18.1562V24.8205Z" fill="white"/>
                    </svg>
                    (239) 555-0108
                </li>

                <li className={style.contacts}>
                    {/* Twitter */}
                    <Image src={twitter} alt='Image twitter'/>

                    {/* Facebook */}
                    <Image src={facebook} alt='Image facebook'/>

                    {/* Linkedin */}
                    <Image src={linkedin} alt='Image linkedin'/>                   
                </li>
            </ul>               
        </section>
    )
}