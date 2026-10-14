import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Harmanpreet Singh',
      comment: 'Came in for a quick chai after work and ended up staying much longer. The chai was comforting, the snacks were fresh, and the place felt really relaxed.',
      avatar: '/assets/reviews/harmanpreet-singh.png'
    },
    {
      name: 'Amanpreet Kaur',
      comment: 'We randomly stopped here while meeting friends and honestly loved the experience. Good chai, tasty food and a nice place to sit and talk without rushing.',
      avatar: '/assets/reviews/amanpreet-kaur.png'
    },
    {
      name: 'Rahul Sharma',
      comment: 'I visited with a couple of friends on a busy evening. The staff was friendly, the food arrived quickly, and the chai was exactly what we needed after a long day.',
      avatar: '/assets/reviews/rahul-sharma.png'
    },
    {
      name: 'Simran Gill',
      comment: 'What started as a simple chai plan turned into an evening of food, conversations and laughs. I really liked the relaxed atmosphere and would happily come back.',
      avatar: '/assets/reviews/simran-gill.png'
    }
  ];

  return (
    <section id="reviews" className="section-padding reviews-section" style={{ background: 'var(--bg-primary)', paddingTop: '60px' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-10">
          <span className="badge-pill badge-gurh mb-2">
            OUR HAPPY CUSTOMERS
          </span>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-heading">
            Loved By Our <span className="text-terracotta font-serif italic">Chai Family</span>
          </h2>
          <p className="section-subtitle mt-3 max-w-2xl mx-auto">
            Every visit has a little story — from quick chai breaks to conversations that last for hours.
          </p>
        </div>

        {/* 4 Customer Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              style={{
                background: 'var(--bg-white)',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    border: '2px solid rgba(214, 46, 10, 0.25)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }} 
                />
                <div>
                  <strong className="block text-sm text-heading font-bold">{rev.name}</strong>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#F59E0B" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-body text-xs leading-relaxed italic" style={{ color: 'var(--text-body)' }}>
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

