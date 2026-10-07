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
      label: "Signature Gurh Laachi",
      sublabel: "Slow-Simmered Chai",
      tag: "🔥 #1 Tricity Best Seller",
      title: "Artisanal Gurh Laachi Chai",
      desc: "Double-boiled pure buffalo milk slow-simmered in traditional brass handi with whole green cardamom and raw organic jaggery. Poured boiling hot into porous earthen kulhad.",
      image: "/assets/hero/hero_kulhad_pour.jpg",
      alt: "Artisanal Gurh Laachi Kulhad Chai Pour",
      badgePrice: "₹49",
      badgeUnit: "per unglazed kulhad",
      tastingNotes: [
        "Amber Gurh Sweetness",
        "Green Cardamom Aroma",
        "Earthy River Clay Finish",
      ],
      ctaText: "Explore Royal Menu",
      ctaLink: "/menu",
      highlightBadge: "Pure Unglazed River Clay",
    },
    {
      id: "desi-churi",
      label: "Ghar Ki Desi Churi",
      sublabel: "Heritage Recipe",
      tag: "✨ Royal Punjabi Comfort",
      title: "Desi Ghee Churi & Sourdough Bun Maska",
      desc: "Hand-crushed whole wheat tandoori rotis blended with warm pure desi ghee, organic country jaggery, crushed pistachios, and saffron strands. Accompanied by crispy buttered bun maska.",
      image: "/assets/hero/hero_churi_delight.jpg",
      alt: "Punjabi Desi Ghee Churi and Bun Maska Delight",
      badgePrice: "₹99",
      badgeUnit: "rich heritage bowl",
      tastingNotes: [
        "100% Pure Desi Ghee",
        "Organic Golden Jaggery",
        "Saffron & Roasted Pistachio",
      ],
      ctaText: "View Food Delicacies",
      ctaLink: "/menu",
      highlightBadge: "100% Desi Ghee Guaranteed",
    },
    {
      id: "franchise-fofo",
      label: "Franchise Revolution",
      sublabel: "FOFO Business Model",
      tag: "🏆 High ROI Opportunity",
      title: "Own A Gurh Laachi & Chai Bro Outlet",
      desc: "Join India’s most profitable and culturally rooted modern café network. Standardised backend kitchen, trained manpower support, zero hidden royalties, and 360° store launch guidance.",
      image: "/assets/hero/hero_ambient_bg.jpg",
      alt: "Gurh Laachi and Chai Bro Modern Café Outlets",
      badgePrice: "FOFO",
      badgeUnit: "Proven Model",
      tastingNotes: [
        "200+ Outlets Pan-India",
        "ROI in 9-14 Months",
        "Complete Operational SOPs",
      ],
      ctaText: "Get Franchise Kit",
      ctaLink: "/franchise",
      highlightBadge: "360° Partner Support",
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

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <section id="home" className="hero-master-wrapper">
      {/* Background Hero Atmosphere with Ambient Café Photo and Particles */}
      <div
        className="hero-bg-layer"
        style={{ backgroundImage: `url('/assets/hero/hero_ambient_bg.jpg')` }}
      >
        <div className="hero-overlay-gradient"></div>
        <div className="hero-spotlight-left"></div>
        <div className="hero-spotlight-right"></div>
        <HeroParticles />
      </div>

      {/* Hero Content Container */}
      <div className="container hero-inner-container">
        <div className="hero-main-grid">
          {/* Left Hero Column: Brand Story & Impact Typography */}
          <div className="hero-content-col">
            <div className="hero-heritage-pill">
              <span className="pill-badge">
                <Sparkles size={14} className="icon-sparkle" />
                <span>ROOTED IN PUNJAB • CRAFTED FOR MODERN SOULS</span>
              </span>
            </div>

            <h1 className="hero-title-headline">
              Where Punjab’s roots <br />
              <span className="hero-title-highlight">
                meet modern café culture.
              </span>
            </h1>

            <p className="hero-body-description">
              Experience the soul-soothing warmth of{" "}
              <strong>Gurh Laachi & Chai Bro</strong>. Authentic slow-simmered
              kulhad chai, golden handcrafted <strong>Desi Ghee Churi</strong>,
              crisp bun maska, and signature kulhad coffees — brewed with pure
              buffalo milk and unglazed riverbed clay.
            </p>

            {/* Interactive Experience Tab Selector */}
            <div className="hero-tab-selector" role="tablist">
              {experiences.map((exp, idx) => (
                <button
                  key={exp.id}
                  role="tab"
                  aria-selected={activeTab === idx}
                  onClick={() => setActiveTab(idx)}
                  className={`hero-tab-btn ${activeTab === idx ? "active" : ""}`}
                  data-cursor-text="Switch"
                >
                  <span className="tab-indicator-num">0{idx + 1}</span>
                  <div className="tab-btn-text">
                    <span className="tab-title">{exp.label}</span>
                    <span className="tab-subtitle">{exp.sublabel}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tasting Notes Bar */}
            <div className="hero-tasting-notes">
              <span className="notes-label">Culinary Notes:</span>
              <div className="notes-list">
                {currentExp.tastingNotes.map((note, i) => (
                  <span key={i} className="note-pill">
                    <Flame size={12} className="note-icon" />
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-action-buttons">
              <Link
                to={currentExp.ctaLink}
                className="btn-hero-primary"
                data-cursor-text="Order"
              >
                <span className="btn-hero-text">{currentExp.ctaText}</span>
                <span className="btn-hero-icon-circle">
                  <ArrowRight size={18} />
                </span>
              </Link>

              <Link
                to="/franchise"
                className="btn-hero-secondary"
                data-cursor-text="FOFO"
              >
                <Store size={18} className="icon-terracotta" />
                <span>Franchise Opportunities</span>
              </Link>
            </div>

            {/* Verified Trust Strip */}
            <div className="hero-trust-strip">
              <div className="trust-item">
                <div className="trust-icon-box">
                  <Coffee size={20} />
                </div>
                <div className="trust-item-info">
                  <strong>Unglazed River Clay</strong>
                  <span>Earthy mineral infusion</span>
                </div>
              </div>

              <div className="trust-item">
                <div className="trust-icon-box bg-gold-subtle">
                  <Sparkles size={20} className="text-gold" />
                </div>
                <div className="trust-item-info">
                  <strong>100% Desi Ghee</strong>
                  <span>Zero margarine & palm oil</span>
                </div>
              </div>

              <div className="trust-item">
                <div className="trust-icon-box bg-green-subtle">
                  <ShieldCheck size={20} className="text-green" />
                </div>
                <div className="trust-item-info">
                  <strong>Pure Buffalo Milk</strong>
                  <span>Slow handi simmered daily</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: 3D Interactive Magnetic Showcase Frame */}
          <div className="hero-visual-col">
            <div
              ref={frameRef}
              className="interactive-3d-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
                transition:
                  tilt.x === 0 && tilt.y === 0
                    ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                    : "none",
              }}
            >
              {/* Dynamic Glare Reflection */}
              <div
                className="card-glare"
                style={{
                  background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)`,
                }}
              />

              {/* Showcase Main Photo Frame */}
              <div className="showcase-photo-container">
                <img
                  key={currentExp.image}
                  src={currentExp.image}
                  alt={currentExp.alt}
                  className="showcase-main-img animate-fade-in"
                />

                {/* Live Steam Effect Overlay on Image */}
                <div className="steam-container" aria-hidden="true">
                  <div className="steam-wisp steam-wisp-1"></div>
                  <div className="steam-wisp steam-wisp-2"></div>
                  <div className="steam-wisp steam-wisp-3"></div>
                </div>

                {/* Top Badge: Live Hand-Poured */}
                <div className="showcase-top-badge">
                  <span className="live-pulsing-badge"></span>
                  <span>{currentExp.tag}</span>
                </div>

                {/* Like Favorite Button */}
                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  className={`btn-like-showcase ${liked ? "liked" : ""}`}
                  title="Favorite this taste"
                  data-cursor-text="Love"
                >
                  <Heart
                    size={18}
                    className={liked ? "fill-terracotta text-terracotta" : ""}
                  />
                </button>

                {/* Bottom Overlay Glass Card */}
                <div className="showcase-bottom-overlay">
                  <div className="overlay-info-text">
                    <span className="overlay-badge">
                      {currentExp.highlightBadge}
                    </span>
                    <h3 className="overlay-title">{currentExp.title}</h3>
                  </div>
                  <div className="overlay-price-tag">
                    <span className="price-amount">
                      {currentExp.badgePrice}
                    </span>
                    <span className="price-unit">{currentExp.badgeUnit}</span>
                  </div>
                </div>
              </div>

              {/* Floating Review & Rating Card */}
              <div className="floating-stat-card card-rating-top animate-float-slow">
                <div className="stat-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="star-icon filled" />
                  ))}
                  <strong className="stat-score">4.9 / 5.0</strong>
                </div>
                <p className="stat-quote">
                  “The authentic aroma of Punjab in an unglazed clay kulhad.
                  Best chai in Mohali!”
                </p>
                <div className="stat-author">
                  <span className="author-avatar">GK</span>
                  <div className="author-details">
                    <span className="author-name">Gurinder K.</span>
                    <span className="author-city">
                      Chandigarh • Google Verified Review
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Feature Pill */}
              <div className="floating-stat-card card-craft-bottom animate-float-reverse">
                <div className="craft-icon-circle">
                  <Award size={20} className="text-terracotta" />
                </div>
                <div className="craft-text">
                  <span className="craft-title">1.2 Million+ Kulhads</span>
                  <span className="craft-desc">
                    Crafted with pure slow-boil tradition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live High-Impact Ticker Ribbon */}
      <div className="hero-ticker-ribbon">
        <div className="container ticker-ribbon-content">
          <div className="ticker-stat-block">
            <span className="stat-num">200+</span>
            <span className="stat-label">Café Outlets</span>
          </div>

          <div className="ticker-divider">♦</div>

          <div className="ticker-stat-block">
            <span className="stat-num">70+</span>
            <span className="stat-label">Cities Nationwide</span>
          </div>

          <div className="ticker-divider">♦</div>

          <div className="ticker-stat-block">
            <span className="stat-num">100%</span>
            <span className="stat-label">Pure Desi Ghee</span>
          </div>

          <div className="ticker-divider">♦</div>

          <div className="ticker-stat-block">
            <span className="stat-num">Zero</span>
            <span className="stat-label">Artificial Essences</span>
          </div>

          <div className="ticker-divider">♦</div>

          <div className="ticker-stat-block">
            <span className="stat-num">FOFO</span>
            <span className="stat-label">High-ROI Franchise</span>
          </div>

          <div className="ticker-divider">♦</div>

          <Link
            to="/franchise"
            className="ticker-cta-pill"
            data-cursor-text="Apply"
          >
            <span>Become a Franchisee</span>
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
