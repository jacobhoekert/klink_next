import React from 'react';
import EmailForm from './EmailForm';
import '../styles/winks_top_section.scss';
import mixpanel from 'mixpanel-browser';

const WinksTopSection = () => {
  return (
    <section id="winks-top-section" aria-label="Envelope mail graphic">
      <div id="winks-copy">
        <div id="winks-container">
          <h1>Expert advice<br/>at your fingertips</h1>
          <p id="winks-words">Get fundraising tips and ideas from experienced support raisers delivered directly to your inbox.</p>
          <p id="winks-get-early-text">Subscribe to Klink Winks</p>
          <EmailForm
            databaseCollection="winks" 
            successMessage="Thanks for signing up for Klink Winks!"
            onSuccess={(email) => {mixpanel.track("Winks Join", {"Position": "Top"}); mixpanel.people.set({"$email" : email})}}
          />
        </div>
      </div>
    </section>
  )
}

export default WinksTopSection