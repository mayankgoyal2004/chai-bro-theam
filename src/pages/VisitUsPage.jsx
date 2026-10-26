import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, ArrowRight, Clock } from 'lucide-react';

export const VisitUsPage = () => {
  return (
    <div className="page-visit-us">
      
      {/* Background Decorative Art Elements */}
      <div className="visit-deco-bg visit-deco-left" aria-hidden="true">
        <svg width="120" height="140" viewBox="0 0 100 120" fill="none" stroke="var(--primary)" strokeWidth="1.5">
          <path d="M25 40 h50 v60 a10 10 0 0 1 -10 10 h-30 a10 10 0 0 1 -10 -10 Z" />
          <path d="M20 40 h60 M30 20 Q35 30 30 40 M50 15 Q55 28 50 40 M70 20 Q75 30 70 40" />
        </svg>
      </div>

      <div className="visit-deco-bg visit-deco-right" aria-hidden="true">
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="var(--secondary)" strokeWidth="1.5">
          <path d="M10 80 Q 40 10 90 20 Q 60 60 10 80 Z M30 50 Q 60 35 85 22" />
        </svg>
      </div>

      {/* Page Hero Header */}
      <section className="visit-hero-section text-center">
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-pill badge-terracotta visit-hero-badge mb-3">
            VISIT US
          </span>

          <h1 className="section-title visit-hero-title">
            Your next chai stop: <span className="text-terracotta font-serif italic">Mohali.</span>
          </h1>

          <p className="section-subtitle visit-hero-subtitle">
            Find the red-and-white awning, bring your favourite people, and make a little time for authentic Kulhad Chai & Desi Ghee Churi.
          </p>
        </div>
      </section>

      {/* Main Outlet Card Container */}
      <section className="visit-content-section">
        <div className="container" style={{ maxWidth: '960px' }}>
          
          {/* Main White Showcase Card */}
          <div className="outlet-showcase-card">
            
            {/* Left Column: Compact Storefront Image */}
            <div className="outlet-photo-col">
              <img 
                src="/assets/chaibros/original-night-1.webp" 
                alt="Chai Bro's Booth No. 80 Sector 89 Mohali Storefront"
                className="outlet-photo-img"
              />
            </div>

            {/* Right Column: Store Info & Action Buttons */}
            <div className="outlet-details-col">
              
              {/* Flagship Store Badge */}
              <span className="badge-pill badge-gurh mb-3 inline-block self-start">
                <MapPin size={13} className="inline mr-1 text-terracotta" /> FLAGSHIP STORE
              </span>

              {/* Title */}
              <h2 className="outlet-title">
                Chai Bro’s, Sector 89, Mohali
              </h2>

              {/* Location Line */}
              <div className="outlet-meta-row">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Booth No. 80, Sector 89, Mohali, Punjab</span>
              </div>

              {/* Hours / Info Line */}
              <div className="outlet-hours-row">
                <Clock size={14} className="text-secondary flex-shrink-0" />
                <span>Open Daily: 9:00 AM – 11:00 PM</span>
              </div>

              {/* Description */}
              <p className="outlet-desc">
                Planning a visit? Call or message our team for current opening hours, table availability, and direct delivery orders.
              </p>

              {/* Styled Action Buttons */}
              <div className="outlet-actions-col">
                
                {/* Button 1: Open Google Maps */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Chai%20Bro%27s%2C%20Booth%20No.%2080%2C%20Sector%2089%2C%20Mohali%2C%20Punjab" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary outlet-action-btn"
                >
                  <Navigation size={16} />
                  <span>Open Google Maps</span>
                  <ExternalLink size={14} className="opacity-80" />
                </a>

                {/* Button 2: Call Us */}
                <a 
                  href="tel:+918700087687" 
                  className="btn-secondary outlet-action-btn"
                >
                  <Phone size={16} className="text-terracotta" />
                  <span>Call Us: +91 87000 87687</span>
                </a>

                {/* Button 3: Chat on WhatsApp */}
                <a 
                  href="https://wa.me/918700087687?text=Hello%20Chai%20Bro%27s!%20I%20am%20planning%20to%20visit." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-whatsapp outlet-action-btn"
                >
                  <MessageCircle size={17} />
                  <span>Chat on WhatsApp</span>
                </a>

              </div>

            </div>

          </div>

          {/* Bottom Card: Ready to explore the menu before coming? */}
          <div className="visit-cta-card">
            
            {/* Bottom Card Leaf Decorative Vector Art */}
            <div className="visit-deco-bg visit-deco-card-left" aria-hidden="true">
              <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                <path d="M10 80 Q 40 10 90 20 Q 60 60 10 80 Z M30 50 Q 60 35 85 22" />
              </svg>
            </div>

            <div className="visit-deco-bg visit-deco-card-right" aria-hidden="true">
              <svg width="80" height="90" viewBox="0 0 100 120" fill="none" stroke="var(--secondary)" strokeWidth="1.5">
                <path d="M25 40 h50 v60 a10 10 0 0 1 -10 10 h-30 a10 10 0 0 1 -10 -10 Z" />
              </svg>
            </div>

            <h3 className="visit-cta-title">
              Ready to explore the menu before coming?
            </h3>
            
            <p className="visit-cta-desc">
              Check out our Special Desi Ghee Churi, Adrak & Elaichi Chai, cold coffee, pizza, burgers and 140+ pure vegetarian delicacies.
            </p>

            <Link 
              to="/menu" 
              className="btn-primary visit-cta-btn"
            >
              <span>Explore Full Menu</span>
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
};
