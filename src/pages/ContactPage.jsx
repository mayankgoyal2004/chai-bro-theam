import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
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
    <div className="page-contact" style={{ paddingTop: '100px' }}>
      {/* Hero */}
      <section className="section-padding text-center" style={{ background: 'linear-gradient(180deg, #FAF6F0 0%, #F3ECE1 100%)', paddingBottom: '30px' }}>
        <div className="container">
          <span className="badge-pill badge-terracotta mb-2">REACH OUT TO US</span>
          <h1 className="section-title text-4xl md:text-5xl font-extrabold text-heading">
            We’d Love To Hear <span className="text-terracotta font-serif italic">From You</span>
          </h1>
          <p className="section-subtitle mt-3 text-base md:text-lg">
            Have a question about our menu, feedback on your recent visit, or want Chai Bro catering for your event? Drop us a line.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {/* Info Cards Side */}
            <div>
              <span className="badge-pill badge-gurh mb-2">OFFICIAL FLAGSHIP & ENQUIRIES</span>
              <h2 className="text-3xl font-bold text-heading mb-6">
                Chai Bro’s Mohali
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--terracotta-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} className="text-terracotta" />
                  </div>
                  <div>
                    <strong className="block text-sm text-heading font-bold mb-1">Store Address</strong>
                    <p className="text-xs text-body leading-relaxed">
                      Booth No. 80, Sector 89, SAS Nagar, Mohali, Punjab 160062
                    </p>
                    <span className="text-xs text-terracotta font-semibold">Special Desi Ghee Churi & Outdoor Seating</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--cardamom-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} className="text-cardamom" />
                  </div>
                  <div>
                    <strong className="block text-sm text-heading font-bold mb-1">Phone & WhatsApp</strong>
                    <a href="tel:+918700087687" className="text-xs text-body hover:text-terracotta font-medium block">
                      +91 87000 87687 (Call & WhatsApp)
                    </a>
                    <a 
                      href="https://wa.me/918700087687?text=Hello%20Chai%20Bro%27s!%20I%20have%20an%20enquiry." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-cardamom font-bold hover:underline block mt-0.5"
                    >
                      Chat on WhatsApp Now →
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--gurh-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} className="text-gurh" />
                  </div>
                  <div>
                    <strong className="block text-sm text-heading font-bold mb-1">Email Support</strong>
                    <a href="mailto:info@chaibros.online" className="text-xs text-body hover:text-terracotta font-medium block">
                      info@chaibros.online
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} className="text-terracotta" />
                  </div>
                  <div>
                    <strong className="block text-sm text-heading font-bold mb-1">Operating Hours</strong>
                    <span className="text-xs text-body block">Monday – Sunday: 7:30 AM – 1:30 AM</span>
                    <span className="text-xs text-cardamom font-bold">Open Everyday for Chai & Bites</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div style={{ background: 'var(--bg-card-alt)', padding: '36px', borderRadius: '24px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--cardamom-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={36} className="text-cardamom" />
                  </div>
                  <h3 className="text-xl font-bold text-heading">Message Sent, Bro!</h3>
                  <p className="text-xs text-muted mt-2 max-w-xs mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our team will get back to you shortly at {formData.phone}.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6 text-xs">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 className="text-xl font-bold text-heading mb-1">Send Us a Message</h3>
                  <p className="text-xs text-muted mb-2">We typically reply within a few hours.</p>

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

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
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
                      <option value="General Enquiry">General Feedback / Enquiry</option>
                      <option value="Corporate Catering">Event & Wedding Chai Catering</option>
                      <option value="Franchise">Franchise Discussion</option>
                      <option value="Careers">Careers & Barista Jobs</option>
                    </select>
                  </div>

                  <div className="clean-form-field">
                    <label>Your Message</label>
                    <textarea
                      rows="4"
                      placeholder="Tell us what you're thinking..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', borderRadius: '10px', padding: '10px 14px', outline: 'none', fontSize: '0.88rem' }}
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
