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
      </div>
    </section>
  )
}

export default Hero