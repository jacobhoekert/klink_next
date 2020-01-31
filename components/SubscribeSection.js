import React from 'react';
import EmailForm from './EmailForm';
import '../styles/subscribe_section.scss';
import coin from '../public/coin.png';
import {CoinContext} from '../contexts/CoinContext';
import mixpanel from 'mixpanel-browser';

const SubscribeSection = () => {
  return (
    <section id="subscribe-section">
      <CoinContext.Consumer>
        {({active, found, addOne}) => (
          <div id="coin-container" className={found.includes('second') || !active ? "found" : ""}>
            <img id="coin-image" src={coin} alt="clickable coin" onClick={() => {addOne('second')}}/>
          </div>
        )}
      </CoinContext.Consumer>
      <h1>Subscribe to Klink Winks</h1>
      <EmailForm
        databaseCollection="winks" 
        successMessage="Thanks for signing up for Klink Winks!"
        onSuccess={(email) => {mixpanel.track("Winks Join", {"Position": "Bottom"}); mixpanel.people.set({"$email" : email})}}
      />
    </section>
  )
}

export default SubscribeSection