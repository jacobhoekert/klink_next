import React from 'react';
import Link from 'next/link';
import '../styles/nav_bar.scss';
import mixpanel from 'mixpanel-browser';

const NavBar = () => {

  const sendEvent = (event, props) => {
    mixpanel.track(event, props);
  }

  return (
    <>
      <div id="nav">
        <Link href="/"><div><img id="logo" src="/klink.jpg" alt="Klink Fundraising Logo" onClick={() => {sendEvent("Navigate", {"To": "Home", "Position": "Top"})}}/></div></Link>
        <div id="nav-items">
          <Link href="/winks"><div><p onClick={() => {sendEvent("Navigate", {"To": "Winks", "Position": "Top"})}}>Winks</p></div></Link>
          <Link href="/our-team"><div><p onClick={() => {sendEvent("Navigate", {"To": "Team", "Position": "Top"})}}>Our Team</p></div></Link>
          <Link href="/contact"><div><p onClick={() => {sendEvent("Navigate", {"To": "Contact", "Position": "Top"})}}>Contact</p></div></Link>
        </div>
      </div>
    </>
  )
}

export default NavBar