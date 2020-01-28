import React from 'react';

const ThankYouDialog = ({progress, setProgress}) => {
  return(
    progress == 4 ?
    <div id="complete-container">
      <div id="info-card">
        <div id="header">
          <h3>Account Created!</h3>
          <i className="material-icons" onClick={() => {setProgress(0);}}>close</i>
        </div>
        <div id="content">
          <p>Thanks for creating an account! We'll send you an email as soon as the app is ready</p>
        </div>
        <div id="buttons">
          <button onClick={() => {setProgress(0);}}>Close</button>
        </div>
      </div>
    </div> : <></>
  )
}

export default ThankYouDialog