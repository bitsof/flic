import React from 'react';
import "../styles/Home.css"

const Home = () => {
  return (
    <div>
      <div className="topbanner">
        FLIC
      </div>
      <div className="topnav">
        <a href="/">Home</a>
        <a href="/top">Top Movies</a>
        <a href="/movies">Movie Reviews</a>
        <a href="/contacts">Contact</a>
      </div>
      <div className="content">
        <div className="post">
          <div className="subject">Hello! Welcome to FLIC!</div>
          <div className="date">2/4/2022</div>
          This project began as a quick portfolio builder! <br />
          One of our founders LOVES movies, and it wanted to share his reviews with folks! <br />
          I hope you enjoy the stuff you find here!
        </div>
      </div>
      <div className="footer">
        <a href="/about">About</a>
        <a href="/contacts">Contact</a>
        <a href="https://github.com/BitsOf/flic">GitHub</a>
        <a href="/privacy">Privacy Policy</a> 
        © 2022. A BitsOf project. CC BY-SA 4.0. Made with ☕ in California.
      </div>
    </div>
  );
}

const FakeText = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  )

export default Home;