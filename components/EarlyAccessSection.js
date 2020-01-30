import React from 'react';
import EmailForm from './EmailForm';
import '../styles/early_access_section.scss';
import mixpanel from 'mixpanel-browser';

const EarlyAccessSection = () => {
  return (
    <section id="early-access-section">
      <h2>Get Early Access</h2>
      <p>Klink is currently in the final stages of development.<br/>Jump on the waitlist to be one of the first to use the app.</p>
      <EmailForm
        databaseCollection="waitlist" 
        successMessage="Thanks for joining our waitlist!"
        onSuccess={(email) => {mixpanel.track("Waitlist Join", {"Position": "Bottom"}); mixpanel.people.set({"$email" : email})}}
      />
    </section>
  )
}

export default EarlyAccessSection