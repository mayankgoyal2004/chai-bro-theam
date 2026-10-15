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
    <div className="page-gallery" style={{ paddingTop: '100px' }}>
      {/* Page Hero matching https://chaibros.online/gallery/ */}
      <section className="section-padding text-center" style={{ background: 'var(--gradient-warm-bg)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <span className="badge-pill badge-terracotta mb-3">GALLERY</span>
          <h1 className="section-title text-4xl font-extrabold text-heading">
            A glimpse of <span className="text-terracotta font-serif italic">Chai Bro’s.</span>
          </h1>
          <p className="section-subtitle mt-3 max-w-2xl mx-auto">
            From the familiar awning to an evening chai stop, take a look around our Mohali café.
          </p>
        </div>
      </section>

      {/* Main Official Photos Section */}
      <section className="section-padding bg-white">
        <div className="container">
          {/* Flagship Notice Strip */}
          <div className="storefront-hero-card mb-10" style={{ background: '#FAF7F2', borderRadius: '24px', padding: '32px', border: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div>
              <span className="badge-pill badge-gurh mb-2">FLAGSHIP OUTLET</span>
              <h2 className="text-2xl font-bold text-heading mb-3">
                Booth No. 80, Sector 89, Mohali
              </h2>
              <p className="text-body text-sm leading-relaxed mb-4">
                Look for our signature red-and-white awning. Settle into outdoor seating or grab your favorite kulhad chai and Desi Ghee Churi on the go.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Chai%20Bro%27s%2C%20Booth%20No.%2080%2C%20Sector%2089%2C%20Mohali%2C%20Punjab"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <MapPin size={16} />
                  <span>Get Directions ↗</span>
                </a>
                <Link to="/menu" className="btn-secondary">
                  <span>Explore Menu</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div 
              style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', background: '#140d0a', cursor: 'pointer', position: 'relative' }}
              onClick={() => setSelectedPhoto(galleryItems[1])}
            >
              <img 
                src="/assets/chaibros/original-night-1.webp" 
                alt="Chai Bro's Storefront Booth No. 80 Sector 89 Mohali"
                style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center 20%' }}
              />
              <span style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(23,7,4,0.85)', color: '#FFF', fontSize: '0.75rem', fontWeight: '700', padding: '6px 14px', borderRadius: '9999px', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)' }}>
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
