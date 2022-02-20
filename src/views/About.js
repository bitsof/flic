import React from 'react';
import "../styles/Home.css"

const About = () => {
  return (
  <div>
    <h1>About</h1>
    <AboutText />
  </div>
  )
}

const AboutText = () => (
  <p>
    Flic is a sideproject to help gain some dev experience for both Shane and Jeff.
  </p>
  )

export default About;