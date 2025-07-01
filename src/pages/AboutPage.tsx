import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="hero-about">
        <h1>About Jaco Beach Condos</h1>
      </section>
      <section className="about-section">
        <h2>Our Story</h2>
        <p>write some story or something, i dont know. lalalalalalaaalalalalalalalalalalalallalalalala</p>
        <p>Whether you're here for family time, a romantic getaway, or a remote workspace by the water, our condos deliver comfort and style. we pride ourselves in blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
      </section>
      <section className="contact-section">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li><span className="contact-label">Phone:</span> <a className="contact-link" href="tel:+50688889999">+506 8888 9999</a></li>
          <li><span className="contact-label">Email:</span> <a className="contact-link" href="mailto:info@jacobeachcondos.com">PLACEHOLDER@gmail.com</a></li>
          <li><span className="contact-label">Address:</span> should this even be here</li>
        </ul>
      </section>
      <footer>&copy; 2025 Jaco Beach Condos. All rights reserved.</footer>
    </>
  );
};

export default AboutPage; 