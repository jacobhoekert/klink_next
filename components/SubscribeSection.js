import React from 'react';
import EmailForm from './EmailForm';
import '../styles/subscribe_section.scss';
import coin from '../public/coin.png';
import {CoinContext} from '../contexts/CoinContext';

const SubscribeSection = () => {
  return (
    <section id="subscribe-section">
      <CoinContext.Consumer>
        {({active, found, addOne}) => (
          <div id="coin-container" className={found.includes('second') || !active ? "found" : ""}>
            <img id="coin-image" src={coin} onClick={() => {addOne('second')}}/>
          </div>
        )}
      </CoinContext.Consumer>
      <h1>Subscribe to Klink Winks</h1>
      <EmailForm
        databaseCollection="winks" 
        successMessage="Thanks for signing up for Klink Winks!"
      />
    </section>
  )
}

export default SubscribeSection