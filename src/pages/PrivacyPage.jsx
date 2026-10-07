import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export const PrivacyPage = () => {
  return (
    <div className="page-privacy" style={{ paddingTop: '100px', background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Page Hero */}
      <section className="section-padding text-center" style={{ background: 'var(--gradient-warm-bg)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="badge-pill badge-terracotta mb-3">LEGAL & TRANSPARENCY</span>
          <h1 className="section-title text-4xl md:text-5xl font-extrabold text-heading">
            Privacy <span className="text-terracotta font-serif italic">Policy</span>
          </h1>
          <p className="section-subtitle mt-3 max-w-2xl mx-auto">
            How Chai Bro’s handles website enquiries, WhatsApp orders and the information you choose to share.
          </p>
        </div>
      </section>

      {/* Main Legal Content Container */}
      <section className="section-padding" style={{ padding: '48px 20px 80px' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          
          {/* Top Date & Notice Header */}
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
              <ShieldCheck size={18} />
              <span>Official Chai Bro’s Privacy Document</span>
            </div>
            <span className="text-xs text-muted font-semibold">Last updated: 28 September 2026</span>
          </div>

          {/* Policy Sections Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Section 1 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>1. Who this policy covers</h2>
              <p style={paragraphStyle}>
                This Privacy Policy explains how Chai Bro’s handles information connected with its café website, WhatsApp order requests, contact enquiries and franchise enquiries. Chai Bro’s is located at Booth No. 80, Sector 89, Mohali, Punjab, India. References to ‘we’, ‘us’ and ‘our’ mean Chai Bro’s for these activities.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                You may browse the menu without creating an account. This policy concerns the website and related communications; a third-party service you choose to open also has its own privacy policy.
              </p>
            </div>

            {/* Section 2 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>2. Information you choose to share</h2>
              <p style={paragraphStyle}>
                Order requests may contain the dishes, sizes and quantities you select, an optional name and any instructions you enter. Contact enquiries ask for your name, phone number and message; your email is optional. Franchise enquiries also ask for your city or preferred area and the plans you choose to describe.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                If you continue a conversation by phone, WhatsApp or email, we receive the information you share there, including your contact identity. A delivery address or billing information may be requested separately when necessary to fulfil a confirmed order. The website does not collect payment-card details, UPI PINs, banking passwords or identity documents. Please do not include these in a message.
              </p>
            </div>

            {/* Section 3 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>3. How the WhatsApp features work</h2>
              <p style={paragraphStyle}>
                The basket and enquiry forms prepare a message in your browser. Selecting ‘Continue on WhatsApp’ opens a WhatsApp link containing that message. WhatsApp may process the pre-filled message and technical information when the link opens. You review the message and choose whether to press Send; the café receives it when you send it.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                The website forms do not automatically email your enquiry or save it in a website enquiry database. A published email link opens your email application. You can call the café instead if you prefer not to use WhatsApp.
              </p>
            </div>

            {/* Section 4 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>4. Why we use information</h2>
              <p style={paragraphStyle}>
                We use information you provide to answer your question, discuss a franchise enquiry, confirm and fulfil an order, arrange collection or delivery where agreed, provide support, handle complaints and keep records required by law. Relevant technical information may also be used to operate the website, diagnose faults and prevent misuse.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                An order or enquiry is not consent to unrelated promotional messages. Any optional marketing communication requires an appropriate separate choice, and you can ask us to stop it.
              </p>
            </div>

            {/* Section 5 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>5. Basket storage, cookies and technical information</h2>
              <p style={paragraphStyle}>
                The basket uses local storage in your browser to remember item identifiers, sizes and quantities between visits. It does not save the name or notes you enter. Basket data remains until you remove it or clear the website’s data in your browser. Browser autofill or history may separately retain information according to your own browser settings.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                Hosting and security services may process IP addresses, browser and device information, requested pages, timestamps, error records and similar technical logs to deliver and protect the website. WordPress may use essential cookies for administrative sign-in and related functions. The menu and order features do not require a customer account.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                The website’s supplied menu, basket and enquiry features do not add advertising pixels or audience-analytics trackers. If additional tracking features are introduced, their purposes and choices must be explained before the relevant collection begins.
              </p>
            </div>

            {/* Section 6 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>6. Maps, social links and sharing</h2>
              <p style={paragraphStyle}>
                The embedded Google Map loads only after you select ‘Show interactive map’. Opening Google Maps, WhatsApp or a social link connects you to that provider, which may receive your IP address, device information and other information covered by its own policies. Those providers may process information outside India.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                Access to information held by Chai Bro’s is limited to people and service providers who need it for the purposes in this policy. Where necessary, relevant order information may be shared with an agreed delivery provider, professional advisers or authorities when legally required. Information must not be sold or supplied to unrelated businesses for their own advertising.
              </p>
            </div>

            {/* Section 7 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>7. How long information is kept</h2>
              <p style={paragraphStyle}>
                Information should be retained only for as long as needed to handle the enquiry or order, provide related support, resolve a dispute or meet a legal record-keeping obligation. Different records can require different retention periods. Information that is no longer needed should be deleted or anonymised; records required by law may need to be retained even after a deletion request.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                Your browser’s basket storage is under your control. Copies of conversations held by WhatsApp, your email provider or your own device are also subject to those services’ settings and retention practices.
              </p>
            </div>

            {/* Section 8 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>8. Protecting information</h2>
              <p style={paragraphStyle}>
                We take reasonable steps appropriate to the information and services involved to protect information against unauthorised access, loss or misuse. Access should be limited to authorised people with a business need. No internet transmission or storage method can guarantee absolute security.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                If you suspect misuse of information shared with Chai Bro’s, contact us promptly using the details below. Any required breach notifications will be handled according to the law applicable to the incident.
              </p>
            </div>

            {/* Section 9 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>9. Your choices and requests</h2>
              <p style={paragraphStyle}>
                You can choose not to submit a form, omit optional information, review a WhatsApp message before sending, remove basket items, clear browser storage or contact the café by phone. If essential order details are not provided, we may be unable to complete that order or respond meaningfully to the enquiry.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                You can ask what information we hold about you, request a correction, ask for deletion, withdraw consent for an optional use, or raise a privacy concern. Withdrawal does not invalidate earlier lawful processing and may not remove records we must keep by law. We may ask for proportionate information to confirm that a request concerns you; please do not send identity documents unless a specific, necessary verification method has been agreed.
              </p>
            </div>

            {/* Section 10 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>10. Children and information about other people</h2>
              <p style={paragraphStyle}>
                Children under 18 should ask a parent or lawful guardian to handle enquiries and orders that involve sharing personal information. Please do not submit a child’s personal details through the forms. A parent or guardian who believes such information has been shared can contact the café to request a review and appropriate deletion, subject to legal requirements.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                Share another person’s information only when you are entitled to do so and only when it is necessary for the request.
              </p>
            </div>

            {/* Section 11 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>11. Indian privacy rights and complaints</h2>
              <p style={paragraphStyle}>
                We handle personal information under the Indian privacy and information-technology laws applicable to the activity and in force at the relevant time. Where applicable law provides rights of access, correction, erasure, consent withdrawal, grievance redressal or nomination, you may exercise them through the contact channels below.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                We will consider requests within the period required by applicable law, explain a refusal or limitation where appropriate, and identify any further information needed. If an issue remains unresolved, you may use the complaint or other legal remedies available to you under the law then in force. Nothing in this policy limits those rights.
              </p>
            </div>

            {/* Section 12 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>12. Privacy contact and grievance requests</h2>
              <p style={paragraphStyle}>
                Address privacy questions and complaints to Chai Bro’s management. Call <a href="tel:+918700087687" style={linkStyle}>+91 87000 87687</a>, send a WhatsApp message to <a href="tel:+918700087687" style={linkStyle}>+91 87000 87687</a>, or write to Chai Bro’s, Booth No. 80, Sector 89, Mohali, Punjab, India.
              </p>
              <p style={{ ...paragraphStyle, marginTop: '10px' }}>
                Begin your message with ‘Privacy request’. Describe the enquiry or order concerned, the approximate date, what you want us to review and a way to contact you. Please avoid including unnecessary sensitive information. If you need help understanding this policy or making a request, ask the café through the same channels.
              </p>
            </div>

            {/* Section 13 */}
            <div className="policy-card" style={cardStyle}>
              <h2 style={headingStyle}>13. Changes to this policy</h2>
              <p style={paragraphStyle}>
                We may update this policy when website features, business practices or legal requirements change. The revised policy will show a new update date. A material new use of information will be explained, and any consent required by law will be requested before that use begins.
              </p>
            </div>

          </div>

          {/* Quick Back CTA */}
          <div style={{ marginTop: '56px', paddingTop: '16px', textAlign: 'center' }}>
            <Link to="/" className="btn-primary inline-flex">
              <span>Return to Homepage</span>
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

