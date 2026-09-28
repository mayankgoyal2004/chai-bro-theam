import React, { useState } from 'react';
import { Camera, Heart } from 'lucide-react';

export const AmbianceGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      tag: 'vibe',
      title: 'Warm Earthy Seating & Modern Baithak',
      location: 'Flagship Phase 3B2, Mohali',
      likes: 640,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      tag: 'ritual',
      title: 'Hand-Boiled Brass Handi Chai',
      location: 'Live Counter Brewing',
      likes: 890,
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      tag: 'food',
      title: 'Fresh Desi Ghee Churi & Kulhad Chai',
      location: 'Sector 35, Chandigarh',
      likes: 720,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      tag: 'vibe',
      title: 'Late Night Study & Yaari Corner',
      location: 'DLF Cyber Hub, Gurugram',
      likes: 1240,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      tag: 'food',
      title: 'Classic Toasted Bun Maska with Butter',
      location: 'Connaught Place, New Delhi',
      likes: 850,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      tag: 'food',
      title: 'Frothy Kulhad Cold Coffee in Mitti Tumbler',
      location: 'Indiranagar 100ft, Bengaluru',
      likes: 980,
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filtered = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.tag === activeFilter);

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-terracotta mb-2">
            MOMENTS & EXPERIENCES
          </span>
          <h2 className="section-title">
            The Chai Bro <span className="text-terracotta font-serif italic">Vibe</span>
          </h2>
          <p className="section-subtitle">
            Warm terracotta walls, soulful acoustic playlists, the comforting aroma of cardamom and simmering jaggery — step inside any outlet and feel right at home.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filter-tabs">
          <button
            onClick={() => setActiveFilter('all')}
            className={`filter-tab-pill ${activeFilter === 'all' ? 'active' : ''}`}
          >
            All Moments
          </button>
          <button
            onClick={() => setActiveFilter('vibe')}
            className={`filter-tab-pill ${activeFilter === 'vibe' ? 'active' : ''}`}
          >
            Café Seating & Vibe
          </button>
          <button
            onClick={() => setActiveFilter('ritual')}
            className={`filter-tab-pill ${activeFilter === 'ritual' ? 'active' : ''}`}
          >
            The Kulhad Ritual
          </button>
          <button
            onClick={() => setActiveFilter('food')}
            className={`filter-tab-pill ${activeFilter === 'food' ? 'active' : ''}`}
          >
            Churi & Desi Bites
          </button>
        </div>

        {/* Photos Grid */}
        <div className="gallery-grid">
          {filtered.map((item) => (
            <div key={item.id} className="gallery-grid-card">
              <img src={item.image} alt={item.title} className="gallery-photo" loading="lazy" />
              <div className="gallery-photo-overlay">
                <div className="photo-info">
                  <span className="photo-loc">{item.location}</span>
                  <h4 className="photo-title">{item.title}</h4>
                </div>
                <div className="photo-likes">
                  <Heart size={14} className="fill-red-500 text-red-500 mr-1" />
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
