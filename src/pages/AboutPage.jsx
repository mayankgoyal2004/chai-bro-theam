import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, Sparkles, Heart, Coffee, ShieldCheck, Leaf, ArrowRight, Store, HeartHandshake } from 'lucide-react';

export const AboutPage = () => {
  const comparisons = [
    {
      feature: 'Earthy Aroma (Sauhndi Khushboo)',
      kulhad: 'Infuses natural mineral clay notes with every hot sip',
      paperCup: 'Bland paper or synthetic plastic lining taste'
    },
    {
      feature: 'Environmental Impact',
      kulhad: '100% Biodegradable riverbed clay returning back to earth',
      paperCup: 'Microplastics & non-recyclable polyethylene waste'
    },
    {
      feature: 'Temperature Regulation',
      kulhad: 'Porous clay walls maintain ideal drinking temperature longer',
      paperCup: 'Loses heat quickly, gets soggy and collapses'
    },
    {
      feature: 'Health & Digestion',
      kulhad: 'Natural alkaline minerals balance tea acidity',
      paperCup: 'Chemical leaching when exposed to boiling beverages'
    }
  ];

  return (
    <div className="page-about" style={{ paddingTop: '100px' }}>
      {/* Page Hero */}
      <section className="about-hero-section section-padding text-center" style={{ background: 'var(--gradient-warm-bg)' }}>
        <div className="container">
          <span className="badge-pill badge-terracotta mb-3">OUR ROOTS & VISION</span>
          <h1 className="section-title text-4xl md:text-5xl font-extrabold text-heading">
            From a Humble Booth to Your Daily Pause
          </h1>
          <p className="section-subtitle mt-4 text-base md:text-lg">
            We didn't just build a café; we curated a space for connection. Our journey began in Sector 89, Mohali, with a simple dream: to serve the perfect cup of chai and genuine comfort. Every recipe tells a story of tradition, innovation, and community.
          </p>
        </div>
      </section>

      {/* Origin Story Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="badge-pill badge-gurh mb-2">THE CHAI BRO'S STORY</span>
              <h2 className="text-3xl font-bold text-heading mb-4">
                Our Journey in Every Sip
              </h2>
              <p className="text-body text-sm leading-relaxed mb-4">
                We didn't just build a café; we curated a space for connection. Our journey began in Sector 89, Mohali, with a simple dream: to serve the perfect cup of chai and genuine comfort. Every recipe tells a story of tradition, innovation, and community.
              </p>
              <p className="text-body text-sm leading-relaxed mb-6">
                We stay grounded in the values of community and shared values, even as we grow. From our signature Desi Ghee Churi to our cozy neighborhood location, everything we do is a celebration of authentic flavors and location experience.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link to="/about" className="btn-primary">
                  <span>Meet the Founders</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img 
                src="/assets/chaibros/original-night-1.webp" 
                alt="Chai Bro's Official Storefront in Sector 89 Mohali" 
                style={{ width: '100%', height: '380px', objectFit: 'cover', objectPosition: 'top center', borderRadius: '24px', boxShadow: 'var(--shadow-md)' }}
              />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: '#FFFFFF', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-md)' }}>
                <strong className="block text-sm text-heading">Booth No. 80, Sector 89, Mohali</strong>
                <small className="text-xs text-muted">Captured moments of community gatherings and heritage tea brewing.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Craft Pillars */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill badge-terracotta mb-2">OUR HIGHLIGHTS</span>
            <h2 className="section-title">
              What Makes Chai Bro <span className="text-terracotta font-serif italic">Different</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div className="why-feature-card">
              <div className="why-icon-bubble">
                <Coffee className="text-terracotta" size={26} />
              </div>
              <h3 className="why-card-heading">Authentic Craft</h3>
              <p className="why-card-text">
                Slow-brewed with hand-selected, premium spices.
              </p>
            </div>

            <div className="why-feature-card">
              <div className="why-icon-bubble">
                <HeartHandshake className="text-gurh" size={26} />
              </div>
              <h3 className="why-card-heading">Community First</h3>
              <p className="why-card-text">
                A welcoming space for conversations, work, and laughter.
              </p>
            </div>

            <div className="why-feature-card">
              <div className="why-icon-bubble">
                <Leaf className="text-cardamom" size={26} />
              </div>
              <h3 className="why-card-heading">Quality Ingredients</h3>
              <p className="why-card-text">
                Locally sourced, fresh, and vegetarian, with no shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Kulhad vs Paper Cup */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header text-center">
            <span className="badge-pill badge-gurh mb-2">CLAY VS PAPER</span>
            <h2 className="section-title">
              Why We Refuse To Use <span className="text-terracotta font-serif italic">Paper Cups</span>
            </h2>
            <p className="section-subtitle">
              Drinking tea in an earthen vessel is not just a cultural aesthetic — it is a vastly superior sensory and ecological choice.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', padding: '16px 20px', background: 'var(--bg-secondary)', fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-heading)' }}>
              <span>Aspect</span>
              <span className="text-terracotta">Chai Bro Mitti Kulhad</span>
              <span className="text-muted">Ordinary Paper Cup</span>
            </div>

            {comparisons.map((row, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', padding: '16px 20px', borderTop: '1px solid var(--border-light)', fontSize: '0.84rem', alignItems: 'center' }}>
                <strong className="text-heading">{row.feature}</strong>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cardamom-green)', fontWeight: '500' }}>
                  <CheckCircle2 size={16} className="flex-shrink-0" />
                  <span>{row.kulhad}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#DC2626' }}>
                  <XCircle size={16} className="flex-shrink-0" />
                  <span>{row.paperCup}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding text-center" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <h2 className="section-title">
            Come Experience It Yourself
          </h2>
          <p className="section-subtitle mb-6">
            Find your nearest Chai Bro outlet or bring our authentic FOFO café model to your city.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/visit-us" className="btn-primary">
              <span>Visit Us</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/franchise" className="btn-secondary">
              <Store size={16} />
              <span>Franchise Information</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
