import React from 'react';
import '../styles/mission_section.scss';

const MissionSection = () => {
  return (
    <section id="mission-section">
      <div id="left">
        <h2>Our Mission</h2>
        <p>Here at Klink Fundraising, we seek to activate all generations in using their resources to make a difference by removing barriers presented to those who rely on community-raised support. We operate with the purpose of streamlining the flow of resources to magnify the impact felt on both local communities and the global mission field.</p>
      </div>
      <div id="right">
        <img src="/backpack.jpg" alt="adventure backpack with journal and currency next to it"/>
      </div>
    </section>
  )
}

export default MissionSection