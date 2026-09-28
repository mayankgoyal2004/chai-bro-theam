import React, { useState } from 'react';
import { CITIES, OUTLETS } from '../data/locationsData';
import { MapPin, Clock, Phone, Navigation, Star, Store } from 'lucide-react';

export const StoreLocator = () => {
  const [selectedCity, setSelectedCity] = useState('All Cities');

  const filteredOutlets = selectedCity === 'All Cities'
    ? OUTLETS
    : OUTLETS.filter(o => o.region === selectedCity);

  return (
    <section id="outlets" className="section-padding outlets-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-terracotta mb-2">
            CITY HALL OF FAME
          </span>
          <h1 className="section-title">
            Our Café <span className="text-terracotta font-serif italic">Locations</span>
          </h1>
          <p className="section-subtitle">
            Born in Punjab and expanding across 200+ outlets in 70+ cities. Find your nearest Chai Bro hangout below.
          </p>
        </div>

        {/* City Filter Strip */}
        <div className="city-filter-row">
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`city-pill-btn ${selectedCity === city ? 'active' : ''}`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Outlets Grid */}
        <div className="outlets-cards-grid">
          {filteredOutlets.map((outlet) => (
            <div key={outlet.id} className="clean-outlet-card">
              <div className="outlet-img-wrap">
                <img src={outlet.image} alt={outlet.name} className="outlet-img" loading="lazy" />
                <span className="outlet-badge-pill">
                  <Store size={12} className="inline mr-1" />
                  {outlet.type}
                </span>
                <span className="outlet-rating-pill">
                  <Star size={11} className="fill-gurh-gold text-gurh-gold inline mr-1" />
                  {outlet.rating} ({outlet.reviews})
                </span>
              </div>

              <div className="outlet-card-content">
                <h3 className="outlet-card-title">{outlet.name}</h3>

                <div className="outlet-info-line">
                  <MapPin size={16} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-body leading-relaxed">{outlet.address}</p>
                    <span className="text-xs text-terracotta font-medium">{outlet.landmark}</span>
                  </div>
                </div>

                <div className="outlet-info-line">
                  <Clock size={16} className="text-cardamom flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-heading font-medium">{outlet.timing}</span>
                </div>

                <div className="outlet-info-line">
                  <Phone size={16} className="text-muted flex-shrink-0 mt-0.5" />
                  <a href={`tel:${outlet.phone}`} className="text-xs text-body hover:text-terracotta font-medium">
                    {outlet.phone}
                  </a>
                </div>

                <div className="outlet-features-list">
                  {outlet.features.map((feat, idx) => (
                    <span key={idx} className="outlet-feature-chip">{feat}</span>
                  ))}
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outlet.name + ' ' + outlet.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center text-xs py-2 mt-4"
                >
                  <Navigation size={13} className="text-terracotta" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
