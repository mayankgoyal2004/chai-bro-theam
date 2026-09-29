import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Feedback / Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  return (
    <div className="page-contact-root">
      {/* Hero Section */}
      <section className="contact-hero-strip">
        <div className="container text-center">
          <span className="badge-pill badge-terracotta mb-2">REACH OUT TO US</span>
          <h1 className="section-title">
            We’d Love To Hear <span className="text-terracotta font-serif italic">From You</span>
          </h1>
          <p className="section-subtitle">
            Have a question about our menu, feedback on your recent visit, or want Chai Bro catering for your event? Drop us a line.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="contact-main-grid-layout">
            
            {/* Left Column: Info Cards */}
            <div className="contact-info-col">
              <span className="badge-pill badge-gurh mb-2">OFFICIAL FLAGSHIP & ENQUIRIES</span>
              <h2 className="contact-heading-text">Chai Bro’s Mohali</h2>

              <div className="contact-details-stack">
                
                {/* Address */}
                <div className="contact-info-item">
                  <div className="contact-info-icon-box bg-terracotta-box">
                    <MapPin size={22} className="text-terracotta" />
                  </div>
                  <div className="contact-info-text-content">
                    <strong className="contact-info-title">Store Address</strong>
                    <p className="contact-info-desc">Booth No. 80, Sector 89, SAS Nagar, Mohali, Punjab 160062</p>
                    <span className="contact-info-badge">Special Desi Ghee Churi & Outdoor Seating</span>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="contact-info-item">
                  <div className="contact-info-icon-box bg-cardamom-box">
                    <Phone size={22} className="text-cardamom" />
                  </div>
                  <div className="contact-info-text-content">
                    <strong className="contact-info-title">Phone & WhatsApp</strong>
                    <a href="tel:+918700087687" className="contact-info-link">
                      +91 87000 87687 (Call & WhatsApp)
                    </a>
                    <a 
                      href="https://wa.me/918700087687?text=Hello%20Chai%20Bro%27s!%20I%20have%20an%20enquiry." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-whatsapp-link"
                    >
                      Chat on WhatsApp Now →
                    </a>
                  </div>
                </div>

                {/* Email Support */}
                <div className="contact-info-item">
                  <div className="contact-info-icon-box bg-gurh-box">
                    <Mail size={22} className="text-gurh" />
                  </div>
                  <div className="contact-info-text-content">
                    <strong className="contact-info-title">Email Support</strong>
                    <a href="mailto:info@chaibros.online" className="contact-info-link">
                      info@chaibros.online
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="contact-info-item">
                  <div className="contact-info-icon-box bg-secondary-box">
                    <Clock size={22} className="text-terracotta" />
                  </div>
                  <div className="contact-info-text-content">
                    <strong className="contact-info-title">Operating Hours</strong>
                    <span className="contact-info-time">Monday – Sunday: 7:30 AM – 1:30 AM</span>
                    <span className="contact-info-open-tag">Open Everyday for Chai & Bites</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Send Us a Message Card */}
            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-form-success">
                  <div className="success-check-bubble">
                    <CheckCircle2 size={36} className="text-cardamom" />
                  </div>
                  <h3 className="text-xl font-bold text-heading">Message Sent, Bro!</h3>
                  <p className="text-xs text-muted mt-2 max-w-xs mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our team will get back to you shortly at {formData.phone}.
                  </p>
                  <button 
                    type="button" 
                    onClick={() => setSubmitted(false)} 
                    className="btn-secondary mt-6 text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-original-form">
                  <h3 className="text-xl font-bold text-heading mb-1">Send Us a Message</h3>
                  <p className="text-xs text-muted mb-3">We typically reply within a few hours.</p>

                  <div className="clean-form-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaspreet Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="contact-form-inputs-row">
                    <div className="clean-form-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="clean-form-field">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="clean-form-field">
                    <label>Inquiry Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="General Feedback / Enquiry">General Feedback / Enquiry</option>
                      <option value="Corporate Catering">Event & Wedding Chai Catering</option>
                      <option value="Franchise Discussion">Franchise Discussion</option>
                      <option value="Careers & Barista Jobs">Careers & Barista Jobs</option>
                    </select>
                  </div>

                  <div className="clean-form-field">
                    <label>Your Message</label>
                    <textarea
                      rows="4"
                      placeholder="Tell us what you're thinking..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center mt-2">
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
