import React from 'react';
import EmailForm from './EmailForm';
import '../styles/early_access_section.scss';

const EarlyAccessSection = () => {
  return (
    <section id="early-access-section">
      <h1>Get Early Access</h1>
      <p>Klink is currently in the final stages of development.<br/>Jump on the waitlist to be one of the first to use the app.</p>
      <EmailForm
        databaseCollection="waitlist" 
        successMessage="Thanks for joining our waitlist!"
      />
    </section>
  )
}

export default EarlyAccessSection