import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Heart } from 'lucide-react';
import brandLogo from '../assets/brand.webp';

export const Footer = () => {
  return (
    <footer className="clean-footer">
      {/* Main Footer Links */}
      <div className="container footer-links-grid">
        {/* Brand Col */}
        <div className="footer-brand-box">
          <Link to="/" className="nav-logo mb-3">
            <img src={brandLogo} alt="Chai Bro's Logo" className="nav-logo-img" />
            <div className="logo-text">
              <span className="logo-name">CHAI <span className="logo-accent">BRO’S</span></span>
              <span className="logo-sub">PEACE IN EVERY SIP</span>
            </div>
          </Link>

          <p className="text-xs text-body leading-relaxed max-w-sm mb-4">
            A café-style chai stop with a desi heart. Freshly brewed slow-simmered kulhad chai, 
            pure Special Desi Ghee Churi, crisp pizzas, burgers and thick shakes served daily from 
            Booth No. 80, Sector 89, Mohali, Punjab.
          </p>

          <div className="footer-social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://wa.me/918700087687" target="_blank" rel="noreferrer" className="footer-social-icon text-cardamom" aria-label="WhatsApp">
              <Phone size={15} />
            </a>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="footer-nav-col">
          <h4 className="footer-heading">Find your favourite</h4>
          <ul className="footer-list">
            <li><Link to="/menu" className="footer-nav-link">Our Menu</Link></li>
            <li><Link to="/our-story" className="footer-nav-link">Our Story</Link></li>
            <li><Link to="/gallery" className="footer-nav-link">Gallery</Link></li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div className="footer-nav-col">
          <h4 className="footer-heading">Let’s connect</h4>
          <ul className="footer-list">
            <li><Link to="/franchise" className="footer-nav-link">Franchise Enquiries</Link></li>
            <li><Link to="/contact" className="footer-nav-link">Contact Us</Link></li>
            <li><Link to="/visit-us" className="footer-nav-link">Visit Us</Link></li>
          </ul>
        </div>

        {/* Flagship Location */}
        <div className="footer-nav-col">
          <h4 className="footer-heading">Drop by for chai</h4>
          <div className="footer-contact-block">
            <div className="contact-row">
              <MapPin size={17} className="text-terracotta flex-shrink-0 mt-0.5" />
              <span className="text-xs text-body leading-relaxed">
                Booth No. 80, Sector 89, Mohali, Punjab
              </span>
            </div>

            <div className="contact-row">
              <Phone size={17} className="text-terracotta flex-shrink-0 mt-0.5" />
              <a href="tel:+918700087687" className="contact-link">
                8700087687 (Call / WhatsApp)
              </a>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Chai%20Bro%27s%2C%20Booth%20No.%2080%2C%20Sector%2089%2C%20Mohali%2C%20Punjab"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-terracotta font-semibold hover:underline inline-flex items-center gap-1 mt-2"
            >
              Get directions ↗
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container footer-bottom-clean">
        <div className="text-xs text-muted">
          © {new Date().getFullYear()} Chai Bro’s. All rights reserved. Peace in every sip.
        </div>

        <div className="footer-bottom-links">
          <Link to="/privacy-policy" className="footer-sub-link">Privacy</Link>
          <span className="footer-bottom-dot">•</span>
          <Link to="/terms" className="footer-sub-link">Terms</Link>
        </div>
      </div>
    </footer>
  );
};
