import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, Phone, ShoppingBag, Coffee, ArrowRight, ShieldCheck } from 'lucide-react';

export const TermsPage = () => {
  return (
    <div className="page-terms" style={{ paddingTop: '100px', background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Page Hero */}
      <section className="section-padding text-center" style={{ background: 'var(--gradient-warm-bg)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-pill badge-terracotta mb-3">TERMS & CONDITIONS</span>
          <h1 className="section-title text-4xl md:text-5xl font-extrabold text-heading">
            A few things <span className="text-terracotta font-serif italic">to know.</span>
          </h1>
          <p className="section-subtitle mt-3 max-w-2xl mx-auto">
            Information about the menu, your order and enquiries to Chai Bro’s.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="section-padding" style={{ padding: '48px 20px 80px' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          
          {/* Top Notice Header */}
          <div style={{
            background: 'var(--bg-white)',
            borderRadius: '20px',
            border: '1px solid var(--border-subtle)',
            padding: '24px 28px',
            marginBottom: '32px',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div className="flex items-center gap-2 text-terracotta font-bold text-sm">
              <FileText size={18} />
              <span>Chai Bro’s Website & Service Terms</span>
            </div>
            <span className="text-xs text-muted font-semibold">Booth No. 80, Sector 89, Mohali</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Card 1 */}
            <div className="terms-card" style={cardStyle}>
              <h2 style={headingStyle}>Menu and prices</h2>
              <p style={paragraphStyle}>
                Prices are displayed in Indian rupees. Menu availability and pricing may change. The website basket shows a menu subtotal; the café confirms availability, taxes, delivery arrangements and any additional charges before accepting an order.
              </p>
            </div>

            {/* Card 2 */}
            <div className="terms-card" style={cardStyle}>
              <h2 style={headingStyle}>WhatsApp orders</h2>
              <p style={paragraphStyle}>
                Building a basket or opening WhatsApp does not confirm an order. Please send the message and wait for the café’s confirmation. The website does not collect card details or process payments. Contact the café directly about payment, changes, cancellations or refunds for a confirmed order.
              </p>
            </div>

            {/* Card 3 */}
            <div className="terms-card" style={cardStyle}>
              <h2 style={headingStyle}>Food information</h2>
              <p style={paragraphStyle}>
                Menu images are AI-created category illustrations and may be shared across related dishes. The hero is promotional artwork. Gallery storefront photographs show the café. Ingredients, portions and presentation can differ from illustrations. Ask the café about allergies and specific dietary requirements before ordering.
              </p>
            </div>

            {/* Card 4 */}
            <div className="terms-card" style={cardStyle}>
              <h2 style={headingStyle}>Franchise enquiries</h2>
              <p style={paragraphStyle}>
                A franchise enquiry begins a discussion. It is not a franchise agreement, reservation or payment commitment. Any fees, support, timelines and commercial terms must be discussed and agreed with the team separately.
              </p>
            </div>

            {/* Card 5 */}
            <div className="terms-card" style={cardStyle}>
              <h2 style={headingStyle}>Questions</h2>
              <p style={paragraphStyle}>
                Contact Chai Bro’s on <a href="tel:+918700087687" style={linkStyle}>8700087687</a> (+91 87000 87687) for help with an order or these website features.
              </p>
            </div>

          </div>

          {/* Quick Back CTA */}
          <div style={{ marginTop: '56px', paddingTop: '16px', textAlign: 'center' }}>
            <Link to="/menu" className="btn-primary inline-flex">
              <span>Explore Our Menu</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

const cardStyle = {
  background: 'var(--bg-white)',
  borderRadius: '20px',
  border: '1px solid var(--border-subtle)',
  padding: '28px 32px',
  boxShadow: 'var(--shadow-xs)'
};

const headingStyle = {
  fontSize: '1.25rem',
  fontWeight: '800',
  color: 'var(--text-heading)',
  marginBottom: '12px',
  fontFamily: 'var(--font-sans)'
};

const paragraphStyle = {
  fontSize: '0.92rem',
  color: 'var(--text-body)',
  lineHeight: '1.68'
};

const linkStyle = {
  color: 'var(--terracotta)',
  fontWeight: '700',
  textDecoration: 'underline'
};

