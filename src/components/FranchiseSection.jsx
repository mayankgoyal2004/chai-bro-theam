import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  PhoneCall,
  Store
} from 'lucide-react';
import confetti from 'canvas-confetti';

/* =========================================================================
   ORIGINAL BESPOKE BENEFIT ICONS (TAILORED FOR CHAI BROS)
   ========================================================================= */
const ProvenBusinessModelIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="original-benefit-svg"
    aria-hidden="true"
  >
    {/* Storefront roof awning */}
    <path 
      d="M4 11L6.2 5.5C6.5 4.6 7.4 4 8.4 4H23.6C24.6 4 25.5 4.6 25.8 5.5L28 11" 
      stroke="#791505" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M4 11C4 12.66 5.34 14 7 14C8.66 14 10 12.66 10 11C10 12.66 11.34 14 13 14C14.66 14 16 12.66 16 11C16 12.66 17.34 14 19 14C20.66 14 22 12.66 22 11C22 12.66 23.34 14 25 14C26.66 14 28 12.66 28 11" 
      fill="rgba(248, 142, 75, 0.22)" 
      stroke="#D62E0A" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Base walls */}
    <path d="M6 14V26C6 26.55 6.45 27 7 27H25C25.55 27 26 26.55 26 26V14" stroke="#791505" strokeWidth="1.8" strokeLinecap="round" />
    {/* Café Door */}
    <rect x="9" y="18" width="5" height="9" rx="1" fill="#FEF4ED" stroke="#D62E0A" strokeWidth="1.6" />
    {/* High ROI Margin upward growth indicator */}
    <path d="M17 23L20.5 19.5L22.5 21.5L25.5 17" stroke="#15803D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.5 17H25.5V20" stroke="#15803D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EndToEndSupportIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="original-benefit-svg"
    aria-hidden="true"
  >
    {/* 360 Turnkey Guiding Ring */}
    <circle cx="16" cy="16" r="13" stroke="rgba(248, 142, 75, 0.4)" strokeWidth="1.6" strokeDasharray="3 3" />
    {/* Support Shield */}
    <path 
      d="M16 4.5L24 8V15C24 20.2 20.5 24.5 16 26C11.5 24.5 8 20.2 8 15V8L16 4.5Z" 
      fill="rgba(214, 46, 10, 0.08)" 
      stroke="#D62E0A" 
      strokeWidth="1.9" 
      strokeLinejoin="round" 
    />
    {/* Launch Rocket Emblem */}
    <path 
      d="M16 8C17.5 10 19.5 12 19.5 15C19.5 16 19 17 18 17.5L18.5 19.5L16 18.5L13.5 19.5L14 17.5C13 17 12.5 16 12.5 15C12.5 12 14.5 10 16 8Z" 
      fill="#F88E4B" 
      stroke="#791505" 
      strokeWidth="1.5" 
      strokeLinejoin="round" 
    />
    <circle cx="16" cy="13.5" r="1.5" fill="#FFFFFF" />
    <circle cx="16" cy="22" r="1.3" fill="#D62E0A" />
  </svg>
);

const RobustSupplyChainIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="original-benefit-svg"
    aria-hidden="true"
  >
    {/* Logistics Route Lines */}
    <path d="M16 11V5.5M16 21V26.5M12 14L6 10.5M20 18L26 21.5M12 18L6 21.5M20 14L26 10.5" stroke="rgba(248, 142, 75, 0.5)" strokeWidth="1.6" strokeLinecap="round" />
    {/* Regional Outlets Nodes */}
    <circle cx="16" cy="5" r="2.2" fill="#F88E4B" />
    <circle cx="5.5" cy="10.5" r="2.2" fill="#D62E0A" />
    <circle cx="26.5" cy="10.5" r="2.2" fill="#D62E0A" />
    <circle cx="5.5" cy="21.5" r="2.2" fill="#15803D" />
    <circle cx="26.5" cy="21.5" r="2.2" fill="#15803D" />
    <circle cx="16" cy="27" r="2.2" fill="#F88E4B" />
    {/* Central Supply Hub */}
    <circle cx="16" cy="16" r="6.2" fill="#FEF4ED" stroke="#D62E0A" strokeWidth="2" />
    {/* Signature Tea & Spices Leaf */}
    <path 
      d="M16 12.3C18.2 13.3 19 15.3 18.2 17.3C17 18.8 14.8 19.3 13.8 17.8C13.2 16.5 14.2 13.8 16 12.3Z" 
      fill="#15803D" 
    />
    <path d="M14.6 17.8C15.8 16.5 17 14.5 17 14.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
  </svg>
);

const TechMarketingIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="original-benefit-svg"
    aria-hidden="true"
  >
    {/* Modern Smartphone Frame */}
    <rect 
      x="8" 
      y="4" 
      width="16" 
      height="24" 
      rx="3.5" 
      fill="#FFFFFF" 
      stroke="#791505" 
      strokeWidth="2" 
    />
    {/* Top Speaker / Notch */}
    <path d="M13 6.5H19" stroke="#A39084" strokeWidth="1.2" strokeLinecap="round" />
    {/* Screen Display */}
    <rect x="10.5" y="9" width="11" height="13.5" rx="1.5" fill="rgba(254, 244, 237, 0.85)" />
    {/* Chai Bros Cup on Mobile App */}
    <path d="M13 13H18.5V16C18.5 17.4 17.4 18.5 16 18.5H15.5C14.1 18.5 13 17.4 13 16V13Z" fill="#D62E0A" />
    <path d="M18.5 14H20C20.5 14 21 14.5 21 15C21 15.5 20.5 16 20 16H18.5" stroke="#D62E0A" strokeWidth="1" />
    <path d="M14.5 11.5C14.5 11 15 10.5 15 10M17 11.5C17 11 17.5 10.5 17.5 10" stroke="#F88E4B" strokeWidth="1" strokeLinecap="round" />
    {/* Digital Marketing Broadcast Waves */}
    <path d="M26 12C27.5 13.5 27.5 18.5 26 20" stroke="#F88E4B" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M28.5 9.5C31 12.5 31 19.5 28.5 22.5" stroke="#D62E0A" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16" cy="25.2" r="1" fill="#791505" />
  </svg>
);

export const FranchiseSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    targetCity: '',
    spaceAvailable: '',
    investmentBudget: '₹18 Lakhs – ₹28 Lakhs (High Street Café)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.targetCity) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }, 400);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Chai Bros! I am interested in a franchise opportunity.%0A%0A*Name:* ${encodeURIComponent(formData.fullName || 'Prospective Franchisee')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Target City / Location:* ${encodeURIComponent(formData.targetCity || 'N/A')}%0A*Space Available:* ${encodeURIComponent(formData.spaceAvailable || 'N/A')}%0A*Investment Budget:* ${encodeURIComponent(formData.investmentBudget)}`;
    window.open(`https://wa.me/918700087687?text=${text}`, '_blank');
  };

  const scrollToForm = () => {
    const el = document.getElementById('franchise-inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="franchise-page-wrapper">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="franchise-hero-section section-padding">
        <div className="container">
          <div className="franchise-hero-grid">
            
            {/* Left Content Column */}
            <div className="franchise-hero-content">
              {/* Sub-heading Tag */}
              <div className="franchise-badge-wrapper mb-3">
                <span className="badge-pill badge-gurh">
                  <Sparkles size={13} className="text-secondary" />
                  <span>Franchise Enquiries</span>
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="franchise-hero-title">
                Let’s talk <span className="text-terracotta font-serif italic">over chai.</span>
              </h1>

              {/* Sub-headline / Description */}
              <p className="franchise-hero-description">
                Have a location in mind for Chai Bros? Tell us about your city, your space, and your plans. Let’s build a profitable neighborhood hub together.
              </p>

              {/* Action Buttons */}
              <div className="franchise-hero-actions">
                <button 
                  type="button" 
                  onClick={scrollToForm}
                  className="btn-primary franchise-cta-btn"
                >
                  <span>Apply for Franchise</span>
                  <ArrowRight size={18} />
                </button>

                <a 
                  href="https://wa.me/918700087687?text=Hello%20Chai%20Bros!%20I%20would%20like%20to%20discuss%20a%20franchise%20opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="franchise-hero-highlights">
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="text-cardamom" />
                  <span>Low Setup Cost & Proven ROI</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="text-cardamom" />
                  <span>Full Turnkey Store Setup</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="text-cardamom" />
                  <span>Centralized Taste Standard</span>
                </div>
              </div>
            </div>

            {/* Right Visual Element Column (Warm lifestyle photo of bustling outlet & neatly styled kulhad chai) */}
            <div className="franchise-hero-visual">
              <div className="hero-visual-card">
                <div className="visual-image-container">
                  <img 
                    src="/assets/vibe/warm-earthy-seating.png" 
                    alt="Bustling Chai Bros café interior and warm modern baithak seating" 
                    className="hero-lifestyle-img"
                    loading="eager"
                  />
                  <div className="visual-image-overlay"></div>
                </div>

                {/* Overlapping Floating Kulhad Chai Accent Card */}
                <div className="floating-kulhad-card">
                  <div className="kulhad-thumb-box">
                    <img 
                      src="/assets/chaibros/specialty_chai.jpg" 
                      alt="Artisanal hot Kulhad Chai brewed with natural spices" 
                      className="kulhad-thumb-img"
                    />
                  </div>
                  <div className="kulhad-details">
                    <span className="kulhad-tag">Specialty Brew</span>
                    <strong className="kulhad-title">Kulhad Chai & Coffee</strong>
                    <span className="kulhad-caption">100% Desi Ghee & Fresh Spices</span>
                  </div>
                </div>

                {/* Floating Metric Badge */}
                <div className="floating-stat-badge">
                  <Store size={16} className="text-secondary" />
                  <div>
                    <strong>Mohali Flagship Hub</strong>
                    <span>Pan-India Expansion Ready</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. BRAND VALUE PROPOSITION SECTION
          ========================================================================= */}
      <section className="franchise-value-section section-padding bg-warm-light">
        <div className="container">
          
          <div className="section-header text-center max-w-3xl mx-auto">
            <span className="badge-pill badge-terracotta mb-3">
              Join the Revolution
            </span>
            <h2 className="section-title">
              Why Partner with Chai Bros?
            </h2>
            <p className="section-subtitle">
              The cafe and quick-service restaurant (QSR) culture is booming, but authentic, soulful tea culture combined with modern aesthetics is where the future lies. When you franchise with Chai Bros, you aren't just opening a cafe—you are bringing a community-favorite hangout spot to your city.
            </p>
          </div>

          {/* Key Benefit Cards (Grid Layout) */}
          <div className="franchise-benefits-grid">
            
            {/* Card 1 */}
            <div className="benefit-card">
              <div className="benefit-icon-box">
                <ProvenBusinessModelIcon />
              </div>
              <h3 className="benefit-card-title">Proven Business Model</h3>
              <p className="benefit-card-desc">
                Low setup costs with high operational efficiency and attractive profit margins.
              </p>
              <div className="benefit-card-footer">
                <span className="benefit-pill">High ROI Margins</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="benefit-card">
              <div className="benefit-icon-box">
                <EndToEndSupportIcon />
              </div>
              <h3 className="benefit-card-title">End-to-End Support</h3>
              <p className="benefit-card-desc">
                Comprehensive assistance from site selection and interior setup to staff training and launch marketing.
              </p>
              <div className="benefit-card-footer">
                <span className="benefit-pill">Turnkey Setup</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="benefit-card">
              <div className="benefit-icon-box">
                <RobustSupplyChainIcon />
              </div>
              <h3 className="benefit-card-title">Robust Supply Chain</h3>
              <p className="benefit-card-desc">
                Standardized raw material and ingredient supply to ensure consistent taste across every outlet.
              </p>
              <div className="benefit-card-footer">
                <span className="benefit-pill">Consistent Flavor</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="benefit-card">
              <div className="benefit-icon-box">
                <TechMarketingIcon />
              </div>
              <h3 className="benefit-card-title">Tech & Marketing Backing</h3>
              <p className="benefit-card-desc">
                Digital marketing strategies, social media templates, and online ordering integration to drive immediate footfall.
              </p>
              <div className="benefit-card-footer">
                <span className="benefit-pill">Omnichannel Footfall</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. HOW IT WORKS (STEP-BY-STEP PROCESS SECTION)
          ========================================================================= */}
      <section className="franchise-process-section section-padding">
        <div className="container">
          
          <div className="section-header text-center max-w-3xl mx-auto">
            <span className="badge-pill badge-gurh mb-3">
              A new neighbourhood. A new conversation.
            </span>
            <h2 className="section-title">
              Your expansion starts here.
            </h2>
            <p className="section-subtitle">
              Whether you are exploring cafe ownership or already have a prime location locked down, getting started is simple and transparent.
            </p>
          </div>

          {/* The 3-Step Process Cards */}
          <div className="process-cards-grid">
            
            {/* Step 01 */}
            <div className="process-card">
              <div className="process-card-header">
                <div className="process-step-badge">01</div>
                <div className="process-step-connector"></div>
              </div>
              <h3 className="process-card-title">Tell us about your plans</h3>
              <p className="process-card-details">
                Share your preferred city, target location, and basic contact details via our quick inquiry form.
              </p>
            </div>

            {/* Step 02 */}
            <div className="process-card">
              <div className="process-card-header">
                <div className="process-step-badge">02</div>
                <div className="process-step-connector"></div>
              </div>
              <h3 className="process-card-title">Connect with the team</h3>
              <p className="process-card-details">
                Have a direct consultation with our core management to discuss business opportunities, store models, and answers to your questions.
              </p>
            </div>

            {/* Step 03 */}
            <div className="process-card">
              <div className="process-card-header">
                <div className="process-step-badge">03</div>
              </div>
              <h3 className="process-card-title">Explore the next steps</h3>
              <p className="process-card-details">
                Review the commercial terms, layout designs, and investment structures before making a final commitment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. FRANCHISE INQUIRY FORM SECTION
          ========================================================================= */}
      <section id="franchise-inquiry-form" className="franchise-form-section section-padding bg-warm-light">
        <div className="container">
          
          <div className="franchise-form-card">
            
            <div className="form-card-header text-center">
              <span className="badge-pill badge-terracotta mb-2">Franchise Application</span>
              <h2 className="form-main-heading">
                Ready to Brew Success? Send Us Your Details.
              </h2>
              <p className="form-sub-heading">
                Fill out the quick inquiry form below and our expansion team will review your location within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="form-success-state text-center">
                <div className="success-icon-bubble">
                  <CheckCircle2 size={48} className="text-cardamom" />
                </div>
                <h3 className="text-2xl font-bold text-heading mt-4">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-body max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our franchise development team has received your application for <strong>{formData.targetCity}</strong> and will contact you promptly at <strong>{formData.phone}</strong>.
                </p>

                <div className="form-success-actions mt-6">
                  <button 
                    type="button" 
                    onClick={handleWhatsAppDirect}
                    className="btn-whatsapp"
                  >
                    <MessageCircle size={18} />
                    <span>Instant WhatsApp Connect</span>
                  </button>

                  <button 
                    type="button" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        targetCity: '',
                        spaceAvailable: '',
                        investmentBudget: '₹18 Lakhs – ₹28 Lakhs (High Street Café)'
                      });
                    }}
                    className="btn-secondary"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="franchise-inquiry-form">
                
                <div className="form-grid-row">
                  {/* Full Name */}
                  <div className="form-field-group">
                    <label htmlFor="fullName" className="field-label">
                      Full Name (e.g., Rahul Sharma) <span className="required-star">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g., Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="field-input"
                    />
                  </div>

                  {/* Phone / WhatsApp Number */}
                  <div className="form-field-group">
                    <label htmlFor="phone" className="field-label">
                      Phone / WhatsApp Number (e.g., +91 87000 XXXXX) <span className="required-star">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g., +91 87000 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-grid-row">
                  {/* Email Address */}
                  <div className="form-field-group">
                    <label htmlFor="email" className="field-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g., rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="field-input"
                    />
                  </div>

                  {/* Target City / Location */}
                  <div className="form-field-group">
                    <label htmlFor="targetCity" className="field-label">
                      Target City / Location (Where do you want to open?) <span className="required-star">*</span>
                    </label>
                    <input
                      id="targetCity"
                      type="text"
                      required
                      placeholder="e.g., Chandigarh, Sector 35 / Jaipur / Delhi"
                      value={formData.targetCity}
                      onChange={(e) => setFormData({ ...formData, targetCity: e.target.value })}
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-grid-row">
                  {/* Approximate Space Available */}
                  <div className="form-field-group">
                    <label htmlFor="spaceAvailable" className="field-label">
                      Approximate Space Available (e.g., 300–600 sq. ft.)
                    </label>
                    <input
                      id="spaceAvailable"
                      type="text"
                      placeholder="e.g., 300–600 sq. ft."
                      value={formData.spaceAvailable}
                      onChange={(e) => setFormData({ ...formData, spaceAvailable: e.target.value })}
                      className="field-input"
                    />
                  </div>

                  {/* Investment Budget Range */}
                  <div className="form-field-group">
                    <label htmlFor="investmentBudget" className="field-label">
                      Investment Budget Range <span className="required-star">*</span>
                    </label>
                    <div className="select-container">
                      <select
                        id="investmentBudget"
                        value={formData.investmentBudget}
                        onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                        className="field-select"
                        required
                      >
                        <option value="₹12 Lakhs – ₹18 Lakhs (Express Kiosk)">₹12 Lakhs – ₹18 Lakhs (Express Kiosk)</option>
                        <option value="₹18 Lakhs – ₹28 Lakhs (High Street Café)">₹18 Lakhs – ₹28 Lakhs (High Street Café)</option>
                        <option value="₹28 Lakhs – ₹45 Lakhs (Signature Lounge)">₹28 Lakhs – ₹45 Lakhs (Signature Lounge)</option>
                        <option value="₹50+ Lakhs (Multi-Unit Master Franchise)">₹50+ Lakhs (Multi-Unit Master Franchise)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Privacy & Terms Note */}
                <div className="form-note-row">
                  <p className="form-note">
                    By submitting this enquiry, you agree to our{' '}
                    <Link to="/privacy-policy" className="privacy-link">Privacy Policy</Link>{' '}
                    and allow our expansion lead to contact you.
                  </p>
                </div>

                {/* Form Action Buttons */}
                <div className="form-submit-row">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary form-submit-btn"
                  >
                    <span>{isSubmitting ? 'Submitting Details...' : 'Submit Franchise Enquiry →'}</span>
                  </button>

                  <button 
                    type="button" 
                    onClick={handleWhatsAppDirect}
                    className="btn-whatsapp form-wa-btn"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Enquiry</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. QUICK CONTACT / DIRECT ASSISTANCE FOOTER BLOCK
          ========================================================================= */}
      <section className="franchise-quick-contact-section section-padding">
        <div className="container">
          
          <div className="quick-contact-card">
            <div className="quick-contact-content">
              
              <div className="quick-contact-header">
                <span className="badge-pill badge-gurh mb-2">Direct Expansion Desk</span>
                <h2 className="quick-contact-title">
                  Have Immediate Questions?
                </h2>
                <p className="quick-contact-desc">
                  Skip the form and speak directly with our expansion lead.
                </p>
              </div>

              {/* Direct Details Grid */}
              <div className="direct-details-grid">
                
                {/* Phone / WhatsApp */}
                <a 
                  href="tel:+918700087687" 
                  className="direct-detail-item"
                >
                  <div className="detail-icon-circle">
                    <PhoneCall size={20} className="text-terracotta" />
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Phone / WhatsApp</span>
                    <strong className="detail-value">+91 8700087687</strong>
                    <span className="detail-sub">Call or message for instant consultation</span>
                  </div>
                </a>

                {/* Email Address */}
                <a 
                  href="mailto:franchise@chaibros.online" 
                  className="direct-detail-item"
                >
                  <div className="detail-icon-circle">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Email Address</span>
                    <strong className="detail-value">franchise@chaibros.online</strong>
                    <span className="detail-sub">Detailed pitch decks & commercials</span>
                  </div>
                </a>

                {/* Headquarters */}
                <a 
                  href="https://maps.google.com/?q=Booth+No.+80,+Sector+89,+Mohali,+Punjab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="direct-detail-item"
                >
                  <div className="detail-icon-circle">
                    <MapPin size={20} className="text-dark-maroon" />
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Headquarters</span>
                    <strong className="detail-value">Booth No. 80, Sector 89, Mohali, Punjab</strong>
                    <span className="detail-sub">Visit our flagship café & tasting counter</span>
                  </div>
                </a>

              </div>

              {/* Action Strip */}
              <div className="quick-contact-actions">
                <a 
                  href="tel:+918700087687" 
                  className="btn-primary"
                >
                  <Phone size={17} />
                  <span>Call +91 8700087687</span>
                </a>

                <a 
                  href="https://wa.me/918700087687?text=Hello%20Chai%20Bros!%20I%20have%20an%20immediate%20question%20regarding%20franchise%20expansion." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Expansion Lead</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
