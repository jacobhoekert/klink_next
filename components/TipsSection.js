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
        <div id="wink2" className="wink-item">
          <img src="/winks/wink2-image.jpeg" alt=""/>
          <h3>How Do You Approach Donors While Fundraising?</h3>
          <p className="wink-date">March 6th, 2020</p>
          <p className="wink-summary">First impressions are important. Knowing what donors want to hear will help tremendously when seeking out financial assistance. Here are 3 things you can do to bolster your approach...</p>
          <a href="https://medium.com/klink-winks/how-do-you-approach-donors-while-fundraising-623d6cd3125b">
            <button>Read Full Wink</button>
          </a>
        </div>
        <div id="wink3" className="wink-item">
          <img src="/winks/wink3-image.jpeg" alt=""/>
          <h3>As of Today I am Fully Funded: Why Sharing Your Story Matters</h3>
          <p className="wink-date">March 9th, 2020</p>
          <p className="wink-summary">Make it a habit to share your story out of a place of truly believing that your story can and will impact someone watching or reading it...</p>
          <a href="https://medium.com/klink-winks/as-of-today-i-am-fully-funded-why-sharing-your-story-matters-472c7ac82435">
            <button>Read Full Wink</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TipsSection