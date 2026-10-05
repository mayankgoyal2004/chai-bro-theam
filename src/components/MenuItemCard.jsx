import React, { useState } from 'react';

/**
 * Premium Bespoke Chai Bro Menu Card
 * Built with dynamic Excel sizing, live price switching, and 100% Pure Veg badge
 */
export const MenuItemCard = ({ item }) => {
  const variants = item.variants && item.variants.length > 0
    ? item.variants
    : [{ size: 'Regular', price: item.price || 0 }];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeVariant = variants[selectedIdx] || variants[0];

  return (
    <article className="chai-bites-card">
      {/* Visual Thumbnail */}
      <div className="chai-card-thumb-wrap">
        <span className="chai-pure-veg-badge" title="100% Pure Vegetarian">
          <span className="veg-inner-dot"></span>
        </span>
        <img
          src={item.image}
          alt={item.name}
          className="chai-card-food-img"
          loading="lazy"
        />
      </div>

      {/* Card Info */}
      <div className="chai-card-info">
        <div className="chai-card-top-info">
          <span className="chai-category-tag">{item.categoryLabel || item.category}</span>
          <h3 className="chai-item-heading">{item.name}</h3>
        </div>

        {/* Size Selection */}
        {variants.length > 1 ? (
          <div className="chai-size-selector-wrap">
            <div className="chai-size-pills-row">
              {variants.map((v, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`chai-size-pill ${selectedIdx === idx ? 'active' : ''}`}
                >
                  <span className="size-lbl">{v.size}</span>
                  <span className="size-prc">₹{v.price}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="chai-single-portion-tag">
            <span>Portion: <strong>{variants[0]?.size || 'Regular'}</strong></span>
          </div>
        )}

        {/* Card Footer: Price & Tag */}
        <div className="chai-card-footer-row">
          <div className="chai-price-group">
            <span className="chai-price-caption">
              {variants.length > 1 ? `${activeVariant.size} Price` : 'Price'}
            </span>
            <div className="chai-price-num">
              <span className="currency">₹</span>
              <span className="amount">{activeVariant.price}</span>
            </div>
          </div>

          <span className="chai-yaari-badge">Har Sip Mein Yaari</span>
        </div>
      </div>
    </article>
  );
};
