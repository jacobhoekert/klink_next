import React, {useState} from 'react';
import coin from '../public/coin.png';
import {CoinContext} from '../contexts/CoinContext';
import {DialogContext} from '../contexts/DialogContext';
import '../styles/treasure_hunt_progress.scss';

const TreasureHuntProgress = () => {
  return (
    <CoinContext.Consumer>
    {({active, found, addOne}) => (
      <DialogContext.Consumer>
        {({progress, setProgress}) => (
          <>
            {active && !found.includes('done') ?
            <div id="progress-container" onClick={() => {if(found.length === 3){setProgress(2)}}} class={found.length < 3 ? '' : 'completed'}>
              <div id="progress-card">
                <img id="coin-image" src={coin}/>
                {found.length < 3 ? <div><p>{found.length+" of 3"}</p></div> : <div><p>Completed!</p><i class="material-icons">arrow_forward</i></div> }
              </div>
            </div> : <></>}
          </>
        )}
      </DialogContext.Consumer>
    )}
    </CoinContext.Consumer>
  )
}

export default TreasureHuntProgress