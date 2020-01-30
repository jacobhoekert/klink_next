import React from 'react';
import '../styles/mission_section.scss';
import coin from '../public/coin.png';
import {CoinContext} from '../contexts/CoinContext';

const MissionSection = () => {
  return (
    <section id="mission-section">
      <div id="left">
        <h2>Our Mission</h2>
        <p>Here at Klink Fundraising we seek to activate the world changers and difference makers in all generations by equipping them with better tools and training for raising financial support.</p>
      </div>
      <div id="right">
        <CoinContext.Consumer>
          {({active, found, addOne}) => (
            <div id="coin-container" className={found.includes('third') || !active ? "found" : ""}>
              <img id="coin-image" src={coin} alt="clickable coin" onClick={() => {addOne('third')}}/>
            </div>
          )}
        </CoinContext.Consumer>
        <img 
          src="/backpack.jpg"
          alt="adventure backpack with journal and currency next to it"
          width="100%"
          height="auto"
        />
      </div>
    </section>
  )
}

export default MissionSection