import React from 'react';
import '../styles/tips_section.scss';

const TipsSection = () => {
  return (
    <section id="tips-section">
      <h2>Realistic and Effective Tips</h2>
      <p id="description">Fundraising is hard, we get it! Read about the things other people have tried and see what <i>really</i> works. Our content is not another one of those "*Insert Large Number* <e>Amazing and Unique Ways</e> to Fundraise" blog posts.</p>
      <div id="winks">
        <div className="wink-item">
          <img src="/winks/wink1-image.jpeg" alt="empty notebook planner with pencil"/>
          <h3>Why do you Fundraise?</h3>
          <p className="wink-date">Febuary 24th, 2020</p>
          <p className="wink-summary">Knowing your “why” could very well be the most important aspect of fundraising. Your “why” truly is what connects you to your donors...</p>
          <a href="https://medium.com/klink-winks/why-61c60c171c6">
            <button>Read Full Wink</button>
          </a>
        </div>
        <div className="wink-item">
          <img src="/winky-face.jpg" alt="winking smiley face"/>
          <h3>Come Back For Content Coming Soon!</h3>
          <p className="wink-date">March 2020</p>
        </div>
      </div>
    </section>
  )
}

export default TipsSection