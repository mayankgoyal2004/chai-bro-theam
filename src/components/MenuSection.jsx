import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { MenuItemCard } from './MenuItemCard';
import { Search, X, CheckCircle2, Coffee, Sparkles } from 'lucide-react';

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Specific categories (excluding 'all')
  const specificCategories = useMemo(() => {
    return MENU_CATEGORIES.filter(c => c.id !== 'all');
  }, []);

  // Filtered categories and items
  const displayedSections = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return specificCategories.map((cat) => {
      if (activeCategory !== 'all' && activeCategory !== cat.id) {
        return null;
      }

      const items = MENU_ITEMS.filter((item) => {
        if (item.category !== cat.id) return false;
        if (!q) return true;
        return (
          item.name.toLowerCase().includes(q) ||
          (item.categoryLabel && item.categoryLabel.toLowerCase().includes(q))
        );
      });

      if (items.length === 0) return null;

      return {
        ...cat,
        items
      };
    }).filter(Boolean);
  }, [activeCategory, searchQuery, specificCategories]);

  const totalFilteredCount = useMemo(() => {
    return displayedSections.reduce((sum, sec) => sum + sec.items.length, 0);
  }, [displayedSections]);

  return (
    <section id="menu" className="chai-menu-section-wrap">
      <div className="container">
        {/* Hero Header */}
        <div className="chai-menu-hero-block text-center">
          <div className="chai-hero-pill-badge">
            <CheckCircle2 size={13} className="inline mr-1 text-cardamom" />
            100% PURE VEGETARIAN • HAR SIP MEIN YAARI
          </div>
          <h1 className="chai-hero-main-title">
            Our Handcrafted <span className="chai-serif-italic">Café Delicacies</span>
          </h1>
          <p className="chai-hero-subtext">
            Authentic slow-simmered Kulhad Chai, Ghar Ki Desi Ghee Churi, fresh roasts, stone-baked pizzas, burgers & shakes.
          </p>

          {/* Integrated Floating Search Bar */}
          <div className="chai-hero-search-wrapper">
            <div className="chai-search-pill-box">
              <Search size={18} className="chai-search-svg" />
              <input
                type="text"
                placeholder="Search flavours (e.g. Adrak Chai, Churi, Paneer Pizza, Burger)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="chai-search-input-field"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="chai-clear-btn"
                  title="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="chai-search-stats-row">
              <span className="chai-veg-assurance">
                <span className="veg-mini-box"><span className="veg-mini-circle"></span></span>
                100% Pure Veg Menu
              </span>
              <span className="chai-count-text">
                Showing <strong>{totalFilteredCount}</strong> delicacies
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs Bar */}
        <div className="chai-categories-bar-wrapper">
          <div className="chai-categories-scroll-track">
            {MENU_CATEGORIES.map((cat) => {
              const count = cat.id === 'all'
                ? MENU_ITEMS.length
                : MENU_ITEMS.filter(i => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`chai-cat-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.image && (
                    <img src={cat.image} alt="" className="chai-btn-thumb-img" />
                  )}
                  <span className="chai-btn-cat-name">{cat.label}</span>
                  <span className="chai-btn-count-tag">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Rendered Category Sections */}
        {displayedSections.length > 0 ? (
          <div className="chai-sections-container">
            {displayedSections.map((section) => (
              <div
                key={section.id}
                id={`cat-${section.id}`}
                className="chai-category-section-block"
              >
                {/* Category Header */}
                <div className="chai-cat-header-strip">
                  <div className="chai-cat-header-left">
                    <div className="chai-cat-icon-title-row">
                      <img src={section.image} alt="" className="chai-header-category-icon" />
                      <h2 className="chai-cat-title-text">{section.label}</h2>
                    </div>
                    <p className="chai-cat-subtitle-text">{section.subtitle}</p>
                  </div>
                  <span className="chai-cat-choices-badge">
                    <Sparkles size={11} className="inline mr-1 text-terracotta" />
                    {section.items.length} {section.items.length === 1 ? 'choice' : 'choices'}
                  </span>
                </div>

                {/* 2-Column Responsive Grid */}
                <div className="chai-items-cards-grid">
                  {section.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="chai-no-results-state">
            <Coffee size={44} className="chai-no-results-icon" />
            <h3>No delicacies found</h3>
            <p>We couldn't find any items matching "{searchQuery}". Try a different keyword or reset filters.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="btn-primary"
            >
              View All Items
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
