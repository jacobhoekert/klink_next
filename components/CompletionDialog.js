import React from 'react';

const CompletionDialog = ({progress, setProgress}) => {
  return(
    progress == 2 ?
    <div id="challenge-container">
      <div id="info-card">
        <div id="header">
          <h3>Congratulations!</h3>
          <i className="material-icons" onClick={() => {setProgress(0);}}>close</i>
        </div>
        <div id="content">
          <div>
            <p>You Won</p>
            <p id="dollar-amount">$1.00</p>
            <p>in Klink credit</p>
          </div>
          <p>Thanks for completing the challenge! Create an 'Early Access' Klink account and you will get a $1 donation towards your campaign as soon as our app is released!</p>
        </div>
        <div id="buttons">
          <button onClick={() => {setProgress(0);}}>Cancel</button>
          <button onClick={() => {setProgress(3);}}>Create an Account</button>
        </div>
      </div>
    </div> : <></>
  )
}

export default CompletionDialog