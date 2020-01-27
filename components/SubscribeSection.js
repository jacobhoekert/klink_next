import React from 'react';
import EmailForm from './EmailForm';
import '../styles/subscribe_section.scss';

const SubscribeSection = () => {
  return (
    <section id="subscribe-section">
      <h1>Subscribe to Klink Winks</h1>
      <EmailForm
        databaseCollection="winks" 
        successMessage="Thanks for signing up for Klink Winks!"
      />
    </section>
  )
}

export default SubscribeSection