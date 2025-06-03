
const Pricing = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Pricing Plans</h1>
        <p className="section-subtitle">Choose the plan that fits your learning needs</p>
        
        <div className="pricing-plans">
          <div className="pricing-plan card">
            <div className="plan-header">
              <h2>Free Trial</h2>
              <p className="plan-price">$0</p>
              <p className="plan-duration">14 days</p>
            </div>
            <div className="plan-features">
              <ul>
                <li>Access to 3 Beginner stories</li>
                <li>Basic vocabulary exercises</li>
                <li>Audio narrations</li>
                <li>Limited quiz access</li>
                <li>No progress tracking</li>
              </ul>
            </div>
            <div className="plan-cta">
              <a href="/signup" className="btn btn-outline">Start Free Trial</a>
            </div>
          </div>
          
          <div className="pricing-plan card featured">
            <div className="plan-badge">Most Popular</div>
            <div className="plan-header">
              <h2>Premium</h2>
              <p className="plan-price">$12.99</p>
              <p className="plan-duration">per month</p>
            </div>
            <div className="plan-features">
              <ul>
                <li>Full access to all stories (Beginner to Advanced)</li>
                <li>Complete vocabulary database</li>
                <li>Audio narrations with slow-speed option</li>
                <li>Unlimited quizzes and exercises</li>
                <li>Progress tracking and achievements</li>
                <li>Downloadable MP3s</li>
                <li>Cultural notes and PDFs</li>
              </ul>
            </div>
            <div className="plan-cta">
              <a href="/signup" className="btn">Choose Premium</a>
            </div>
          </div>
          
          <div className="pricing-plan card">
            <div className="plan-header">
              <h2>Annual</h2>
              <p className="plan-price">$99.99</p>
              <p className="plan-duration">per year</p>
              <p className="plan-savings">Save over 35%</p>
            </div>
            <div className="plan-features">
              <ul>
                <li>All Premium features</li>
                <li>Priority access to new stories</li>
                <li>Exclusive cultural webinars</li>
                <li>One free 30-minute conversation session</li>
              </ul>
            </div>
            <div className="plan-cta">
              <a href="/signup" className="btn">Choose Annual</a>
            </div>
          </div>
        </div>
        
        <div className="pricing-faq">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-item">
            <h3>Can I cancel my subscription anytime?</h3>
            <p>Yes, you can cancel your subscription at any time. If you cancel, you'll still have access until the end of your billing period.</p>
          </div>
          
          <div className="faq-item">
            <h3>How often are new stories added?</h3>
            <p>We add 4-6 new stories each month, rotating between Beginner, Intermediate, and Advanced levels.</p>
          </div>
          
          <div className="faq-item">
            <h3>Can I download content for offline use?</h3>
            <p>Premium and Annual subscribers can download audio files and PDFs for offline learning.</p>
          </div>
          
          <div className="faq-item">
            <h3>Do you offer group or educational discounts?</h3>
            <p>Yes, we offer special rates for educational institutions and groups of 5 or more. Please contact us for details.</p>
          </div>
        </div>
        
        <div className="pricing-guarantee">
          <h2>Our Satisfaction Guarantee</h2>
          <p>If you're not satisfied with your Premium or Annual subscription within the first 30 days, we'll provide a full refund. No questions asked.</p>
        </div>
        
        <div className="pricing-cta">
          <h2>Ready to Start Your Darija Journey?</h2>
          <p>Join thousands of learners discovering Moroccan language and culture through stories.</p>
          <a href="/signup" className="btn btn-large">Start Free Trial</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
