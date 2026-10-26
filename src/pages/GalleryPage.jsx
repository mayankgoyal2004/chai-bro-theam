import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sun, Moon, Maximize2, X, Sparkles } from 'lucide-react';

export const GalleryPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 'storefront-day',
      badge: 'Daytime Café',
      title: "The café · Sector 89, Mohali",
      subtitle: "Booth No. 80, Sector 89, Mohali",
      description: "Our signature red-and-white awning, cozy outdoor seating, and the daytime neighborhood vibe.",
      image: '/assets/chaibros/original-front.webp',
      alt: "The café · Sector 89, Mohali",
      icon: Sun,
    },
    {
      id: 'storefront-night',
      badge: 'Evening Vibe',
      title: "Chai Bro’s after sunset",
      subtitle: "Sector 89 • Evening Hangout",
      description: "Warm glowing lights, steaming terracotta cups of authentic chai, and evening conversations under the open sky.",
      image: '/assets/chaibros/original-night-1.webp',
      alt: "Chai Bro’s after sunset",
      icon: Moon,
    },
  ];

  return (
    <div className="page-gallery">
      {/* Page Hero */}
      <section className="gallery-hero-strip text-center">
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-pill badge-terracotta gallery-hero-badge mb-3">GALLERY</span>
          <h1 className="section-title gallery-hero-title">
            A glimpse of <span className="text-terracotta font-serif italic">Chai Bro’s.</span>
          </h1>
          <p className="section-subtitle gallery-hero-subtitle">
            From the familiar awning to an evening chai stop, take a look around our Mohali café.
          </p>
        </div>
      </section>

      {/* Main Official Photos Section */}
      <section className="gallery-content-section bg-white">
        <div className="container" style={{ maxWidth: '1100px' }}>
          {/* Flagship Notice Strip */}
          <div className="storefront-hero-card mb-10">
            <div className="storefront-hero-info">
              <span className="badge-pill badge-gurh mb-2 inline-block self-start">FLAGSHIP OUTLET</span>
              <h2 className="storefront-hero-title">
                Booth No. 80, Sector 89, Mohali
              </h2>
              <p className="storefront-hero-desc">
                Look for our signature red-and-white awning. Settle into outdoor seating or grab your favorite kulhad chai and Desi Ghee Churi on the go.
              </p>
              <div className="storefront-hero-actions">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Chai%20Bro%27s%2C%20Booth%20No.%2080%2C%20Sector%2089%2C%20Mohali%2C%20Punjab"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary storefront-action-btn"
                >
                  <MapPin size={16} />
                  <span>Get Directions ↗</span>
                </a>
                <Link to="/menu" className="btn-secondary storefront-action-btn">
                  <span>Explore Menu</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div 
              className="storefront-hero-media"
              onClick={() => setSelectedPhoto(galleryItems[1])}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedPhoto(galleryItems[1]);
                }
              }}
            >
              <img 
                src="/assets/chaibros/original-night-1.webp" 
                alt="Chai Bro's Storefront Booth No. 80 Sector 89 Mohali"
                className="storefront-hero-img"
              />
              <span className="storefront-enlarge-badge">
                Click to Enlarge
              </span>
            </div>
          </div>

          {/* Official 2-Column Gallery Grid */}
          <div className="gallery-grid-two">
            {galleryItems.map(item => {
              const ItemIcon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className="gallery-showcase-card"
                  onClick={() => setSelectedPhoto(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedPhoto(item);
                    }
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="gallery-showcase-img"
                    loading="lazy"
                  />

                  {/* Top Badge */}
                  <div className="gallery-badge-top">
                    <ItemIcon size={14} className="text-gurh" />
                    <span>{item.badge}</span>
                  </div>

                  {/* Enlarge Button */}
                  <button
                    type="button"
                    className="gallery-enlarge-btn"
                    title="Enlarge Photo"
                    aria-label={`Enlarge ${item.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPhoto(item);
                    }}
                  >
                    <Maximize2 size={16} />
                  </button>

                  {/* Bottom Overlay */}
                  <div className="gallery-showcase-overlay">
                    <span className="gallery-showcase-loc">
                      <MapPin size={13} />
                      <span>{item.subtitle}</span>
                    </span>
                    <h3 className="gallery-showcase-title">{item.title}</h3>
                    <p className="gallery-showcase-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo"
            >
              <X size={20} />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.alt}
              className="gallery-modal-img"
            />
            <div className="gallery-modal-caption">
              <div>
                <h4 className="text-white font-bold text-base mb-1">
                  {selectedPhoto.title}
                </h4>
                <p className="text-gray-300 text-xs m-0">
                  {selectedPhoto.subtitle}
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chai%20Bro%27s%2C%20Booth%20No.%2080%2C%20Sector%2089%2C%20Mohali%2C%20Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-4"
              >
                <span>Get Directions ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
