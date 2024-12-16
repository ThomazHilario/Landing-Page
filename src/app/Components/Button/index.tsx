// Interfaces
import { ButtonProps } from "@/app/Interfaces/Button-type"

// Css
import style from './button.module.css'

export const Button = ({children}:ButtonProps) => {
    return(
        <button className={style.button}>
            {children}
        </button>
    )
}