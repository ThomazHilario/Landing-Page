// Components
import { Banner } from './Components/Banner';
import { SectionContainer } from './Components/SectionContainer';
import { Features } from './Components/Features';

// Css
import style from './home.module.css'

export default function Home() {
  return (
    <section>

      {/* Banner */}
      <section>

        {/* Introduction */}
        <article className={style.introduction}>
          {/* Title */}
          <h1 className={style.title}>Work at the speed<br/>of thought</h1>

          {/* Description */}
          <p className={style.description}>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
        </article>

        {/* Container buttons */}
        <section className={style.containerButtons}>
          <button className={style.buttonFromContainer}>Try For Free</button>
          <button className={style.buttonFromContainer}>Learn More</button>
        </section>

        {/* Banner */}
        <Banner/>
      </section>

      {/* Features */}
      <SectionContainer 
        title='Features' 
        text='Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.'
      >
        
        <Features/>
      </SectionContainer>
    </section>
  );
}
