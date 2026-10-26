import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Star,
  Coffee,
  Store,
  Flame,
  ChevronRight,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { HeroParticles } from "./HeroParticles";

export const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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
      image: "/assets/hero/GIF_1.gif",
      alt: "Artisanal Gurh Laachi Kulhad Chai Pour Animation",
    },
    {
      id: "desi-churi",
      tabLabel: "Ghar Ki Desi Churi",
      icon: Flame,
      tag: "✨ Royal Punjabi Comfort",
      title: "Desi Ghee Churi & Bun Maska",
      image: "/assets/hero/GIF_2.gif",
      alt: "Punjabi Desi Ghee Churi and Bun Maska Delight Animation",
    },
    {
      id: "franchise-fofo",
      tabLabel: "Franchise Model",
      icon: Store,
      tag: "🏆 High ROI Opportunity",
      title: "Modern Café Network",
      image: "/assets/hero/GIF_3.gif",
      alt: "Gurh Laachi and Chai Bro Modern Café Outlets Animation",
    },
  ];

  const currentExp = experiences[activeTab];

  // Preload GIFs into cache so transitions are instant
  useEffect(() => {
    experiences.forEach((exp) => {
      const img = new Image();
      img.src = exp.image;
    });
  }, []);

  // Auto-switch between experiences every 4.5 seconds with pause on hover
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % experiences.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, activeTab, experiences.length]);

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
          {/* Left Column: Headline, CTAs & Trust Badges */}
          <div className="hero-content-col">
            {/* Top Heritage Pill with Pulse Indicator */}
            <div className="hero-badge-pill">
              <span className="badge-live-pulse" aria-hidden="true"></span>
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

            {/* Permanent Action Buttons */}
            <div className="hero-actions-row">
              <Link to="/menu" className="btn-hero-primary">
                <span>Explore Full Menu</span>
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

          {/* Right Column: Visual Showcase Frame with GIF & Switcher */}
          <div
            className={`hero-visual-col ${isHovered ? "is-hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Ambient Backlight Glow behind Showcase */}
            <div className="hero-card-ambient-aura" aria-hidden="true"></div>

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

              {/* Main GIF Image Frame */}
              <div className="showcase-image-wrapper">
                <img
                  key={currentExp.image}
                  src={currentExp.image}
                  alt={currentExp.alt}
                  className="showcase-img"
                />

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
                  aria-label="Add to favorites"
                >
                  <Heart
                    size={16}
                    className={liked ? "fill-terracotta text-terracotta" : ""}
                  />
                </button>
              </div>

              {/* Floating Review Badge */}
              <div className="hero-floating-testimonial">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="star-filled" />
                  ))}
                  <strong className="score-text">4.9 / 5.0</strong>
                </div>
                <p className="testimonial-quote">
                  “Authentic Punjabi chai in real kulhads. Unmatched taste!”
                </p>
                <div className="testimonial-user">
                  <div className="user-avatar">GK</div>
                  <span className="user-name">
                    Gurinder K. • Verified Review
                  </span>
                </div>
              </div>
            </div>

            {/* Compact Specialty Selector Tabs with Auto-Switching */}
            <div
              className="hero-tabs-bar hero-tabs-bar-bottom"
              role="tablist"
              aria-label="Hero Experience Switcher"
            >
              {experiences.map((exp, idx) => {
                const TabIcon = exp.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={exp.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(idx)}
                    className={`hero-pill-tab ${isActive ? "active" : ""}`}
                  >
                    <TabIcon size={13} />
                    <span>{exp.tabLabel}</span>
                    {isActive && (
                      <span
                        key={`prog-${idx}`}
                        className={`tab-progress-indicator ${isHovered ? "paused" : ""}`}
                      />
                    )}
                  </button>
                );
              })}
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
