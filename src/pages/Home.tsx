import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

const Home = () => {
  const typedRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "Learn Darija.",
        "Learn Culture.",
        "Learn Through Stories."
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
    });

    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
    });

    sr.reveal('.how-it-works-item', { interval: 200 });
    sr.reveal('.featured-story', { delay: 300 });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span ref={typedRef}></span>
            <span className="cursor">|</span>
          </h1>
          <p>Immerse yourself in Moroccan Darija through captivating short stories.</p>
          <div className="hero-buttons">
            <a href="/stories" className="btn">Browse Stories</a>
            <a href="/pricing" className="btn btn-outline">Start Free Trial</a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section" ref={revealRef}>
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="how-it-works">
            <div className="how-it-works-item">
              <div className="how-it-works-icon">▶️</div>
              <h3>Select a Story</h3>
              <p>Browse our library of engaging stories categorized by difficulty level and topics.</p>
            </div>
            <div className="how-it-works-item">
              <div className="how-it-works-icon">🔊</div>
              <h3>Listen & Read</h3>
              <p>Enjoy audio narrations by native speakers while following along with parallel text.</p>
            </div>
            <div className="how-it-works-item">
              <div className="how-it-works-icon">✅</div>
              <h3>Practice & Quiz</h3>
              <p>Reinforce your learning with interactive exercises and vocabulary practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="section light-bg">
        <div className="container">
          <h2 className="section-title">Featured Story of the Week</h2>
          <div className="featured-story">
            <div className="featured-story-image"></div>
            <div className="featured-story-content">
              <h3>Buying Bread at the Souk</h3>
              <div className="story-meta">
                <span>Beginner Level</span>
                <span>3 min read</span>
              </div>
              <p>
                Follow Ahmed as he navigates the bustling souk to buy fresh bread. 
                Learn essential phrases for shopping and haggling in Moroccan Darija.
              </p>
              <a href="/story/buying-bread" className="btn">Start This Lesson</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Our Learners Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"I learned Darija for my Rabat internship and could greet colleagues in minutes! The cultural notes were especially helpful."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-image"></div>
                <div className="testimonial-author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Exchange Student</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"The story-based approach makes learning Darija so much more engaging than traditional methods. I'm actually having fun!"</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-image"></div>
                <div className="testimonial-author-info">
                  <h4>Michael Chen</h4>
                  <p>Business Traveler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Darija Journey?</h2>
            <p>Join thousands of learners discovering Moroccan language and culture through stories.</p>
            <a href="/pricing" className="btn btn-large">Start Free Trial</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
