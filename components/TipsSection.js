import React from 'react';
import '../styles/tips_section.scss';

const TipsSection = () => {
  return (
    <section id="tips-section">
      <h2>Realistic and Effective Tips</h2>
      <p id="description">Fundraising is hard, we get it! Read about the things other people have tried and see what <i>really</i> works. Our content is not another one of those "*Insert Large Number* <e>Amazing and Unique Ways</e> to Fundraise" blog posts.</p>
      <div id="sample">
        <div id="item1" className="sample-item">
          <img src="/winky-face.jpg" alt="winking smiley face"/>
          <h3>Come Back For Content Coming Soon!</h3>
          <p>January 15, 2020</p>
        </div>
      </div>
    </section>
  )
}

export default TipsSection