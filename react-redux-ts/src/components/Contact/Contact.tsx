import React, { useState } from 'react';
import './Contact.css';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  title?: string;
  subtitle?: string;
}

const Contact: React.FC<ContactProps> = ({ 
  title = 'Contact Us', 
  subtitle = 'Get in touch with us. We\'d love to hear from you!' 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">{title}</h1>
          <p className="contact-subtitle">{subtitle}</p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div className="info-section">
              <h3 className="info-title">Get in Touch</h3>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>123 Business Street<br />Tech City, TC 12345</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>hello@company.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell us more..."
                  rows={5}
                  required
                />
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
