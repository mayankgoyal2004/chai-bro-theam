import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, ArrowRight, Clock } from 'lucide-react';

export const VisitUsPage = () => {
  return (
    <div className="page-visit-us" style={{ paddingTop: '100px', background: 'var(--bg-primary)', minHeight: '100vh', position: 'relative' }}>
      
      {/* Background Decorative Art Elements */}
      <div style={{
        position: 'absolute',
        top: '60px',
        left: '20px',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <svg width="120" height="140" viewBox="0 0 100 120" fill="none" stroke="var(--primary)" strokeWidth="1.5">
          <path d="M25 40 h50 v60 a10 10 0 0 1 -10 10 h-30 a10 10 0 0 1 -10 -10 Z" />
          <path d="M20 40 h60 M30 20 Q35 30 30 40 M50 15 Q55 28 50 40 M70 20 Q75 30 70 40" />
        </svg>
      </div>

      <div style={{
        position: 'absolute',
        top: '70px',
        right: '20px',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="var(--secondary)" strokeWidth="1.5">
          <path d="M10 80 Q 40 10 90 20 Q 60 60 10 80 Z M30 50 Q 60 35 85 22" />
        </svg>
      </div>

      {/* Page Hero Header */}
      <section className="section-padding text-center" style={{ paddingBottom: '32px', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-pill badge-terracotta mb-3">
            VISIT US
          </span>

          <h1 className="section-title text-4xl md:text-5xl font-extrabold text-heading">
            Your next chai stop: <span className="text-terracotta font-serif italic">Mohali.</span>
          </h1>

          <p className="section-subtitle mt-3">
            Find the red-and-white awning, bring your favourite people, and make a little time for authentic Kulhad Chai & Desi Ghee Churi.
          </p>
        </div>
      </section>

      {/* Main Outlet Card Container */}
      <section style={{ padding: '0 20px 60px', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          {/* Main White Showcase Card */}
          <div style={{ 
            background: 'var(--bg-white)', 
            borderRadius: '24px', 
            boxShadow: 'var(--shadow-md)', 
            padding: '32px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center',
            border: '1px solid var(--border-subtle)'
          }}>
            
            {/* Left Column: Compact Storefront Image */}
            <div style={{ 
              position: 'relative', 
              borderRadius: '20px', 
              overflow: 'hidden',
              height: '300px',
              maxWidth: '320px',
              width: '100%',
              margin: '0 auto',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <img 
                src="/assets/chaibros/original-night-1.webp" 
                alt="Chai Bro's Booth No. 80 Sector 89 Mohali Storefront"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block' 
                }}
              />
            </div>

            {/* Right Column: Store Info & Action Buttons */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center' 
            }}>
              
              {/* Flagship Store Badge */}
              <span className="badge-pill badge-gurh mb-3 inline-block self-start">
                <MapPin size={13} className="inline mr-1 text-terracotta" /> FLAGSHIP STORE
              </span>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-heading mb-2 font-serif">
                Chai Bro’s, Sector 89, Mohali
              </h2>

              {/* Location Line */}
              <div className="flex items-center gap-2 text-terracotta text-sm font-bold mb-3">
                <MapPin size={16} />
                <span>Booth No. 80, Sector 89, Mohali, Punjab</span>
              </div>

              {/* Hours / Info Line */}
              <div className="flex items-center gap-2 text-muted text-xs font-semibold mb-4">
                <Clock size={14} className="text-secondary" />
                <span>Open Daily: 9:00 AM – 11:00 PM</span>
              </div>

              {/* Description */}
              <p className="text-body text-sm leading-relaxed mb-6">
                Planning a visit? Call or message our team for current opening hours, table availability, and direct delivery orders.
              </p>

              {/* Styled Action Buttons matching website format */}
              <div className="flex flex-col gap-3">
                
                {/* Button 1: Open Google Maps */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Chai%20Bro%27s%2C%20Booth%20No.%2080%2C%20Sector%2089%2C%20Mohali%2C%20Punjab"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary justify-center text-sm py-3 rounded-full"
                >
                  <Navigation size={17} />
                  <span>Open Google Maps</span>
                  <ExternalLink size={14} className="opacity-80" />
                </a>

                {/* Button 2: Call Us */}
                <a 
                  href="tel:+918700087687" 
                  className="btn-secondary justify-center text-sm py-3 rounded-full"
                >
                  <Phone size={17} className="text-terracotta" />
                  <span>Call Us: +91 87000 87687</span>
                </a>

                {/* Button 3: Chat on WhatsApp */}
                <a 
                  href="https://wa.me/918700087687?text=Hello%20Chai%20Bro%27s!%20I%20am%20planning%20to%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp justify-center text-sm py-3 rounded-full"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>

              </div>

            </div>

          </div>

          {/* Bottom Card: Ready to explore the menu before coming? */}
          <div style={{
            background: 'var(--bg-card-alt)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: '36px 28px',
            marginTop: '32px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            {/* Bottom Card Leaf Decorative Vector Art */}
            <div style={{ position: 'absolute', bottom: '-10px', left: '15px', opacity: 0.12, pointerEvents: 'none' }}>
              <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="var(--primary)" strokeWidth="1.5">
                <path d="M10 80 Q 40 10 90 20 Q 60 60 10 80 Z M30 50 Q 60 35 85 22" />
              </svg>
            </div>

            <div style={{ position: 'absolute', bottom: '10px', right: '20px', opacity: 0.12, pointerEvents: 'none' }}>
              <svg width="80" height="90" viewBox="0 0 100 120" fill="none" stroke="var(--secondary)" strokeWidth="1.5">
                <path d="M25 40 h50 v60 a10 10 0 0 1 -10 10 h-30 a10 10 0 0 1 -10 -10 Z" />
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-heading font-serif mb-2">
              Ready to explore the menu before coming?
            </h3>
            
            <p className="text-body text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Check out our Special Desi Ghee Churi, Adrak & Elaichi Chai, cold coffee, pizza, burgers and 140+ pure vegetarian delicacies.
            </p>

            <Link 
              to="/menu" 
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
            >
              <span>Explore Full Menu</span>
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
};

