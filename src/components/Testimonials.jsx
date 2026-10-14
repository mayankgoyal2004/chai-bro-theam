import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Harpreet Singh',
      comment: 'Came in for a quick chai after work and ended up staying much longer. The chai was comforting, the snacks were fresh, and the place felt really relaxed.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Amandeep Kaur',
      comment: 'We randomly stopped here while meeting friends and honestly loved the experience. Good chai, tasty food and a nice place to sit and talk without rushing.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Rahul Sharma',
      comment: 'I visited with a couple of friends on a busy evening. The staff was friendly, the food arrived quickly, and the chai was exactly what we needed after a long day.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Simran Gill',
      comment: 'What started as a simple chai plan turned into an evening of food, conversations and laughs. I really liked the relaxed atmosphere and would happily come back.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
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
                  style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} 
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

