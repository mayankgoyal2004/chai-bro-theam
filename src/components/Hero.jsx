import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, Coffee, Store, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Text Col */}
        <div className="hero-text-col">
          <div className="hero-eyebrow">
            <span className="badge-pill badge-terracotta">
              <Sparkles size={13} className="text-terracotta" /> BORN IN PUNJAB • LOVED ACROSS INDIA
            </span>
          </div>

          <h1 className="hero-heading">
            Where Punjab’s roots <br />
            <span className="text-terracotta font-serif italic">meet modern café culture.</span>
          </h1>

          <p className="hero-lead">
            Step into <strong>Chai Bro</strong> for authentic slow-simmered kulhad chai, 
            handcrafted desi ghee churi, and comforting street snacks. A culturally rooted café 
            experience built around warmth, brotherhood, and unforgettable conversations.
          </p>

          <div className="hero-btn-row">
            <Link to="/menu" className="btn-primary">
              <span>Explore Our Menu</span>
              <ArrowRight size={17} />
            </Link>

            <Link to="/franchise" className="btn-secondary">
              <Store size={17} className="text-terracotta" />
              <span>Franchise Opportunities</span>
            </Link>
          </div>

          {/* Quick Highlight Cards */}
          <div className="hero-trust-bar">
            <div className="trust-card">
              <div className="trust-icon-bg">
                <Coffee size={20} className="text-terracotta" />
              </div>
              <div className="trust-text">
                <strong>Authentic Kulhad</strong>
                <small>Unglazed Riverbed Clay</small>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-bg bg-gurh">
                <Sparkles size={20} className="text-gurh" />
              </div>
              <div className="trust-text">
                <strong>100% Desi Ghee</strong>
                <small>No Margarine or Additives</small>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-icon-bg bg-cardamom">
                <ShieldCheck size={20} className="text-cardamom" />
              </div>
              <div className="trust-text">
                <strong>Pure Buffalo Milk</strong>
                <small>Fresh Double-Boiled Daily</small>
              </div>
            </div>
          </div>
        </div>

        {/* Right Imagery Visual Col */}
        <div className="hero-imagery-col">
          <div className="imagery-frame">
            {/* Main Primary Image */}
            <div className="hero-main-photo-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80" 
                alt="Steaming Authentic Kulhad Chai" 
                className="hero-main-photo"
              />
              <div className="photo-caption-badge">
                <span className="dot-live"></span>
                <span>Live Simmering Handi Chai</span>
              </div>
            </div>

            {/* Overlapping Secondary Card (Desi Ghee Churi) */}
            <div className="floating-snack-card animate-float">
              <img 
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80" 
                alt="Ghar Ki Desi Ghee Churi" 
                className="floating-snack-thumb"
              />
              <div className="floating-snack-info">
                <span className="badge-pill badge-gurh text-xs py-0.5">Iconic Punjab</span>
                <strong className="block text-sm text-heading mt-1">Desi Ghee Churi</strong>
                <span className="text-xs text-muted">Crushed Roti, Gurh & Dry Fruits</span>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-bold text-terracotta">₹99</span>
                  <Link to="/menu" className="text-xs font-bold text-terracotta hover:underline">
                    View in Menu →
                  </Link>
                </div>
              </div>
            </div>

            {/* Customer Rating Card */}
            <div className="floating-rating-card">
              <div className="rating-stars-row">
                <Star size={14} className="fill-gurh-gold text-gurh-gold" />
                <Star size={14} className="fill-gurh-gold text-gurh-gold" />
                <Star size={14} className="fill-gurh-gold text-gurh-gold" />
                <Star size={14} className="fill-gurh-gold text-gurh-gold" />
                <Star size={14} className="fill-gurh-gold text-gurh-gold" />
                <strong className="ml-1 text-sm text-heading">4.9 / 5</strong>
              </div>
              <p className="text-xs text-muted mt-1">
                Over <strong>1.2 Million+</strong> kulhads served with love across India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights Ticker */}
      <div className="hero-ticker-band">
        <div className="container ticker-flex">
          <div className="ticker-item">
            <span className="ticker-number">200+</span>
            <span className="ticker-label">Café Outlets</span>
          </div>
          <div className="ticker-sep">•</div>
          <div className="ticker-item">
            <span className="ticker-number">70+</span>
            <span className="ticker-label">Cities Nationwide</span>
          </div>
          <div className="ticker-sep">•</div>
          <div className="ticker-item">
            <span className="ticker-number">100%</span>
            <span className="ticker-label">Pure Desi Ghee</span>
          </div>
          <div className="ticker-sep">•</div>
          <div className="ticker-item">
            <span className="ticker-number">Zero</span>
            <span className="ticker-label">Artificial Flavours</span>
          </div>
          <div className="ticker-sep">•</div>
          <div className="ticker-item">
            <span className="ticker-number">FOFO</span>
            <span className="ticker-label">Franchise Model</span>
          </div>
        </div>
      </div>
    </section>
  );
};
