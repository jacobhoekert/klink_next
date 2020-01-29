import React from 'react';
import Link from 'next/link';
import '../styles/mobile_menu.scss';

const MobileMenu = ({open, setOpen}) => {
  return (
    <nav id="mobile-menu" style={open ? {transform: 'translateX(0%)', transition: 'all 0.3s ease-in-out'} : {transform: 'translateX(100%)', transition: 'all 0.3s ease-in-out'}}>
      <a><Link href="/" onClick={() => setOpen(!open)}><p>Home</p></Link></a>
      <a><Link href="/winks" onClick={() => setOpen(!open)}><p>Winks</p></Link></a>
      <a><Link href="/our-team" onClick={() => setOpen(!open)}><p>Our Team</p></Link></a>
      <a><Link href="/contact" onClick={() => setOpen(!open)}><p>Contact</p></Link></a>
    </nav>
  )
}
export default MobileMenu;