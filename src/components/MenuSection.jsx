import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { Search, Flame, Coffee, UtensilsCrossed, Sparkles, Cookie, Eye, Star, Info, Store } from 'lucide-react';

export const MenuSection = ({ setActiveItemModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  const renderCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame size={17} />;
      case 'Coffee': return <Coffee size={17} />;
      case 'UtensilsCrossed': return <UtensilsCrossed size={17} />;
      case 'Sparkles': return <Sparkles size={17} />;
      case 'Cookie': return <Cookie size={17} />;
      default: return <Coffee size={17} />;
    }
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesVeg = !vegOnly || item.isVeg;
      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [activeCategory, searchQuery, vegOnly]);

  return (
    <section id="menu" className="section-padding menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-terracotta mb-2">
            HANDCRAFTED DELICACIES
          </span>
          <h1 className="section-title">
            Our Handcrafted <span className="text-terracotta font-serif italic">Café Menu</span>
          </h1>
          <p className="section-subtitle">
            From our slow-simmered Gurh Laachi Chai to hot Desi Ghee Churi and frothy cold shakes. Prepared fresh to order across all Chai Bro outlets.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="menu-filter-bar">
          {/* Category Tabs */}
          <div className="menu-cat-tabs">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`menu-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <span className="cat-icon">{renderCategoryIcon(cat.icon)}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search & Veg Toggle Row */}
          <div className="menu-search-row">
            <div className="menu-search-input-box">
              <Search size={17} className="text-muted" />
              <input
                type="text"
                placeholder="Search chai, churi, snacks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-field"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="clear-btn">✕</button>
              )}
            </div>

            <label className="veg-filter-switch">
              <input
                type="checkbox"
                checked={vegOnly}
                onChange={(e) => setVegOnly(e.target.checked)}
              />
              <span className="veg-custom-dot"></span>
              <span className="veg-text">Pure Veg Only</span>
            </label>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="menu-product-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-product-card">
              {/* Photo Header */}
              <div className="product-photo-wrap" onClick={() => setActiveItemModal(item)} style={{ cursor: 'pointer' }}>
                <img src={item.image} alt={item.name} className="product-photo" loading="lazy" />
                
                {/* Badge */}
                {item.badge && (
                  <span className="product-badge">{item.badge}</span>
                )}

                {/* Veg indicator */}
                <span className="product-veg-mark" title="100% Vegetarian">
                  <span className="veg-circle"></span>
                </span>

                {/* Quick View Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveItemModal(item); }}
                  className="product-quick-view"
                  title="View details"
                >
                  <Eye size={15} />
                  <span>View Details</span>
                </button>
              </div>

              {/* Content */}
              <div className="product-content">
                <div className="product-meta-row">
                  <span className="product-serving">{item.servingType}</span>
                  <div className="product-rating">
                    <Star size={13} className="fill-gurh-gold text-gurh-gold" />
                    <span>{item.rating}</span>
                    <small>({item.reviewsCount})</small>
                  </div>
                </div>

                <h3 className="product-title" onClick={() => setActiveItemModal(item)} style={{ cursor: 'pointer' }}>
                  {item.name}
                </h3>
                <p className="product-desc">{item.description}</p>

                <div className="product-ingredients">
                  {item.ingredients.slice(0, 3).map((ing, i) => (
                    <span key={i} className="ing-chip">{ing}</span>
                  ))}
                  {item.ingredients.length > 3 && (
                    <span className="ing-chip font-semibold">+{item.ingredients.length - 3}</span>
                  )}
                </div>

                {/* Price & Action */}
                <div className="product-bottom-row">
                  <div className="product-price-box">
                    <span className="price-current">₹{item.price}</span>
                    {item.originalPrice && (
                      <span className="price-old">₹{item.originalPrice}</span>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveItemModal(item)}
                    className="product-add-btn"
                    title="Recipe & Nutrition details"
                  >
                    <Info size={14} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
