import React from 'react';

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">About LinguaLink</h1>
        
        <div className="about-content">
          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              At LinguaLink, we believe that language learning should be immersive, 
              contextual, and culturally rich. Our mission is to help non-native Arabic 
              speakers and Moroccans alike deepen their understanding of Moroccan Darija 
              through engaging stories that reflect real-life situations and cultural nuances.
            </p>
            <p>
              Rather than relying on dry vocabulary lists or isolated grammar rules, 
              we've created a platform that immerses learners in "micro-tales" that 
              illustrate common scenarios—from buying bread at the market to chatting 
              at a wedding. Through these narratives, learners build both practical 
              Darija comprehension and cultural fluency.
            </p>
          </div>
          
          <div className="about-approach">
            <h2>Our Approach</h2>
            <div className="approach-features">
              <div className="approach-feature">
                <div className="approach-icon">📖</div>
                <h3>Story-driven Immersion</h3>
                <p>
                  Short narratives make retention easier than isolated drills, 
                  providing context for vocabulary and expressions.
                </p>
              </div>
              <div className="approach-feature">
                <div className="approach-icon">🔄</div>
                <h3>Three-language Alignment</h3>
                <p>
                  Simultaneous Darija, Modern Standard Arabic, and English text 
                  helps learners spot patterns across language registers.
                </p>
              </div>
              <div className="approach-feature">
                <div className="approach-icon">🎧</div>
                <h3>Audio + Exercises</h3>
                <p>
                  Listening practice with native speakers is paired immediately 
                  with comprehension checks and interactive quizzes.
                </p>
              </div>
              <div className="approach-feature">
                <div className="approach-icon">🏺</div>
                <h3>Cultural Context</h3>
                <p>
                  Each lesson embeds cultural notes, so learners don't just 
                  read words—they understand the cultural context behind them.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-team">
            <h2>Our Team</h2>
            <div className="team-members">
              <div className="team-member">
                <div className="team-member-image"></div>
                <h3>Fatima Zahra</h3>
                <p className="team-member-role">Founder & Content Director</p>
                <p className="team-member-bio">
                  Born and raised in Rabat, Fatima has a passion for sharing 
                  Moroccan language and culture with the world. With a background 
                  in linguistics and education, she oversees all content creation.
                </p>
                <p className="team-member-greeting">
                  <em>"مرحبا بيكم فموقعنا!" (Welcome to our website!)</em>
                </p>
              </div>
              
              <div className="team-member">
                <div className="team-member-image"></div>
                <h3>Ahmed Benali</h3>
                <p className="team-member-role">Audio Production & Narration</p>
                <p className="team-member-bio">
                  A voice actor from Casablanca, Ahmed brings our stories to life 
                  with authentic pronunciation and expressive narration. He also 
                  trains our team of voice contributors.
                </p>
                <p className="team-member-greeting">
                  <em>"نتمناو تستافدو من الدروس ديالنا!" (We hope you benefit from our lessons!)</em>
                </p>
              </div>
              
              <div className="team-member">
                <div className="team-member-image"></div>
                <h3>Sarah Johnson</h3>
                <p className="team-member-role">Educational Consultant</p>
                <p className="team-member-bio">
                  With over 10 years of experience teaching Arabic to English speakers, 
                  Sarah ensures our methodology is effective and our learning progression 
                  is well-structured.
                </p>
                <p className="team-member-greeting">
                  <em>"Learning Darija changed my life in Morocco, and it can change yours too!"</em>
                </p>
              </div>
            </div>
          </div>
          
          <div className="testimonials">
            <h2>What People Are Saying</h2>
            <div className="testimonial-grid">
              <div className="testimonial">
                <p>
                  "I tried several Arabic learning apps before finding LinguaLink. 
                  The story-based approach makes such a difference! I can actually 
                  understand conversations at the market now."
                </p>
                <div className="testimonial-author">
                  <strong>Michael P.</strong>, Exchange Student in Fez
                </div>
              </div>
              
              <div className="testimonial">
                <p>
                  "As a Moroccan-American who never properly learned Darija, 
                  these lessons have helped me reconnect with my heritage and 
                  communicate better with my extended family."
                </p>
                <div className="testimonial-author">
                  <strong>Leila R.</strong>, Heritage Learner
                </div>
              </div>
              
              <div className="testimonial">
                <p>
                  "The cultural notes are my favorite part. They explain so many 
                  things I was confused about during my first trip to Morocco!"
                </p>
                <div className="testimonial-author">
                  <strong>Emma T.</strong>, Frequent Traveler
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-cta">
            <h2>Join Our Community of Learners</h2>
            <p>
              Start your journey to Darija fluency today with our carefully crafted stories 
              and supportive learning environment.
            </p>
            <div className="cta-buttons">
              <a href="/stories" className="btn">Browse Stories</a>
              <a href="/pricing" className="btn btn-outline">View Pricing</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
