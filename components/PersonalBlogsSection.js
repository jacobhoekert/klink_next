import React from 'react';
import '../styles/personal_blogs_section.scss';

const PersonalBlogsSection = () => {
  return (
    <section id="personal-blogs-section">
      <h1>Personal Blogs</h1>
      <p id="description">To read more about our personal stories, check out our personal blogs!</p>
      <div id="people">
        <a href="https://kelsonmudd.theglobalu.org" id="kelson" className="member" target="_blank">
          <div className="hover-gradient"></div>
          <p className="name">Kelson Mudd</p>
        </a>
        <a href="https://nathanbird.theglobalu.org" id="nathan" className="member" target="_blank">
          <div className="hover-gradient"></div>
          <p className="name">Nathan Bird</p>
        </a>
        <a href="https://troyermorse.theglobalu.org" id="troyer" className="member" target="_blank">
          <div className="hover-gradient"></div>
          <p className="name">Troyer Morse</p>
        </a>
        <a href="https://jacobhoekert.theglobalu.org" id="jacob" className="member" target="_blank">
          <div className="hover-gradient"></div>
          <p className="name">Jacob Hoekert</p>
        </a>
      </div>
    </section>
  )
}

export default PersonalBlogsSection