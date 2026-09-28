import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { BrandStory } from '../components/BrandStory';
import { WhyChaiBro } from '../components/WhyChaiBro';
import { AmbianceGallery } from '../components/AmbianceGallery';
import { Testimonials } from '../components/Testimonials';
import { ArrowRight, Store, MapPin } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="page-home">
      <Hero />
      <BrandStory />

      {/* Menu Teaser Banner */}
      <section className="section-padding bg-white" style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="badge-pill badge-terracotta mb-2">HANDCRAFTED DELICACIES</span>
          <h2 className="section-title">
            Explore The Full <span className="text-terracotta font-serif italic">Chai Bro Menu</span>
          </h2>
          <p className="section-subtitle mb-8">
            From our signature Gurh Laachi simmer to Ghar Ki Desi Ghee Churi, Mumbai Bun Maska, and frothy Kulhad Cold Coffees.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/menu" className="btn-primary">
              <span>View Full Menu</span>
              <ArrowRight size={17} />
            </Link>
            <Link to="/locations" className="btn-secondary">
              <MapPin size={16} className="text-terracotta" />
              <span>Find Nearest Outlet</span>
            </Link>
          </div>
        </div>
      </section>

      <WhyChaiBro />
      <AmbianceGallery />
      <Testimonials />

      {/* Franchise Callout Strip */}
      <section className="section-padding bg-wheat" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container text-center">
          <span className="badge-pill badge-gurh mb-2">FOFO FRANCHISE EXPANSION</span>
          <h2 className="section-title">
            Ready to bring Chai Bro <span className="text-terracotta font-serif italic">to your city?</span>
          </h2>
          <p className="section-subtitle mb-6">
            Join India’s fastest-growing modern chai chain with proven ROI, standardized recipes, and 360° company setup.
          </p>
          <Link to="/franchise" className="btn-primary">
            <Store size={18} />
            <span>Explore Franchise Opportunities</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
