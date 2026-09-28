import React, { useState } from 'react';
import { Store, TrendingUp, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Building2, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FranchiseSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: '20-30 Lakhs',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) return;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  const models = [
    {
      name: 'Express Kiosk',
      area: '150 – 300 Sq.Ft',
      investment: '₹14 – ₹18 Lakhs',
      idealFor: 'Metro Stations, Tech Parks & College Hubs',
      roi: '8 – 11 Months',
      features: ['Quick Kulhad Chai Window', 'Bestseller Snacks & Churi', 'Low Capex, High Volume', 'Full Turnkey Setup']
    },
    {
      name: 'High Street Café',
      area: '400 – 800 Sq.Ft',
      investment: '₹22 – ₹28 Lakhs',
      idealFor: 'City High Streets & Commercial Markets',
      roi: '10 – 14 Months',
      popular: true,
      features: ['25+ Seating Capacity', 'Live Kulhad Brew Counter', 'Complete Snack & Cold Brew Menu', 'Swiggy & Zomato Integrated']
    },
    {
      name: 'Signature Lounge & Deck',
      area: '1,000+ Sq.Ft',
      investment: '₹35 – ₹45 Lakhs',
      idealFor: 'Flagship Destination & Rooftops',
      roi: '12 – 16 Months',
      features: ['Open-air Terracotta Deck', 'Live Acoustic Stage Setup', 'Private Work Pods', 'Highest Revenue Multiplier']
    }
  ];

  return (
    <section id="franchise" className="section-padding franchise-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-gurh mb-2">
            PARTNER WITH CHAI BRO’S
          </span>
          <h1 className="section-title">
            Bring the Chai Bro’s Experience <span className="text-terracotta font-serif italic">To A New Neighbourhood</span>
          </h1>
          <p className="section-subtitle">
            Warm sips, tasty bites and brighter breaks. With our proven franchise model, you own and operate your outlet with end-to-end recipe standardization, store design, and launch support.
          </p>
        </div>

        {/* 3 Formats Cards */}
        <div className="franchise-cards-grid">
          {models.map((m, idx) => (
            <div 
              key={idx} 
              className={`franchise-model-card ${m.popular ? 'popular' : ''}`}
            >
              {m.popular && (
                <div className="popular-badge-pill">
                  <Sparkles size={12} className="inline mr-1" /> MOST POPULAR FORMAT
                </div>
              )}

              <div className="model-head">
                <h3 className="model-title">{m.name}</h3>
                <span className="model-area-tag">{m.area}</span>
              </div>

              <div className="model-cost-box">
                <span className="cost-label">Estimated Investment</span>
                <div className="cost-value">{m.investment}</div>
                <div className="cost-roi">Estimated Payback: <strong>{m.roi}</strong></div>
              </div>

              <div className="model-suitability">
                <strong>Ideal For:</strong>
                <p>{m.idealFor}</p>
              </div>

              <div className="model-feature-list">
                {m.features.map((feat, fidx) => (
                  <div key={fidx} className="feature-row">
                    <CheckCircle2 size={15} className="text-cardamom flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Pillars of Partnership */}
        <div className="partnership-pillars-bar">
          <div className="pillar-cell">
            <TrendingUp size={24} className="text-terracotta mb-2" />
            <h4>65%+ Gross Margins</h4>
            <p>Industry-leading margins driven by standardized F&B recipes and centralized spice procurement.</p>
          </div>
          <div className="pillar-cell">
            <ShieldCheck size={24} className="text-gurh mb-2" />
            <h4>Turnkey Outlet Setup</h4>
            <p>Complete architect layouts, equipment supply, and 14-day on-site barista and team training.</p>
          </div>
          <div className="pillar-cell">
            <Building2 size={24} className="text-cardamom mb-2" />
            <h4>Zero Royalty First 3 Months</h4>
            <p>Focus completely on local marketing, footfalls, and customer experience with our guidance.</p>
          </div>
        </div>

        {/* Enquiry Form Card */}
        <div className="enquiry-card-wrapper">
          <div className="enquiry-details-side">
            <span className="badge-pill badge-terracotta text-xs mb-2">
              <PhoneCall size={13} className="inline mr-1" /> FRANCHISE DESK
            </span>
            <h3 className="text-2xl font-bold text-heading mb-2">
              Ready to bring Chai Bro to your city?
            </h3>
            <p className="text-sm text-body mb-6 leading-relaxed">
              Fill in your details and our Franchise Director will get in touch with you within 2 business hours with the financial model and franchise brochure.
            </p>

              <div className="enquiry-info-box">
                <div className="info-row">
                  <strong>Call / WhatsApp:</strong>{' '}
                  <a href="https://wa.me/918700087687?text=Hello%20Chai%20Bro's,%20I%20am%20interested%20in%20a%20Franchise%20opportunity!" target="_blank" rel="noopener noreferrer" className="hover:underline text-terracotta font-bold">
                    +91 87000 87687
                  </a>
                </div>
                <div className="info-row">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@chaibros.online" className="hover:underline">
                    info@chaibros.online
                  </a>
                </div>
                <div className="info-row">
                  <strong>Flagship Café:</strong> Booth No. 80, Sector 89, Mohali, Punjab 160062
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="https://wa.me/918700087687?text=Hello%20Chai%20Bro's,%20I%20am%20interested%20in%20a%20Franchise%20opportunity!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
                    textDecoration: 'none'
                  }}
                >
                  <span>💬 Instant Franchise Chat on WhatsApp</span>
                </a>
              </div>
          </div>

          <div className="enquiry-form-side">
            {submitted ? (
              <div className="submitted-success-box text-center py-8">
                <div className="success-icon-check">
                  <CheckCircle2 size={36} className="text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-heading mt-2">Application Received!</h4>
                <p className="text-sm text-muted mt-2 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our franchise expansion director will contact you directly on <strong>{formData.phone}</strong> for <strong>{formData.city}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mt-6"
                >
                  Submit Another City
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="clean-enquiry-form">
                <div className="clean-form-row">
                  <div className="clean-form-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="clean-form-field">
                    <label>Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="clean-form-row">
                  <div className="clean-form-field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="clean-form-field">
                    <label>Target City & State *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ludhiana, Punjab"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                <div className="clean-form-field">
                  <label>Investment Capacity</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="15-20 Lakhs">₹14 – ₹18 Lakhs (Express Kiosk)</option>
                    <option value="20-30 Lakhs">₹22 – ₹28 Lakhs (High Street Café)</option>
                    <option value="35+ Lakhs">₹35+ Lakhs (Signature Lounge)</option>
                    <option value="Multi-Unit">Multi-Unit / City Master Franchise</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full justify-center mt-2">
                  <span>Submit Franchise Enquiry</span>
                  <ArrowRight size={17} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
