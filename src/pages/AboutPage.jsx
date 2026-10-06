import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, Sparkles, Heart, Coffee, ShieldCheck, Leaf, ArrowRight, Store } from 'lucide-react';

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
          <span className="badge-pill badge-terracotta mb-3">PEACE IN EVERY SIP</span>
          <h1 className="section-title text-4xl md:text-5xl font-extrabold text-heading">
            Born in Mohali, Punjab. <br />
            <span className="text-terracotta font-serif italic">Crafted for everyday comfort.</span>
          </h1>
          <p className="section-subtitle mt-4 text-base md:text-lg">
            A simple idea: make every break feel a little better. Built around a familiar ritual—taking time out for a good cup of chai and something tasty on the side.
          </p>
        </div>
      </section>

      {/* Origin Story Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="badge-pill badge-gurh mb-2">OUR PHILOSOPHY</span>
              <h2 className="text-3xl font-bold text-heading mb-4">
                A café-style chai stop with a desi heart.
              </h2>
              <p className="text-body text-sm leading-relaxed mb-4">
                From our flagship outlet at <strong>Booth No. 80, Sector 89, Mohali, Punjab</strong>, Chai Bro’s is crafted for people who enjoy variety without losing the warmth of familiar flavours. Drop in for a cutting-style chai mood, stay for crisp fries, wraps, creamy pasta, hot pizzas, gourmet sandwiches, and our famous <strong>Special Desi Ghee Churi</strong>.
              </p>
              <p className="text-body text-sm leading-relaxed mb-6">
                Behind the counter and beyond is a dedicated team of over 30 passionate people handling preparation, service, and day-to-day hospitality so that every visit feels like coming home.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link to="/menu" className="btn-primary">
                  <span>Explore Menu</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/franchise" className="btn-secondary">
                  <Store size={16} />
                  <span>Become a Franchise Partner</span>
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img 
                src="/assets/chaibros/storefront-night.png" 
                alt="Chai Bro's Official Storefront in Sector 89 Mohali" 
                style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '24px', boxShadow: 'var(--shadow-md)' }}
              />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: '#FFFFFF', padding: '12px 20px', borderRadius: '14px', boxShadow: 'var(--shadow-md)' }}>
                <strong className="block text-sm text-heading">Booth No. 80, Sector 89, Mohali</strong>
                <small className="text-xs text-muted">Special Desi Ghee Churi & Kulhad Chai</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Craft Pillars */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill badge-terracotta mb-2">THE 4 PILLARS OF CRAFT</span>
            <h2 className="section-title">
              What Makes Chai Bro <span className="text-terracotta font-serif italic">Different</span>
            </h2>
            <p className="section-subtitle">
              We preserve centuries of slow-dum Indian tea traditions while meeting modern food safety and hygiene standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div className="why-feature-card">
              <div className="why-icon-bubble">
                <Leaf className="text-terracotta" size={26} />
              </div>
              <h3 className="why-card-heading">Natural Mitti Kulhad</h3>
              <p className="why-card-text">
                Unglazed riverbed clay shaped by traditional potters. Porous walls naturally balance acidity and infuse that unmistakable petrichor scent.
              </p>
            </div>

            <div className="why-feature-card">
              <div className="why-icon-bubble">
                <Sparkles className="text-gurh" size={26} />
              </div>
              <h3 className="why-card-heading">Hand-Pounded Potli</h3>
              <p className="why-card-text">
                Whole green cardamom pods from Idukki (Kerala) and winter ginger crushed fresh every morning. Zero artificial drops or syrups.
              </p>
            </div>

            <div className="why-feature-card">
              <div className="why-icon-bubble">
                <ShieldCheck className="text-cardamom" size={26} />
              </div>
              <h3 className="why-card-heading">100% Buffalo Milk</h3>
              <p className="why-card-text">
                Fresh whole milk double-boiled in heavy-bottom brass handis to create dense decoctions and velvety froth with every pour.
              </p>
            </div>

            <div className="why-feature-card">
              <div className="why-icon-bubble">
                <Heart className="text-terracotta" size={26} />
              </div>
              <h3 className="why-card-heading">Yaari & Community</h3>
              <p className="why-card-text">
                More than just a café — a sanctuary where friends connect over steaming tea, board games, and memories that last a lifetime.
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
            <Link to="/locations" className="btn-primary">
              <span>View Locations</span>
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
