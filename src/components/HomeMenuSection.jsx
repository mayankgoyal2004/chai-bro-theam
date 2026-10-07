import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, 
  Utensils, 
  Pizza, 
  Beef, 
  Sandwich, 
  Sparkles,
  Flame,
  MapPin, 
  ArrowRight
} from 'lucide-react';

export const HomeMenuSection = () => {
  const categories = [
    { id: 'all', label: 'All Favourites', icon: Flame },
    { id: 'chai', label: 'Kulhad Chai', icon: Coffee },
    { id: 'cold-coffee', label: 'Cold Coffee', icon: Coffee },
    { id: 'shakes', label: 'Shakes', icon: Coffee },
    { id: 'churi', label: 'Desi Ghee Churi', icon: Sparkles },
    { id: 'burgers', label: 'Burgers', icon: Beef },
    { id: 'pizza', label: 'Pizzas', icon: Pizza },
    { id: 'sandwiches', label: 'Sandwiches', icon: Sandwich },
    { id: 'maggie', label: 'Maggie & Snacks', icon: Utensils },
  ];

  return (
    <section className="home-menu-section">
      {/* Background Left Doodle SVG */}
      <svg className="home-menu-bg-doodle-left" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 90C40 90 20 140 40 220C55 280 120 280 135 220C155 140 135 90 135 90H40Z" stroke="#D62E0A" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M40 110H135" stroke="#D62E0A" strokeWidth="2" strokeDasharray="4 4"/>
        <path d="M50 60C70 40 60 20 85 10" stroke="#D62E0A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M90 65C110 45 100 25 125 15" stroke="#D62E0A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 160C10 150 5 180 25 190C35 195 40 180 30 160Z" fill="#D62E0A" fillOpacity="0.1" stroke="#D62E0A" strokeWidth="1.5"/>
        <path d="M145 150C165 140 170 170 150 180C140 185 135 170 145 150Z" fill="#D62E0A" fillOpacity="0.1" stroke="#D62E0A" strokeWidth="1.5"/>
      </svg>

      {/* Background Right Doodle SVG */}
      <svg className="home-menu-bg-doodle-right" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 70L65 250C68 270 115 270 118 250L133 70H50Z" stroke="#D62E0A" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M40 70H143" stroke="#D62E0A" strokeWidth="3" strokeLinecap="round"/>
        <path d="M100 70L130 10" stroke="#D62E0A" strokeWidth="3" strokeLinecap="round"/>
        <path d="M110 70L140 10" stroke="#D62E0A" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="80" cy="140" r="10" stroke="#D62E0A" strokeWidth="1.5" strokeDasharray="3 3"/>
        <circle cx="105" cy="180" r="14" stroke="#D62E0A" strokeWidth="1.5" strokeDasharray="3 3"/>
        <path d="M150 110C170 100 175 130 155 140Z" fill="#D62E0A" fillOpacity="0.1" stroke="#D62E0A" strokeWidth="1.5"/>
      </svg>

      <div className="container relative z-10 text-center">
        {/* Top Badge */}
        <div>
          <span className="menu-badge-pill">OUR MENU</span>
        </div>

        {/* Section Title */}
        <h2 className="home-menu-title">
          Explore The Full <span className="home-menu-title-highlight">Chai Bro Menu</span>
        </h2>

        {/* Subtitle */}
        <p className="home-menu-subtitle">
          From our signature chai to mouth-watering snacks, pizzas, burgers, cold coffees and more — there's something for everyone.
        </p>

        {/* Action Buttons */}
        <div className="home-menu-cta-group">
          <Link to="/menu" className="home-menu-cta-primary">
            <span>View Full Menu</span>
            <ArrowRight size={17} />
          </Link>
          <Link to="/visit-us" className="home-menu-cta-secondary">
            <MapPin size={17} className="text-terracotta" />
            <span>Visit Us</span>
          </Link>
        </div>

        {/* Category Cards Row */}
        <div className="home-menu-categories-grid">
          {categories.map((cat) => {
            const IconComp = cat.icon;

            return (
              <Link
                key={cat.id}
                to={`/menu?category=${cat.id}`}
                className="menu-cat-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="menu-cat-card-icon">
                  <IconComp size={22} />
                </div>
                <span className="menu-cat-card-label">{cat.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
