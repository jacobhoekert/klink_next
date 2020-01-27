import React from 'react';
import '../styles/tips_section.scss';

const TipsSection = () => {
  return (
    <section id="tips-section">
      <h1>Realistic Tips</h1>
      <p id="description">Fundraising is hard, we get it! Read about the things other people have tried and see what <i>really</i> works</p>
      <div id="sample">
        <div id="item1" className="sample-item">
          <img src="/winky-face.jpg" alt="winking smiley face"/>
          <h3>Welcome to Klink Winks</h3>
          <p>January 15, 2020</p>
        </div>
      </div>
    </section>
  )
}

export default TipsSection