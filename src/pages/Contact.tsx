import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      topic: '',
      message: ''
    });
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Contact & Support</h1>
        
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have questions about our platform, subscription plans, or content? 
              We're here to help! Fill out the form and our team will get back to you shortly.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <p>yassinsinif4@gmail.com</p>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <h3>Phone</h3>
                <p>+212 623842535</p>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">🌐</div>
                <h3>Portfolio & Social Media</h3>
                <div className="social-links">
                  <a href="https://yassine-sinif.github.io/syassine" target="_blank" rel="noopener noreferrer"> My Portfolio</a>
             
                </div>
              </div>
            </div>
            
            <div className="office-hours">
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM (GMT)</p>
              <p>Saturday: 10:00 AM - 2:00 PM (GMT)</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                <button 
                  className="btn"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="topic">Topic</label>
                  <select 
                    id="topic" 
                    name="topic" 
                    value={formData.topic}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="General Question">General Question</option>
                    <option value="Subscription">Subscription</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Content Request">Content Request</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
        
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I reset my password?</h3>
              <p>
                You can reset your password by clicking on the "Forgot Password" link on the login page. 
                We'll send you an email with instructions to create a new password.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Can I download lessons for offline use?</h3>
              <p>
                Yes, Premium and Annual subscribers can download audio files and PDFs for offline learning.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>How often is new content added?</h3>
              <p>
                We add 4-6 new stories each month, rotating between Beginner, Intermediate, and Advanced levels.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Can I request specific topics for future stories?</h3>
              <p>
                Absolutely! We welcome content suggestions from our community. Please use the contact form 
                with the topic "Content Request" to share your ideas.
              </p>
            </div>
          </div>
          
          <div className="faq-more">
            <a href="/faq" className="btn btn-outline">View All FAQs</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
