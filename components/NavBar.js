import React from 'react';
import Link from 'next/link';
import '../styles/nav_bar.scss';

const NavBar = () => {
  return (
    <>
      <div id="nav">
        <Link href="/"><img id="logo" src="/klink.jpg" alt="Klink Fundraising Logo"/></Link>
        <div id="nav-items">
          <Link href="/winks"><p>Winks</p></Link>
          <Link href="/our-team"><p>Our Team</p></Link>
          <Link href="/contact"><p>Contact</p></Link>
        </div>
      </div>
    </>
  )
}

export default NavBar