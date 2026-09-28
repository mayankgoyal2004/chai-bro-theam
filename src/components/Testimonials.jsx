import React from 'react';
import { TESTIMONIALS } from '../data/reviewsData';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="reviews" className="section-padding reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-pill badge-terracotta mb-2">
            COMMUNITY & REVIEWS
          </span>
          <h2 className="section-title">
            Loved By Our <span className="text-terracotta font-serif italic">Customers</span>
          </h2>
          <p className="section-subtitle">
            From morning office rituals to late night baithaks with college friends — see what people say about Chai Bro across India.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-cards-grid">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="clean-review-card">
              <div className="review-card-head">
                <img src={review.avatar} alt={review.name} className="review-avatar-img" />
                <div className="review-user-meta">
                  <h4 className="user-title">{review.name}</h4>
                  <span className="user-sub">{review.role}</span>
                </div>
                <MessageSquareQuote size={22} className="text-terracotta opacity-40 ml-auto" />
              </div>

              {/* Rating */}
              <div className="review-rating-line">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gurh-gold text-gurh-gold" />
                ))}
                <span className="badge-pill badge-gurh text-xs ml-2 py-0.5 px-2">
                  {review.tag}
                </span>
              </div>

              <p className="review-quote-text">
                "{review.comment}"
              </p>

              <div className="review-foot-meta">
                <span className="verified-text">
                  <CheckCircle2 size={13} className="text-cardamom inline mr-1" />
                  {review.verifiedVisit}
                </span>
                <span className="review-date-text">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
