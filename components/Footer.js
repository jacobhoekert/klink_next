import React from 'react';
import Link from 'next/link';
import '../styles/footer.scss';

const Footer = () => {
   return (
    <div id="footer">
      <div id="options">
        <div className="option">
          <Link href="/winks"><h1>Winks</h1></Link>
          <i className="material-icons">arrow_forward</i>
        </div>
        <div className="option">
          <Link href="/our-team"><h1>Our Team</h1></Link>
          <i className="material-icons">arrow_forward</i>
        </div>
        <div className="option">
          <Link href="/contact"><h1>Contact</h1></Link>
          <i className="material-icons">arrow_forward</i>
        </div>
      </div>
      <p id="footer-copyright"><span>©</span> Klink Fundraising 2020</p>
    </div>
   )
}

export default Footer
