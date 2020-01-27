import React from 'react';
import '../styles/how_section.scss';

const HowStep = (props) => {
  return (
    <div className="how-step">
      <div className="step-image">
        <p>{props.number}</p>
      </div>
      <div className="step-text">
        <h2>{props.title}</h2>
        <p className="step-desc">{props.desc}</p>
      </div>
    </div>
  )
}

const HowSection = () => {
  return (
    <section id="how-section">
      <h1>It's as simple as 1 2 3</h1>
      <h2>How it Works</h2> 
      <HowStep 
        number="1"
        title="Download the App"
        desc="Setting up an account takes less than a minute. Coming soon to the Apple App Store and Google Play Store."
      />
      <HowStep 
        number="2"
        title="Create a Campaign"
        desc="Input some quick details about your project or mission with a few easy clicks."
      />
      <HowStep 
        number="3"
        title="Share with Donors and Get Funded"
        desc="Present your campaign to your donors and watch as their credit/debit card transaction roundups are deposited directly to your account."
      />
    </section>
  )
}

export default HowSection
