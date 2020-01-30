import React from 'react';
import '../styles/how_we_met_section.scss';

const HowWeMetSection = () => {
  return (
    <section id="how-we-met-section">
      <div id="left">
        <img 
          src="/boyband.jpeg" 
          alt="Klink's founding team Troyer, Nathan, Jacob, and Kelson"
          width="100%"
          height="auto"
        />
      </div>
      <div id="right">
        <h2>How We Met</h2>
        <p>The four of us (Kelson Mudd, Nathan Bird, Troyer Morse, and Jacob Hoekert) met on a Christian Gap Year program called GlobalU. Within the first month of the program, we united under a common goal to minimize the burden of fundraising and shortly after, Klink Fundraising was born.</p>
      </div>
    </section>
  )
}

export default HowWeMetSection