// Components
import { SocialMedias } from './Social-medias'

// Css
import style from './footer.module.css'

export const Footer = () => {
    return(
        <footer className={style.footer}>
            <nav className={style.navigation_footer}>
                <ul className={style.nav__list}>
                    {/* Title */}
                <li className={style.nav__list__item}>
                        <h2>Fingertipe</h2>
                </li>

                <li className={style.nav__list__item}>Home</li>
                <li className={style.nav__list__item}>Examples</li>
                <li className={style.nav__list__item}>Pricing</li>
                <li className={style.nav__list__item}>Updates</li> 
                </ul>

                <ul className={style.nav__list}>
                    {/* Title */}
                <li className={style.nav__list__item}>
                        <h2>Resources</h2>
                </li>

                <li className={style.nav__list__item}>Home</li>
                <li className={style.nav__list__item}>Examples</li>
                <li className={style.nav__list__item}>Pricing</li>
                <li className={style.nav__list__item}>Updates</li> 
                </ul>

                <ul className={style.nav__list}>
                    {/* Title */}
                <li className={style.nav__list__item}>
                        <h2>About</h2>
                </li>

                <li className={style.nav__list__item}>Home</li>
                <li className={style.nav__list__item}>Examples</li>
                <li className={style.nav__list__item}>Pricing</li>
                <li className={style.nav__list__item}>Updates</li> 
                </ul>
            </nav>

            {/* Contacts */}
            <SocialMedias/>
        </footer>
    )
}