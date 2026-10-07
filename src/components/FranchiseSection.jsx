import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  PhoneCall, 
  MessageSquare,
  MessageCircle,
  Compass,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const FranchiseSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: '₹22 – ₹28 Lakhs (High Street Café)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) return;

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const text = `Hello Chai Bro's! I am interested in a Franchise opportunity.%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Enquirer')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A*City:* ${encodeURIComponent(formData.city || 'N/A')}%0A*Format/Budget:* ${encodeURIComponent(formData.budget)}%0A*Message:* ${encodeURIComponent(formData.message || 'Looking for details')}`;
    window.open(`https://wa.me/918700087687?text=${text}`, '_blank');
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
        
        {/* Main Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-gurh mb-2">
            FRANCHISE ENQUIRIES
          </span>
          <h1 className="section-title">
            Let’s Talk <span className="text-terracotta font-serif italic">Over Chai</span>
          </h1>
          <p className="section-subtitle">
            Have a location in mind for Chai Bro’s? Tell us about your city, your space and your plans. Bring India’s fastest-growing modern chai chain to your neighbourhood.
          </p>
        </div>

        {/* 3 Store Formats Cards Grid */}
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

        {/* Split Enquiry Card Wrapper (Incorporating 3 Steps from chaibros.online) */}
        <div className="enquiry-card-wrapper mt-12">
          
          {/* Left Details & 3-Step Process Side */}
          <div className="enquiry-details-side">
            <span className="badge-pill badge-terracotta text-xs mb-3 inline-block">
              A NEW NEIGHBOURHOOD. A NEW CONVERSATION.
            </span>

            <h3 className="text-2xl md:text-3xl font-extrabold text-heading mb-3">
              Your idea starts here.
            </h3>

            <p className="text-sm text-body mb-4 leading-relaxed">
              Whether you are exploring café ownership or have a location ready, get in touch with the Chai Bro’s team for a direct discussion.
            </p>

            <p className="text-xs text-muted mb-6 leading-relaxed">
              We’ll use your enquiry to understand your preferred area and the questions you’d like to ask. Store formats, costs, support and any commercial terms are discussed with the team.
            </p>

            {/* 3 Step Process Box (01, 02, 03) */}
            <div className="franchise-steps-container">
              <div className="franchise-step-item">
                <div className="franchise-step-num">01</div>
                <div>
                  <strong className="block text-sm text-heading">Tell us about your plans</strong>
                  <span className="text-xs text-muted">Share your city, location and contact details.</span>
                </div>
              </div>

              <div className="franchise-step-item">
                <div className="franchise-step-num">02</div>
                <div>
                  <strong className="block text-sm text-heading">Connect with the team</strong>
                  <span className="text-xs text-muted">Discuss the opportunity and ask your questions.</span>
                </div>
              </div>

              <div className="franchise-step-item">
                <div className="franchise-step-num">03</div>
                <div>
                  <strong className="block text-sm text-heading">Explore the next steps</strong>
                  <span className="text-xs text-muted">Review the details before making a commitment.</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Info Box */}
            <div className="enquiry-info-box">
              <div className="info-row">
                <Phone size={15} className="text-terracotta inline mr-2" />
                <strong>Call / WhatsApp:</strong>{' '}
                <a href="tel:+918700087687" className="hover:underline text-terracotta font-bold ml-1">
                  +91 87000 87687
                </a>
              </div>
              <div className="info-row">
                <Mail size={15} className="text-terracotta inline mr-2" />
                <strong>Email Support:</strong>{' '}
                <a href="mailto:info@chaibros.online" className="hover:underline ml-1">
                  info@chaibros.online
                </a>
              </div>
              <div className="info-row">
                <MapPin size={15} className="text-terracotta inline mr-2" />
                <strong>Flagship Café:</strong> Booth No. 80, Sector 89, Mohali, Punjab
              </div>
            </div>

            <div className="mt-5">
              <button
                type="button"
                onClick={handleWhatsAppChat}
                className="btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Continue on WhatsApp →</span>
              </button>
            </div>
          </div>

          {/* Right Form Side */}
          <div className="enquiry-form-side">
            {submitted ? (
              <div className="submitted-success-box text-center py-8">
                <div className="success-icon-check">
                  <CheckCircle2 size={40} className="text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-heading mt-3">Enquiry Received!</h4>
                <p className="text-sm text-muted mt-2 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our franchise expansion team will contact you directly on <strong>{formData.phone}</strong> for <strong>{formData.city}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mt-6"
                >
                  Submit Another Location
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="clean-enquiry-form">
                <h4 className="text-xl font-bold text-heading mb-1">Start a conversation</h4>
                <p className="text-xs text-muted mb-4">Share a few details and continue with our expansion team.</p>

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
                    <label>Phone Number *</label>
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
                    <label>Email <span className="text-muted font-normal">(optional)</span></label>
                    <input
                      type="email"
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="clean-form-field">
                    <label>City or Preferred Area *</label>
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
                  <label>Store Format Preference</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="₹14 – ₹18 Lakhs (Express Kiosk)">₹14 – ₹18 Lakhs (Express Kiosk)</option>
                    <option value="₹22 – ₹28 Lakhs (High Street Café)">₹22 – ₹28 Lakhs (High Street Café)</option>
                    <option value="₹35+ Lakhs (Signature Lounge)">₹35+ Lakhs (Signature Lounge & Deck)</option>
                    <option value="Multi-Unit Master Franchise">Multi-Unit Master Franchise</option>
                  </select>
                </div>

                <div className="clean-form-field">
                  <label>Tell us about your plans *</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Describe your location ideas, preferred store format, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <p className="text-xs text-muted mt-1">
                  You can review your message in WhatsApp before sending.{' '}
                  <Link to="/privacy-policy" className="text-terracotta font-semibold hover:underline">Privacy information</Link>
                </p>

                <div className="flex gap-3 mt-2 flex-wrap">
                  <button type="submit" className="btn-primary flex-1 justify-center">
                    <span>Submit Enquiry</span>
                    <ArrowRight size={17} />
                  </button>
                  <button 
                    type="button" 
                    onClick={handleWhatsAppChat}
                    className="btn-whatsapp btn-whatsapp-sm"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
