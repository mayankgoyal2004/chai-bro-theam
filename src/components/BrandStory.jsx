import React from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  UtensilsCrossed,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const BrandStory = () => {
  const houseSpecials = [
    {
      title: "Signature Kulhad Chai",
      subtitle: "Brewed slow, served hot—the ultimate comfort in every terracotta cup.",
      desc: "Hand-selected tea leaves simmered to perfection with farm-fresh milk, crushed whole spices, and organic sweetness. Served exclusively in breathable clay cups for that unmatched earthy aroma.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80",
      badge: "ARTISAN ROOTS",
      link: "/menu",
    },
    {
      title: "Royal Desi Ghee Treats",
      subtitle: "Wholesome goodness crafted with rich desi ghee and authentic recipes.",
      desc: "A nostalgic tribute to homemade flavors. Fresh rotis and wholesome ingredients hand-crushed and tossed in bubbling pure desi ghee, garnished with premium dry fruits and love.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80",
      badge: "100% TRADITIONAL",
      link: "/menu",
    },
    {
      title: "Gourmet Munchies & Shakes",
      subtitle: "Savory snacks, loaded platters, and thick shakes built for your hangouts.",
      desc: "From crispy wraps and cheesy crusts to ice-cold frothy coffees and rich chocolate shakes—curated specially to elevate your evening food sessions with friends.",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
      badge: "ALL-DAY CRAVING",
      link: "/menu",
    },
  ];

  return (
    <section id="story" className="section-padding story-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-terracotta mb-2">
            BREWED FOR THE SOUL
          </span>
          <h2 className="section-title">
            Where Heritage Meets <span className="text-terracotta font-serif italic">Modern Cravings.</span>
          </h2>
          <p className="section-subtitle">
            Experience the timeless warmth of traditional Punjabi hospitality blended seamlessly with the vibrant energy of a modern neighborhood café.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="house-specials-grid">
          {houseSpecials.map((spec, idx) => (
            <div key={idx} className="special-card">
              <div className="special-card-img-box">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="special-card-img"
                />
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
            <span className="badge-pill badge-gurh text-xs mb-3">
              THE CRAFT & PROMISE
            </span>
            <h3 className="banner-quote-title">
              "We aren't just serving tea and snacks; we are serving a warm reminder of home."
            </h3>
            <p className="banner-quote-body">
              Built from a passion for authentic street-style flavors and modern hygiene standards, Chai Bro's brings standardized recipes, exceptional ingredients, and unforgettable warmth to every cup we pour.
            </p>
            <div className="banner-bullet-list">
              <div className="bullet-item">
                <CheckCircle2 size={16} className="text-cardamom" />
                <span>100% natural ingredients with zero synthetic additives</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={16} className="text-cardamom" />
                <span>Authentic terracotta clay cups that elevate the saundhi aroma</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={16} className="text-cardamom" />
                <span>Dedicated local preparation ensuring farm-fresh taste every time</span>
              </div>
            </div>
          </div>

          <div className="banner-image-right">
            <img
              src="/assets/chaibros/original-night-1.webp"
              alt="Chai Bro's Official Storefront at Night in Sector 89 Mohali"
              className="banner-interior-img"
            />
            <div className="interior-caption">
              <strong>Chai Bro’s Flagship Hub</strong>
              <small>Booth No. 80, Sector 89, Mohali, Punjab</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
