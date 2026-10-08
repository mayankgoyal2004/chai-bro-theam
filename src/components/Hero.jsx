import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Star,
  Coffee,
  Store,
  ShieldCheck,
  Flame,
  ChevronRight,
  Heart,
  Award,
  CheckCircle2,
} from "lucide-react";
import { HeroParticles } from "./HeroParticles";

export const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [liked, setLiked] = useState(false);

  // 3D Parallax Tilt state
  const frameRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const experiences = [
    {
      id: "gurh-laachi",
      tabLabel: "Gurh Laachi Chai",
      icon: Coffee,
      tag: "🔥 #1 Tricity Best Seller",
      title: "Artisanal Gurh Laachi Chai",
      desc: "Double-boiled pure buffalo milk slow-simmered in traditional brass handi with whole green cardamom & raw organic jaggery.",
      image: "/assets/hero/hero_kulhad_pour.jpg",
      alt: "Artisanal Gurh Laachi Kulhad Chai Pour",
      price: "₹49",
      unit: "per earthen kulhad",
      ctaText: "Explore Full Menu",
      ctaLink: "/menu",
    },
    {
      id: "desi-churi",
      tabLabel: "Ghar Ki Desi Churi",
      icon: Flame,
      tag: "✨ Royal Punjabi Comfort",
      title: "Desi Ghee Churi & Bun Maska",
      desc: "Hand-crushed tandoori rotis blended with warm pure desi ghee, organic country jaggery, crushed pistachios, and saffron.",
      image: "/assets/hero/hero_churi_delight.jpg",
      alt: "Punjabi Desi Ghee Churi and Bun Maska Delight",
      price: "₹99",
      unit: "rich heritage bowl",
      ctaText: "View Food Delicacies",
      ctaLink: "/menu",
    },
    {
      id: "franchise-fofo",
      tabLabel: "Franchise Model",
      icon: Store,
      tag: "🏆 High ROI Opportunity",
      title: "Own A Gurh Laachi Outlet",
      desc: "Join India’s fastest growing modern café network with standard kitchen SOPs, manpower support, and zero hidden royalties.",
      image: "/assets/hero/hero_ambient_bg.jpg",
      alt: "Gurh Laachi and Chai Bro Modern Café Outlets",
      price: "FOFO",
      unit: "200+ Outlets",
      ctaText: "Get Franchise Kit",
      ctaLink: "/franchise",
    },
  ];

  const currentExp = experiences[activeTab];

  // Mouse move tilt effect
  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <section id="home" className="hero-master-wrapper">
      {/* Background Layer with Ambient Café Photo, Dark Gradient & Subtle Glow */}
      <div
        className="hero-bg-layer"
        style={{ backgroundImage: `url('/assets/hero/hero_ambient_bg.jpg')` }}
      >
        <div className="hero-overlay-gradient"></div>
        <div className="hero-spotlight-left"></div>
        <div className="hero-spotlight-right"></div>
        <HeroParticles />
      </div>

      {/* Main Hero Container */}
      <div className="container hero-inner-container">
        <div className="hero-main-grid">
          
          {/* Left Column: Headline, Body, Tab Switcher & CTAs */}
          <div className="hero-content-col">
            
            {/* Top Heritage Pill */}
            <div className="hero-badge-pill">
              <Sparkles size={14} className="badge-sparkle-icon" />
              <span>ROOTED IN PUNJAB • CRAFTED FOR MODERN SOULS</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-headline">
              Where Punjab’s roots <br />
              <span className="hero-headline-accent">
                meet modern café culture.
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="hero-description">
              Savor slow-simmered <strong>Gurh Laachi Kulhad Chai</strong>, golden
              handcrafted <strong>Desi Ghee Churi</strong>, and signature coffees —
              brewed with pure buffalo milk and unglazed riverbed clay.
            </p>

            {/* Clean Specialty Selector Tabs */}
            <div className="hero-tabs-bar" role="tablist">
              {experiences.map((exp, idx) => {
                const TabIcon = exp.icon;
                return (
                  <button
                    key={exp.id}
                    role="tab"
                    aria-selected={activeTab === idx}
                    onClick={() => setActiveTab(idx)}
                    className={`hero-pill-tab ${activeTab === idx ? "active" : ""}`}
                  >
                    <TabIcon size={15} />
                    <span>{exp.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="hero-actions-row">
              <Link to={currentExp.ctaLink} className="btn-hero-primary">
                <span>{currentExp.ctaText}</span>
                <div className="btn-icon-wrapper">
                  <ArrowRight size={16} />
                </div>
              </Link>

              <Link to="/franchise" className="btn-hero-secondary">
                <Store size={18} className="btn-secondary-icon" />
                <span>Franchise Opportunities</span>
              </Link>
            </div>

            {/* Clean Trust Features Row */}
            <div className="hero-trust-bar">
              <div className="trust-pill-item">
                <CheckCircle2 size={16} className="trust-check-icon" />
                <span>Unglazed River Clay</span>
              </div>
              <div className="trust-pill-divider">•</div>
              <div className="trust-pill-item">
                <CheckCircle2 size={16} className="trust-check-icon" />
                <span>100% Desi Ghee</span>
              </div>
              <div className="trust-pill-divider">•</div>
              <div className="trust-pill-item">
                <CheckCircle2 size={16} className="trust-check-icon" />
                <span>Pure Buffalo Milk</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="hero-visual-col">
            <div
              ref={frameRef}
              className="hero-card-showcase"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition:
                  tilt.x === 0 && tilt.y === 0
                    ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                    : "none",
              }}
            >
              {/* Card Glare */}
              <div
                className="showcase-glare"
                style={{
                  background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)`,
                }}
              />

              {/* Main Image Frame */}
              <div className="showcase-image-wrapper">
                <img
                  key={currentExp.image}
                  src={currentExp.image}
                  alt={currentExp.alt}
                  className="showcase-img"
                />

                {/* Gentle Steam Animation */}
                <div className="steam-overlay" aria-hidden="true">
                  <div className="steam-particle steam-1"></div>
                  <div className="steam-particle steam-2"></div>
                  <div className="steam-particle steam-3"></div>
                </div>

                {/* Top Left Tag */}
                <div className="showcase-tag-badge">
                  <span className="live-dot"></span>
                  <span>{currentExp.tag}</span>
                </div>

                {/* Like Button */}
                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  className={`showcase-heart-btn ${liked ? "liked" : ""}`}
                  title="Favorite"
                >
                  <Heart
                    size={16}
                    className={liked ? "fill-terracotta text-terracotta" : ""}
                  />
                </button>

                {/* Glass Bottom Info Overlay */}
                <div className="showcase-glass-card">
                  <div className="glass-text-content">
                    <span className="glass-subtitle">{currentExp.title}</span>
                    <p className="glass-desc-short">{currentExp.desc}</p>
                  </div>
                  <div className="glass-price-box">
                    <span className="glass-price-val">{currentExp.price}</span>
                    <span className="glass-price-sub">{currentExp.unit}</span>
                  </div>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="hero-floating-testimonial">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="star-filled" />
                  ))}
                  <strong className="score-text">4.9 / 5.0</strong>
                </div>
                <p className="testimonial-quote">
                  “Authentic Punjabi chai in real kulhads. Unmatched taste!”
                </p>
                <div className="testimonial-user">
                  <div className="user-avatar">GK</div>
                  <span className="user-name">Gurinder K. • Verified Review</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Streamlined Live Ticker Bar */}
      <div className="hero-ticker-bar">
        <div className="container ticker-container">
          <div className="ticker-item">
            <strong className="ticker-val">200+</strong>
            <span className="ticker-lbl">Outlets</span>
          </div>
          <span className="ticker-dot">•</span>
          <div className="ticker-item">
            <strong className="ticker-val">70+</strong>
            <span className="ticker-lbl">Cities Pan-India</span>
          </div>
          <span className="ticker-dot">•</span>
          <div className="ticker-item">
            <strong className="ticker-val">100%</strong>
            <span className="ticker-lbl">Desi Ghee</span>
          </div>
          <span className="ticker-dot">•</span>
          <div className="ticker-item">
            <strong className="ticker-val">Zero</strong>
            <span className="ticker-lbl">Artificial Essences</span>
          </div>
          <span className="ticker-dot">•</span>
          <Link to="/franchise" className="ticker-cta-link">
            <span>Become a Franchisee</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
