import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, MapPin, ArrowRight } from 'lucide-react';

export const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 'storefront',
      category: 'storefront',
      title: "Chai Bro's Official Café Front",
      subtitle: "Booth No. 80, Sector 89, Mohali",
      image: '/assets/chaibros/original-front.webp',
      badge: 'Official Mohali Outlet'
    },
    {
      id: 'hero-banner',
      category: 'storefront',
      title: 'Night View & Outdoor Awning',
      subtitle: 'Red & White Awning in Sector 89',
      image: '/assets/chaibros/original-night-1.webp',
      badge: 'Evening Vibe'
    },
    {
      id: 'chai-kulhad',
      category: 'menu',
      title: 'Freshly Brewed Adrak & Elaichi Chai',
      subtitle: 'Served in porous earthen mitti kulhad',
      image: '/assets/menu/chai.webp',
      badge: 'Fresh Brew'
    },
    {
      id: 'churi-special',
      category: 'menu',
      title: 'Special Desi Ghee Churi',
      subtitle: 'Meet your chai’s sweetest companion',
      image: '/assets/menu/churi.webp',
      badge: 'Signature Dish'
    },
    {
      id: 'sandwiches-art',
      category: 'menu',
      title: 'Paneer Special & Veggie Grill Sandwiches',
      subtitle: 'Four-slice stacks with fresh fillings',
      image: '/assets/menu/sandwiches.webp',
      badge: 'Fresh Snacks'
    },
    {
      id: 'cold-coffee-art',
      category: 'menu',
      title: 'Classic & Biscoff Cold Coffee',
      subtitle: 'Creamy chilled coffee made for long conversations',
      image: '/assets/menu/cold-coffee.webp',
      badge: 'Chilled Drinks'
    },
    {
      id: 'pizza-special',
      category: 'menu',
      title: 'Double Paneer Makhni & Loaded Pizza',
      subtitle: 'Cheesy 7" & medium pizzas with fresh toppings',
      image: '/assets/menu/pizza.webp',
      badge: 'Pizza Feast'
    },
    {
      id: 'shakes-delight',
      category: 'menu',
      title: 'Oreo, Kitkat & Rasmalai Shakes',
      subtitle: 'Thick, chilled dessert-style shakes',
      image: '/assets/menu/shakes.webp',
      badge: 'Dessert Shakes'
    }
  ];

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="page-gallery" style={{ paddingTop: '100px' }}>
      {/* Page Hero */}
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

      {/* Main Storefront Feature */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="storefront-hero-card" style={{ background: '#FAF7F2', borderRadius: '24px', padding: '32px', border: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
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

            <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img 
                src="/assets/chaibros/original-front.webp" 
                alt="Chai Bro's Storefront Booth No. 80 Sector 89 Mohali"
                style={{ width: '100%', height: '360px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="gallery-filter-tabs mt-10 text-center" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
            <button
              onClick={() => setActiveFilter('all')}
              className={`filter-tab-pill ${activeFilter === 'all' ? 'active' : ''}`}
            >
              All Pictures
            </button>
            <button
              onClick={() => setActiveFilter('storefront')}
              className={`filter-tab-pill ${activeFilter === 'storefront' ? 'active' : ''}`}
            >
              Storefront & Awning
            </button>
            <button
              onClick={() => setActiveFilter('menu')}
              className={`filter-tab-pill ${activeFilter === 'menu' ? 'active' : ''}`}
            >
              Menu Items
            </button>
          </div>

          {/* Gallery Items Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {filtered.map(item => (
              <div key={item.id} style={{ background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.7)', color: '#FFF', fontSize: '0.72rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', backdropFilter: 'blur(4px)' }}>
                    {item.badge}
                  </span>
                </div>
                <div style={{ padding: '16px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '4px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
