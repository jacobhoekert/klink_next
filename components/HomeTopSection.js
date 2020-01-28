import React from 'react';
import EmailForm from './EmailForm';
import '../styles/home_top_section.scss';
import coin from '../public/coin.png';
import {CoinContext} from '../contexts/CoinContext';
import {DialogContext} from '../contexts/DialogContext';

const HomeTopSection = () => {
  return (
    <section id="landing-section" aria-label="Mobile phones displaying the Klink Fundraising app">
      
      <CoinContext.Consumer>
        {({active, found, addOne, enabled}) => (
          <DialogContext.Consumer>
            {({progress, setProgress}) => (
              <div id="coin-container" class={found.includes('first') || !enabled ? "found" : ""}>
                <img id="coin-image" src={coin} onClick={() => {setProgress(1);}}/>
              </div>
            )}
          </DialogContext.Consumer>
        )}
      </CoinContext.Consumer>
      
      <div id="landing-copy">
        <div id="landing-container">
          <h1>Fundraising<br/>made simple</h1>
          <p id="landing-words">Klink is an easy-to-use mobile app that makes support-raising a breeze by rounding up donors' credit card transactions</p>
          <p id="landing-get-early-text">Get Early Access – App Coming Soon</p>
          <EmailForm
            databaseCollection="waitlist" 
            successMessage="Thanks for joining our waitlist!"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeTopSection