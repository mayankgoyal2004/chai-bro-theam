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
            Let’s talk <span className="text-terracotta font-serif italic">over chai.</span>
          </h1>
          <p className="section-subtitle">
            Have a location in mind for Chai Bros? Tell us about your city, your space, and your plans. Let’s build a profitable neighborhood hub together.
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

        {/* Brand Value Proposition Section */}
        <div className="section-padding text-center">
          <span className="badge-pill badge-terracotta mb-2">Join the Revolution</span>
          <h2 className="section-title">Why Partner with Chai Bros?</h2>
          <p className="section-subtitle max-w-3xl mx-auto mb-10">
            The cafe and quick-service restaurant (QSR) culture is booming, but authentic, soulful tea culture combined with modern aesthetics is where the future lies. When you franchise with Chai Bros, you aren't just opening a cafe—you are bringing a community-favorite hangout spot to your city.
          </p>
          <div className="partnership-pillars-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div className="pillar-cell">
              <TrendingUp size={24} className="text-terracotta mb-2" />
              <h4>Proven Business Model</h4>
              <p>Low setup costs with high operational efficiency and attractive profit margins.</p>
            </div>
            <div className="pillar-cell">
              <Building2 size={24} className="text-gurh mb-2" />
              <h4>End-to-End Support</h4>
              <p>Comprehensive assistance from site selection and interior setup to staff training and launch marketing.</p>
            </div>
            <div className="pillar-cell">
              <ShieldCheck size={24} className="text-cardamom mb-2" />
              <h4>Robust Supply Chain</h4>
              <p>Standardized raw material and ingredient supply to ensure consistent taste across every outlet.</p>
            </div>
            <div className="pillar-cell">
              <Sparkles size={24} className="text-terracotta mb-2" />
              <h4>Tech & Marketing Backing</h4>
              <p>Digital marketing strategies, social media templates, and online ordering integration to drive immediate footfall.</p>
            </div>
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
              Your expansion starts here.
            </h3>

            <p className="text-sm text-body mb-6 leading-relaxed">
              Whether you are exploring cafe ownership or already have a prime location locked down, getting started is simple and transparent.
            </p>

            {/* 3 Step Process Box (01, 02, 03) */}
            <div className="franchise-steps-container">
              <div className="franchise-step-item">
                <div className="franchise-step-num">01</div>
                <div>
                  <strong className="block text-sm text-heading">Tell us about your plans</strong>
                  <span className="text-xs text-muted">Share your preferred city, target location, and basic contact details via our quick inquiry form.</span>
                </div>
              </div>

              <div className="franchise-step-item">
                <div className="franchise-step-num">02</div>
                <div>
                  <strong className="block text-sm text-heading">Connect with the team</strong>
                  <span className="text-xs text-muted">Have a direct consultation with our core management to discuss business opportunities, store models, and answers to your questions.</span>
                </div>
              </div>

              <div className="franchise-step-item">
                <div className="franchise-step-num">03</div>
                <div>
                  <strong className="block text-sm text-heading">Explore the next steps</strong>
                  <span className="text-xs text-muted">Review the commercial terms, layout designs, and investment structures before making a final commitment.</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Info Box */}
            <div className="enquiry-info-box mt-8">
              <h4 className="text-lg font-bold text-heading mb-2">Have Immediate Questions?</h4>
              <p className="text-xs text-muted mb-4">Skip the form and speak directly with our expansion lead.</p>
              <div className="info-row">
                <Phone size={15} className="text-terracotta inline mr-2" />
                <strong>Phone / WhatsApp:</strong>{' '}
                <a href="tel:+918700087687" className="hover:underline text-terracotta font-bold ml-1">
                  +91 87000 87687
                </a>
              </div>
              <div className="info-row">
                <Mail size={15} className="text-terracotta inline mr-2" />
                <strong>Email:</strong>{' '}
                <a href="mailto:franchise@chaibros.online" className="hover:underline ml-1">
                  franchise@chaibros.online
                </a>
              </div>
              <div className="info-row">
                <MapPin size={15} className="text-terracotta inline mr-2" />
                <strong>Headquarters:</strong> Booth No. 80, Sector 89, Mohali, Punjab
              </div>
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
                <h4 className="text-xl font-bold text-heading mb-1">Ready to Brew Success?</h4>
                <p className="text-xs text-muted mb-4">Send Us Your Details.</p>

                <div className="clean-form-row">
                  <div className="clean-form-field">
                    <label>Full Name (e.g., Rahul Sharma) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="clean-form-field">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 87000 XXXXX"
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
                    <label>Target City / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="Where do you want to open?"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                <div className="clean-form-row">
                  <div className="clean-form-field">
                    <label>Approximate Space Available</label>
                    <input
                      type="text"
                      placeholder="e.g., 300–600 sq. ft."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <div className="clean-form-field">
                    <label>Investment Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="₹14 – ₹18 Lakhs (Express Kiosk)">₹14 – ₹18 Lakhs</option>
                      <option value="₹22 – ₹28 Lakhs (High Street Café)">₹22 – ₹28 Lakhs</option>
                      <option value="₹35+ Lakhs (Signature Lounge)">₹35+ Lakhs</option>
                      <option value="Multi-Unit Master Franchise">Multi-Unit Master Franchise</option>
                    </select>
                  </div>
                </div>

                <p className="text-xs text-muted mt-1">
                  By submitting this form, you agree to our{' '}
                  <Link to="/privacy-policy" className="text-terracotta font-semibold hover:underline">Privacy Policy</Link>.
                </p>

                <div className="flex gap-3 mt-3 flex-wrap">
                  <button type="submit" className="btn-primary flex-1 justify-center">
                    <span>Submit Franchise Enquiry</span>
                    <ArrowRight size={17} />
                  </button>
                  <button 
                    type="button" 
                    onClick={handleWhatsAppChat}
                    className="btn-whatsapp flex-1 justify-center"
                  >
                    <MessageCircle size={18} />
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
