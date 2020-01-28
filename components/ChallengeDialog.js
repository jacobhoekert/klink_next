import React from 'react';
import {CoinContext} from '../contexts/CoinContext';

const ChallengeDialog = ({progress, setProgress}) => {
  return(
    progress == 1 ?
    <CoinContext.Consumer>
      {({active, found, addOne}) => (
        <div id="treasure-container">
          <div id="info-card">
            <div id="header">
              <h3>The Klink Challenge</h3>
              <i className="material-icons" onClick={() => {setProgress(0)}}>close</i>
            </div>
            <div id="content">
              <div>
                <p>You could win</p>
                <p id="dollar-amount">$1.00</p>
                <p>in Klink credit</p>
              </div>
              <p>Find all three coins hidden in various places around the website and you'll be awarded with $1 when our app launches!</p>
            </div>
            <div id="buttons">
              <button onClick={() => {setProgress(0)}}>No Thanks</button>
              <button onClick={() => {setProgress(0); addOne("first");}}>Challenge Accepted!</button>
            </div>
          </div>
        </div>
      )}
    </CoinContext.Consumer> : <></>
  )
}

export default ChallengeDialog