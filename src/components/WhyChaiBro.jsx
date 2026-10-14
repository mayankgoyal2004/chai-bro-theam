import React from 'react';
import { Sparkles, Shield, HeartHandshake, Leaf, Award, Check } from 'lucide-react';

export const WhyChaiBro = () => {
  const pillars = [
    {
      id: 'mitti',
      icon: <Leaf className="text-terracotta" size={26} />,
      title: 'AUTHENTIC INDIAN CHAI',
      subtitle: 'Chai Made the Desi Way',
      desc: 'Our chai is brewed with carefully selected tea leaves, aromatic spices, and fresh ingredients. Every cup is prepared to deliver the rich, comforting taste of traditional Indian chai.',
      points: ['Freshly brewed every time', 'Authentic Indian flavours', 'Rich & aromatic taste']
    },
    {
      id: 'spices',
      icon: <Sparkles className="text-gurh" size={26} />,
      title: 'FRESH SPICES & INGREDIENTS',
      subtitle: 'Flavour You Can Taste',
      desc: 'From fragrant cardamom to warming ginger, we use quality ingredients to create deliciously refreshing beverages. No shortcuts, just bold flavours in every sip.',
      points: ['Freshly selected ingredients', 'Authentic spice blends', 'Made fresh to order']
    },
    {
      id: 'churi',
      icon: <Shield className="text-gurh" size={26} />,
      title: 'DESI BITES & COMFORT FOOD',
      subtitle: 'Something Delicious for Everyone',
      desc: 'Pair your favourite chai with our range of satisfying desi bites and café favourites. From quick snacks to comforting treats, there’s always something delicious waiting for you.',
      points: ['Freshly prepared food', 'Perfect chai pairings', 'Delicious everyday treats']
    },
    {
      id: 'culture',
      icon: <HeartHandshake className="text-terracotta" size={26} />,
      title: 'A PLACE TO CONNECT',
      subtitle: 'Good Chai. Good Food. Good Vibes.',
      desc: 'Whether you’re catching up with friends, taking a break, or enjoying some me-time, our café is made for relaxed conversations, tasty food, and memorable moments.',
      points: ['Warm café atmosphere', 'Friendly service', 'Perfect for every occasion']
    }
  ];

  return (
    <section id="why-us" className="section-padding why-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-terracotta mb-2">
            THE CHAI BRO EXPERIENCE
          </span>
          <h2 className="section-title">
            Why Every Cup Feels <span className="text-terracotta font-serif italic">Like Home</span>
          </h2>
          <p className="section-subtitle">
            We bring together authentic Indian flavours, freshly prepared ingredients, and a warm café experience to make every visit worth remembering.
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
