import React from 'react';
import '../styles/personal_blogs_section.scss';
import mixpanel from 'mixpanel-browser';

const PersonalBlogsSection = () => {
  return (
    <section id="personal-blogs-section">
      <h1>Personal Blogs</h1>
      <p id="description">To read more about our personal stories, check out our personal blogs!</p>
      <div id="people">
        <a onClick={() => {mixpanel.track("Kelson's Blog");}} href="https://kelsonmudd.theglobalu.org" target="_blank" rel="noopener" id="kelson" className="member">
          <div className="hover-gradient"></div>
          <p className="name">Kelson Mudd</p>
        </a>
        <a onClick={() => {mixpanel.track("Nathan's Blog");}} href="https://nathanbird.theglobalu.org" id="nathan" className="member" target="_blank" rel="noopener">
          <div className="hover-gradient"></div>
          <p className="name">Nathan Bird</p>
        </a>
        <a onClick={() => {mixpanel.track("Troyer's Blog");}} href="https://troyermorse.theglobalu.org" id="troyer" className="member" target="_blank" rel="noopener">
          <div className="hover-gradient"></div>
          <p className="name">Troyer Morse</p>
        </a>
        <a onClick={() => {mixpanel.track("Jacobs's Blog");}} href="https://jacobhoekert.theglobalu.org" id="jacob" className="member" target="_blank" rel="noopener">
          <div className="hover-gradient"></div>
          <p className="name">Jacob Hoekert</p>
        </a>
      </div>
    </section>
  )
}

export default PersonalBlogsSection