import logo from '../../../../public/logo.svg'

// Css
import style from './header.module.css'

export const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.headerContent}>
                {/* Logo */}
                <img src={logo} alt='Logo do site figmaland'/>

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
                <button>Login</button>
            </div>
        </header>
    )
}