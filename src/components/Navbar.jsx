import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin, Store, Menu, X, ChevronRight, Phone } from 'lucide-react';
import brandLogo from '../assets/brand.webp';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Franchise', path: '/franchise' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Visit Us', path: '/visit-us' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="site-header">
      {/* Top Banner */}
      <div className="top-banner">
        <div className="container banner-inner">
          <div className="banner-left">
            <span className="banner-pill">BOOTH 80, SEC 89, MOHALI</span>
            <span className="banner-tagline">Chai Bro’s • Freshly Brewed Comfort & Special Desi Ghee Churi</span>
          </div>
          <div className="banner-right hide-mobile">
            <a href="tel:+918700087687" className="banner-tel-link">
              <Phone size={12} className="inline mr-1" /> +91 87000 87687
            </a>
            <span className="banner-divider">|</span>
            <Link to="/franchise" className="banner-franchise-link">
              Franchise Opportunities <ChevronRight size={12} className="inline" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`main-nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-content">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img src={brandLogo} alt="Chai Bro's Logo" className="nav-logo-img" />
            <div className="logo-text">
              <span className="logo-name">CHAI <span className="logo-accent">BRO’S</span></span>
              <span className="logo-sub">PEACE IN EVERY SIP</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-menu-desktop">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Action */}
          <div className="nav-actions-group">
            <Link to="/visit-us" className="nav-action-text hide-mobile">
              <MapPin size={17} className="text-terracotta" />
              <span>Visit Us</span>
            </Link>

            <Link
              to="/franchise"
              className="btn-primary hide-mobile"
              style={{ padding: '9px 22px', fontSize: '0.88rem' }}
            >
              <Store size={16} />
              <span>Own A Franchise</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-links-list">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) => `mobile-item ${isActive ? 'active-mobile' : ''}`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className="text-muted" />
                </NavLink>
              ))}
              <div className="mobile-cta-box">
                <Link
                  to="/franchise"
                  className="btn-primary w-full text-center"
                >
                  <Store size={16} /> Become a Franchise Partner
                </Link>
                <a
                  href="tel:+918700087687"
                  className="btn-secondary w-full text-center mt-2"
                >
                  <Phone size={16} /> Call Us: +91 87000 87687
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
