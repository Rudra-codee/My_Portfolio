import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Welcome to Habitat</h1>
          <p className="hero__description">
            Track your health, stay fit, and get instant support all in one app.
            From AI health insights to local doctor access, SOS tools, and fitness routines,
            everything you need for a healthier life starts here.
          </p>
          <button className="hero__button">Get Started</button>
        </div>
        <div className="hero__image">
          <img src="src/assets/baymaxx.png" alt="Health companion illustration" />
        </div>
      </div>
    </section>
  )
}

export default Hero
