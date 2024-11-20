// Components
import { CardContents } from './Card-contents'

// Images
import screenMask from '../../../../public/card-contents/SCREEN_MASK.png'
import boardsNotification from '../../../../public/card-contents/Boards_Notifications.png'

// Css
import style from './contents.module.css'

export const Contents = () => {
    return(
        <section className={style.contentsContainer}>
            <CardContents
                title='Word'
                description={`Ever wondered if you're too reliant on a client for work? Slate helps you identify.`}
                buttonName='Sign Up'
                imageUrl={screenMask}
            />

            <CardContents
                title='Design with real data'
                description={`Ever wondered if you're too reliant on a client for work? Slate helps you identify.`}
                buttonName='Try For Free'
                imageUrl={boardsNotification}
            />
        </section>
    )
}