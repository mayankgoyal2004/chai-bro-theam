import React, { useEffect } from 'react';
import { X, Clock, Flame, Shield, Star, Check } from 'lucide-react';

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

  if (!activeItem) return null;

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
                {activeItem.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="clean-modal-details-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="product-veg-mark">
                <span className="veg-circle"></span>
              </span>
              <span className="text-xs font-semibold text-terracotta">{activeItem.servingType}</span>
              <div className="flex items-center gap-1 text-xs font-bold text-heading ml-auto">
                <Star size={13} className="fill-gurh-gold text-gurh-gold" />
                <span>{activeItem.rating}</span>
                <span className="text-muted font-normal">({activeItem.reviewsCount} reviews)</span>
              </div>
            </div>

            <h2 className="modal-item-title">{activeItem.name}</h2>
            <p className="modal-item-desc">{activeItem.description}</p>

            {/* Quick Metrics */}
            <div className="clean-metrics-bar">
              <div className="metric-box">
                <Clock size={15} className="text-terracotta mb-0.5" />
                <span className="text-xs text-muted">Prep Time</span>
                <strong className="text-xs text-heading">{activeItem.prepTime || '4 mins'}</strong>
              </div>
              <div className="metric-box">
                <Flame size={15} className="text-gurh mb-0.5" />
                <span className="text-xs text-muted">Calories</span>
                <strong className="text-xs text-heading">{activeItem.calories || '120 kcal'}</strong>
              </div>
              <div className="metric-box">
                <Shield size={15} className="text-cardamom mb-0.5" />
                <span className="text-xs text-muted">Quality</span>
                <strong className="text-xs text-heading">100% Desi</strong>
              </div>
            </div>

            {/* Ingredients */}
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

            {/* Price & Cafe Availability Banner */}
            <div className="modal-action-row">
              <div>
                <span className="text-xs text-muted">Cafe Price</span>
                <div className="text-2xl font-extrabold text-terracotta">
                  ₹{activeItem.price}
                </div>
              </div>

              <div className="ml-auto text-right">
                <span className="text-xs text-muted block">Served Fresh In Kulhad</span>
                <span className="text-xs font-bold text-cardamom">Available Across All Outlets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
