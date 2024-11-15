// Next
import Image from 'next/image'

// Images
import logo from '../../../../public/logo.png'

// Css
import style from './header.module.css'

export const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.headerContent}>
                {/* Logo */}
                <Image src={logo} alt='Logo do site' objectFit='cover'/>

                {/* Navigation */}
                <nav>
                    <menu className={style.menu}>
                        <li>Home</li>
                        <li>Product</li>
                        <li>About</li>
                        <li>Contact</li>
                    </menu>
                </nav>

                {/* Button login */}
                <button className={style.buttonLogin}>Login</button>
            </div>
        </header>
    )
}