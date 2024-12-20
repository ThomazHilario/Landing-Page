// Components
import { Banner } from './Components/Banner';
import { SectionContainer } from './Components/SectionContainer';
import { Features } from './Components/Features';
import { Contents } from './Components/Contents';
import { Gallery } from './Components/Gallery';
import { Partners } from './Components/Partners';

// Css
import style from './home.module.css'
import { Testimonials } from './Components/Testimonials';
import { Content } from './Components/Content';
import { Footer } from './Components/Footer';



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

      {/* Contents */}
      <SectionContainer
        title='Contents'
        text={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
      >

        <Contents/>
      </SectionContainer>

      {/* Gallery */}
      <SectionContainer 
        title='Gallery'
        text={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
      >
        <Gallery/>
      </SectionContainer>

      {/* Partners */}
      <SectionContainer
        title='Partners'
        text={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
      >
        <Partners/>
      </SectionContainer>

      <SectionContainer
        title='Testimonials'
      >
        <Testimonials/>
      </SectionContainer>
      
      {/* Contents */}
      <Content/>

      {/* Footer */}
      <Footer/>
    </section>
  );
}
