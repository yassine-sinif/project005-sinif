import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>LinguaLink</h3>
            <p>Learn Moroccan Darija through engaging stories, audio narrations, and interactive exercises.</p>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/stories">Stories Library</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Connect</h3>
            <ul className="footer-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LinguaLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
