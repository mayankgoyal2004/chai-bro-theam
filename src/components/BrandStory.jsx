import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, UtensilsCrossed, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const BrandStory = () => {
  const houseSpecials = [
    {
      title: 'Authentic Kulhad Chai',
      subtitle: 'More than chai, every kulhad carries warmth, flavour and a piece of Punjab.',
      desc: 'Slow-simmered whole milk infused with hand-crushed green cardamom from Kerala, high-altitude ginger, and organic jaggery (Gurh). Poured hot into single-use unglazed terracotta cups.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80',
      badge: 'Heritage Recipe',
      link: '/menu'
    },
    {
      title: 'Desi Ghee Churi & Bites',
      subtitle: 'Our churi begins with fresh tawa roti & desi ghee, bringing familiar taste to every bite.',
      desc: 'Inspired by recipes passed down through generations. Whole wheat rotis crushed by hand and tossed in bubbling desi ghee, crushed jaggery, and roasted dry fruits.',
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80',
      badge: '100% Desi Ghee',
      link: '/menu'
    },
    {
      title: 'Modern Café Fusion',
      subtitle: 'Traditional favourites meet modern café culture with contemporary offerings.',
      desc: 'From frothy Kulhad Cold Coffees and creamy Rose Rabri Shakes to gourmet toasties and Maggi platters — crafted for today’s coffee and tea lovers.',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80',
      badge: 'Modern Twist',
      link: '/menu'
    }
  ];

  return (
    <section id="story" className="section-padding story-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-terracotta mb-2">
            A TASTE THAT FEELS LIKE HOME
          </span>
          <h2 className="section-title">
            Rooted in Punjab. <span className="text-terracotta font-serif italic">Built for the future.</span>
          </h2>
          <p className="section-subtitle">
            Chai Bro brings together the warmth of Indian baithaks, authentic desi flavours, 
            and the energetic hospitality of modern café culture under one welcoming roof.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="house-specials-grid">
          {houseSpecials.map((spec, idx) => (
            <div key={idx} className="special-card">
              <div className="special-card-img-box">
                <img src={spec.image} alt={spec.title} className="special-card-img" />
                <span className="special-badge">{spec.badge}</span>
              </div>
              <div className="special-card-body">
                <h3 className="special-title">{spec.title}</h3>
                <p className="special-subtitle">{spec.subtitle}</p>
                <p className="special-desc">{spec.desc}</p>
                <Link to={spec.link} className="special-link">
                  <span>Explore items</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Story Quote & Experience Banner */}
        <div className="story-experience-banner">
          <div className="banner-text-left">
            <span className="badge-pill badge-gurh text-xs mb-3">THE CHAI BRO COMMITMENT</span>
            <h3 className="banner-quote-title">
              "No one living away from home should have to miss the comfort of ghar wali chai & churi."
            </h3>
            <p className="banner-quote-body">
              Born from market experience and tested culinary recipes, Chai Bro has grown into a beloved modern 
              café concept backed by standardized systems, hygiene protocols, and authentic taste in every single city.
            </p>
            <div className="banner-bullet-list">
              <div className="bullet-item">
                <CheckCircle2 size={16} className="text-cardamom" />
                <span>Zero artificial essence drops or preservatives</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={16} className="text-cardamom" />
                <span>Porous riverbed terracotta clay that balances acidity</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={16} className="text-cardamom" />
                <span>Standardized, farm-sourced spices supplied to all outlets</span>
              </div>
            </div>
          </div>

          <div className="banner-image-right">
            <img 
              src="/assets/chaibros/storefront-night.png" 
              alt="Chai Bro's Official Storefront at Night in Sector 89 Mohali" 
              className="banner-interior-img"
            />
            <div className="interior-caption">
              <strong>Chai Bro’s Flagship</strong>
              <small>Booth No. 80, Sector 89, Mohali, Punjab</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
