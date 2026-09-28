import React from 'react';
import { Sparkles, Shield, HeartHandshake, Leaf, Award, Check } from 'lucide-react';

export const WhyChaiBro = () => {
  const pillars = [
    {
      id: 'mitti',
      icon: <Leaf className="text-terracotta" size={26} />,
      title: 'Unglazed Riverbed Kulhads',
      subtitle: 'Sondhi Khushboo & Natural Minerals',
      desc: 'Each kulhad is hand-turned by artisan potters using clean, raw riverbed clay. The porous terracotta naturally balances acidity and imparts that authentic earthy aroma that paper or plastic cups can never replicate.',
      points: ['100% Eco-friendly & single use', 'Zero chemical coatings', 'Naturally retains warmth']
    },
    {
      id: 'spices',
      icon: <Sparkles className="text-gurh" size={26} />,
      title: 'Real Spices, No Extracts',
      subtitle: 'Hand-Crushed Potli Masalas',
      desc: 'We never use instant tea powders or synthetic flavor essences. Real Idukki cardamom, fresh crushed ginger, and pure jaggery (gurh) slow-dum brewed fresh throughout the day.',
      points: ['Kadak Adrak & Elaichi brews', 'Pure Gurh & Kashmiri Kesar', 'Zero artificial syrups']
    },
    {
      id: 'churi',
      icon: <Shield className="text-gurh" size={26} />,
      title: 'Special Desi Ghee Churi',
      subtitle: 'Our Mohali Signature Delicacy',
      desc: 'A traditional Punjabi comfort treat made with fresh rotis crumbled with pure desi ghee and shakkar/gurh. Served warm at just ₹60, it is our most loved, soul-soothing recipe.',
      points: ['100% Pure Desi Ghee', 'Traditional comforting recipe', 'Only ₹60 per serving']
    },
    {
      id: 'culture',
      icon: <HeartHandshake className="text-terracotta" size={26} />,
      title: 'Peace in Every Sip',
      subtitle: 'Comfort First & Friendly Vibe',
      desc: 'A café-style chai stop with a desi heart. From loaded pizzas, Takatak sandwiches, and thick shakes to your favorite corner table for chit-chat or late-night breaks.',
      points: ['Welcoming café ambiance', 'Fresh burgers & bites', 'Friendly 30+ team service']
    }
  ];

  return (
    <section id="why-us" className="section-padding why-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-terracotta mb-2">
            THE CHAI BRO STANDARD
          </span>
          <h2 className="section-title">
            Why Millions Love <span className="text-terracotta font-serif italic">Every Single Sip</span>
          </h2>
          <p className="section-subtitle">
            We spent years perfecting our slow-dum technique, spice potli blends, and earthen kiln temperatures so that every cup feels like home.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="why-cards-grid">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="why-feature-card">
              <div className="why-icon-bubble">
                {pillar.icon}
              </div>
              <span className="why-sub-tag">{pillar.subtitle}</span>
              <h3 className="why-card-heading">{pillar.title}</h3>
              <p className="why-card-text">{pillar.desc}</p>

              <div className="why-check-list">
                {pillar.points.map((pt, idx) => (
                  <div key={idx} className="check-line">
                    <span className="check-bullet"><Check size={11} /></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
