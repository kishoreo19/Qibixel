import React from 'react';
import { Mail, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  useSEO({
    title: "Start a Conversation | Technical SEO Enquiry",
    description: "Initiate a search evaluation with QIBIXEL. Speak directly with senior search engineers and strategy leads.",
    canonicalUrl: "https://qibixel.com/contact"
  });

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="editorial-badge dark">INITIATE ENGAGEMENT</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', color: 'var(--bg-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Let’s Build Your Organic Search Advantage.
            </h1>
            <p style={{ color: 'var(--secondary-sage)', fontSize: '1.25rem', lineHeight: 1.75 }}>
              Whether you require a comprehensive technical crawl audit, an enterprise platform migration strategy, or scalable search content architecture, our senior team is ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem' }}>
            {/* Left Form */}
            <div style={{ gridColumn: 'span 12' }} className="contact-form-col">
              <ContactForm />
            </div>

            {/* Right Contact Details & Credentials */}
            <div style={{ gridColumn: 'span 12' }} className="contact-info-col">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="card-editorial">
                  <Mail size={32} style={{ color: 'var(--accent-copper)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>Direct Email Inquiry</h3>
                  <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    For direct RFP transmissions or strategic inquiries:
                  </p>
                  <a href="mailto:strategy@qibixel.com" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--brand-primary)', textDecoration: 'underline' }}>
                    strategy@qibixel.com
                  </a>
                </div>

                <div className="card-editorial">
                  <ShieldCheck size={32} style={{ color: 'var(--accent-copper)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>Confidentiality Guaranteed</h3>
                  <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)' }}>
                    All domain data, Search Console access, and codebases shared during technical audits are protected under non-disclosure agreements (NDAs).
                  </p>
                </div>

                <div className="card-editorial">
                  <Clock size={32} style={{ color: 'var(--accent-copper)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>Response Standard</h3>
                  <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)' }}>
                    Our senior strategy team reviews all submitted briefings within 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .contact-form-col { grid-column: span 7 !important; }
            .contact-info-col { grid-column: span 5 !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
