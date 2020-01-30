import React from 'react';
import Link from 'next/link';
import '../styles/footer.scss';
import mixpanel from 'mixpanel-browser';

const Footer = () => {

  const sendEvent = (event, props) => {
    mixpanel.track(event, props);
  }

  return (
    <div id="footer">
      <div id="options">
        <div className="option">
          <Link href="/winks"><div><h1 onClick={() => {sendEvent("Navigate", {"To": "Winks", "Position": "Bottom"})}}>Winks</h1></div></Link>
          <i className="material-icons">arrow_forward</i>
        </div>
        <div className="option">
          <Link href="/our-team"><div><h1 onClick={() => {sendEvent("Navigate", {"To": "Team", "Position": "Bottom"})}}>Our Team</h1></div></Link>
          <i className="material-icons">arrow_forward</i>
        </div>
        <div className="option">
          <Link href="/contact"><div><h1 onClick={() => {sendEvent("Navigate", {"To": "Contact", "Position": "Bottom"})}}>Contact</h1></div></Link>
          <i className="material-icons">arrow_forward</i>
        </div>
      </div>
      <p id="footer-copyright"><span>©</span> Klink Fundraising 2020</p>
    </div>
   )
}

export default Footer
