import React, { useState, useEffect, useMemo } from 'react';
import { X, Clock, Flame, Shield, Star, Check, Sparkles } from 'lucide-react';

export const ItemModal = ({ activeItem, onClose }) => {
  useEffect(() => {
    if (!activeItem) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem, onClose]);

  // Parse variants
  const parsedVariants = useMemo(() => {
    if (!activeItem) return [];
    if (!activeItem.variants || activeItem.variants.length === 0) {
      return [{ size: 'Regular', price: activeItem.price || 0 }];
    }
    return activeItem.variants.map((v) => {
      if (typeof v === 'string') {
        const parts = v.split('-');
        if (parts.length >= 2) {
          return {
            size: parts[0].trim(),
            price: parseInt(parts[1].trim(), 10) || 0
          };
        }
      }
      return { size: v.size || 'Regular', price: v.price || activeItem.price || 0 };
    });
  }, [activeItem]);

  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (activeItem && activeItem.selectedVariant) {
      const idx = parsedVariants.findIndex(v => v.size === activeItem.selectedVariant.size);
      if (idx !== -1) setSelectedIdx(idx);
      else setSelectedIdx(0);
    } else {
      setSelectedIdx(0);
    }
  }, [activeItem, parsedVariants]);

  if (!activeItem) return null;

  const currentVariant = parsedVariants[selectedIdx] || parsedVariants[0] || { size: 'Regular', price: activeItem.price || 0 };

  return (
    <div className="item-modal-backdrop" onClick={onClose}>
      <div className="clean-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="clean-modal-close"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="clean-modal-grid">
          {/* Photo */}
          <div className="clean-modal-photo-col">
            <img src={activeItem.image} alt={activeItem.name} className="modal-photo" />
            {activeItem.badge && (
              <span className="badge-pill badge-gurh modal-photo-badge">
                <Sparkles size={12} className="inline mr-1" />
                {activeItem.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="clean-modal-details-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="chai-veg-mark" title="100% Pure Vegetarian">
                <span className="chai-veg-dot"></span>
              </span>
              <span className="text-xs font-semibold text-terracotta">{activeItem.servingType || 'Authentic Preparation'}</span>
              <div className="flex items-center gap-1 text-xs font-bold text-heading ml-auto">
                <Star size={13} className="fill-gurh-gold text-gurh-gold" />
                <span>{activeItem.rating || '4.9'}</span>
                <span className="text-muted font-normal">({activeItem.reviewsCount || 250}+ reviews)</span>
              </div>
            </div>

            <h2 className="modal-item-title">{activeItem.name}</h2>
            <p className="modal-item-desc">{activeItem.description}</p>

            {/* Sizes / Variants Selector */}
            {parsedVariants.length > 1 && (
              <div className="modal-variants-section mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
                  Available Serving Sizes:
                </span>
                <div className="flex gap-2 flex-wrap">
                  {parsedVariants.map((v, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedIdx(i)}
                      className={`chai-variant-btn ${selectedIdx === i ? 'active' : ''}`}
                    >
                      <span className="variant-name">{v.size}</span>
                      <span className="variant-price">₹{v.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Metrics */}
            <div className="clean-metrics-bar">
              <div className="metric-box">
                <Clock size={15} className="text-terracotta mb-0.5" />
                <span className="text-xs text-muted">Prep Time</span>
                <strong className="text-xs text-heading">{activeItem.prepTime || '3-5 mins'}</strong>
              </div>
              <div className="metric-box">
                <Flame size={15} className="text-gurh mb-0.5" />
                <span className="text-xs text-muted">Calories</span>
                <strong className="text-xs text-heading">{activeItem.calories || '110 kcal'}</strong>
              </div>
              <div className="metric-box">
                <Shield size={15} className="text-cardamom mb-0.5" />
                <span className="text-xs text-muted">Authenticity</span>
                <strong className="text-xs text-heading">100% Desi Pure</strong>
              </div>
            </div>

            {/* Ingredients */}
            {activeItem.ingredients && activeItem.ingredients.length > 0 && (
              <div className="modal-ingredients-wrap">
                <h4 className="text-xs uppercase font-bold text-muted tracking-wider mb-2">
                  Ingredients & Sourcing
                </h4>
                <div className="ingredients-pill-list">
                  {activeItem.ingredients.map((ing, i) => (
                    <span key={i} className="clean-ing-pill">
                      <Check size={11} className="text-cardamom inline mr-1" />
                      <span>{ing}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Price & Cafe Availability Banner */}
            <div className="modal-action-row">
              <div>
                <span className="text-xs text-muted">
                  {parsedVariants.length > 1 ? `${currentVariant.size} Price` : 'Cafe Price'}
                </span>
                <div className="text-2xl font-extrabold text-terracotta">
                  ₹{currentVariant.price}
                </div>
              </div>

              <div className="ml-auto text-right">
                <span className="text-xs text-muted block">Served Fresh To Order</span>
                <span className="text-xs font-bold text-cardamom">Available Across All Outlets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

