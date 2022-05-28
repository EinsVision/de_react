import React from 'react';
import Links from '../../components/Links/Links';
import './Hero.scss';

function Hero() {
  return (
    <section className='hero'>
      <div className="hero__container">
        <div className="hero__inner">
          <div className="hero__inner__col">
            <div className="hero__inner__title">
              I make it Frontend Heroes
            </div>
            <div className="hero__inner__links">
              <Links name='Websites'/>
              <Links name='Apps'/>
              <Links name='Branding'/>
            </div>
          </div>
        </div>
        <div className="hero__inner__footer">
          <div className="hero__ineer__footer__text">
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero