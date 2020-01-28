import React from 'react';
import '../styles/how_section.scss';

const HowStep = (props) => {
  return (
    <div className="how-step">
      <div className="step-image">
        <p>{props.number}</p>
      </div>
      <div className="step-text">
        <h3>{props.title}</h3>
        <p className="step-desc">{props.desc}</p>
      </div>
    </div>
  )
}

const HowSection = () => {
  return (
    <section id="how-section">
      <h1>The Best App To Help You Fundraise</h1>
      <h2>How You Get Funded With Klink</h2> 
      <HowStep 
        number="1"
        title="Download the App"
        desc="Setting up an account is easy and takes less than a minute. Coming soon to the Apple App Store and Google Play Store."
      />
      <HowStep 
        number="2"
        title="Create a Campaign"
        desc="Input some quick details about your project or mission with a few easy clicks."
      />
      <HowStep 
        number="3"
        title="Share with Donors"
        desc="Donors can download the app and search for your campaign. Watch as their credit/debit card transaction roundups are deposited directly to your account."
      />
    </section>
  )
}

export default HowSection
