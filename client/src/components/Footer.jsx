import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { SERVICE_NAV_ITEMS } from '../data/clientData';

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(prev => prev === sectionName ? null : sectionName);
  };

  return (
    <footer style={{
      backgroundColor: 'var(--brand-primary)',
      color: 'var(--bg-primary)',
      paddingTop: 'clamp(3rem, 8vw, 5rem)',
      paddingBottom: 'calc(3rem + var(--safe-bottom))',
      paddingLeft: 'var(--safe-left)',
      paddingRight: 'var(--safe-right)',
      borderTop: '1px solid var(--border-brand)'
    }}>
      <div className="container">
        {/* Top Editorial Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(220, 228, 218, 0.15)'
        }}>
          <div>
            <span className="editorial-badge dark">QIBIXEL GROWTH LABS</span>
            <h2 style={{
              color: 'var(--bg-primary)',
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 6vw, 2.75rem)',
              lineHeight: 1.15,
              marginBottom: '1rem'
            }}>
              Search Higher. <br />Grow Smarter.
            </h2>
            <p style={{ color: 'var(--secondary-sage)', maxWidth: '420px', fontSize: '0.9625rem' }}>
              QIBIXEL helps ambitious businesses turn search visibility, web engineering, and performance marketing into sustainable organic growth.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(220, 228, 218, 0.05)',
            border: '1px solid rgba(220, 228, 218, 0.12)',
            padding: 'clamp(1.5rem, 5vw, 2.25rem)',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h4 style={{ color: 'var(--bg-primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Ready for Organic Dominance?</h4>
              <p style={{ color: 'var(--secondary-sage)', fontSize: '0.875rem' }}>
                Schedule a technical consultation with our senior strategy team.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', minHeight: '48px' }}>
                <span>Initiate Strategic Audit</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Links Grid & Mobile Collapsible Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: '2rem',
          paddingTop: '3rem',
          paddingBottom: '3rem'
        }}>
          {/* Services Column */}
          <div className="footer-col">
            <button
              className="footer-toggle-btn"
              onClick={() => toggleSection('services')}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                color: 'var(--bg-primary)',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                cursor: 'pointer'
              }}
            >
              <span>Capabilities</span>
              <span className="mobile-only">{openSection === 'services' ? <Minus size={18} /> : <Plus size={18} />}</span>
            </button>
            <div className={`footer-links-list ${openSection === 'services' ? 'is-open' : ''}`}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: '0.5rem' }}>
                {SERVICE_NAV_ITEMS.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/services/${item.slug}`}
                      style={{ color: 'var(--secondary-sage)', fontSize: '0.875rem' }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries Column */}
          <div className="footer-col">
            <button
              className="footer-toggle-btn"
              onClick={() => toggleSection('industries')}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                color: 'var(--bg-primary)',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                cursor: 'pointer'
              }}
            >
              <span>Industries</span>
              <span className="mobile-only">{openSection === 'industries' ? <Minus size={18} /> : <Plus size={18} />}</span>
            </button>
            <div className={`footer-links-list ${openSection === 'industries' ? 'is-open' : ''}`}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: '0.5rem' }}>
                {['SaaS', 'Technology', 'E-commerce', 'Healthcare', 'Finance', 'Legal', 'Real Estate', 'Startups'].map((ind) => (
                  <li key={ind}>
                    <Link to="/industries" style={{ color: 'var(--secondary-sage)', fontSize: '0.875rem' }}>
                      {ind}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <button
              className="footer-toggle-btn"
              onClick={() => toggleSection('company')}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                color: 'var(--bg-primary)',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                cursor: 'pointer'
              }}
            >
              <span>Company</span>
              <span className="mobile-only">{openSection === 'company' ? <Minus size={18} /> : <Plus size={18} />}</span>
            </button>
            <div className={`footer-links-list ${openSection === 'company' ? 'is-open' : ''}`}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: '0.5rem' }}>
                <li><Link to="/about" style={{ color: 'var(--secondary-sage)', fontSize: '0.875rem' }}>About QIBIXEL</Link></li>
                <li><Link to="/case-studies" style={{ color: 'var(--secondary-sage)', fontSize: '0.875rem' }}>Case Studies</Link></li>
                <li><Link to="/insights" style={{ color: 'var(--secondary-sage)', fontSize: '0.875rem' }}>Editorial Insights</Link></li>
                <li><Link to="/contact" style={{ color: 'var(--secondary-sage)', fontSize: '0.875rem' }}>Contact & Enquiries</Link></li>
              </ul>
            </div>
          </div>

          {/* Indexing & Sitemap */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--bg-primary)', fontSize: '1.1rem', padding: '0.5rem 0', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
              Indexation & Standards
            </h4>
            <p style={{ color: 'var(--secondary-sage)', fontSize: '0.8125rem', marginBottom: '0.85rem', lineHeight: 1.6 }}>
              Built strictly according to Google Search Quality Rater Guidelines & Schema.org specifications.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/sitemap.xml" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-copper)', fontSize: '0.8125rem', textDecoration: 'underline' }}>
                XML Sitemap (/sitemap.xml)
              </a>
              <a href="/robots.txt" target="_blank" rel="noreferrer" style={{ color: 'var(--secondary-sage)', fontSize: '0.8125rem' }}>
                Robots Directives (/robots.txt)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '1rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(220, 228, 218, 0.12)',
          fontSize: '0.8125rem',
          color: 'var(--secondary-sage)'
        }}>
          <div>
            © {new Date().getFullYear()} QIBIXEL. All rights reserved. Precision Organic Search & Growth.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
            <span>Security Framework</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-links-list {
            display: none;
          }
          .footer-links-list.is-open {
            display: block;
          }
        }
        @media (min-width: 768px) {
          .footer-toggle-btn {
            pointer-events: none;
          }
          .footer-links-list {
            display: block !important;
          }
        }
      `}</style>
    </footer>
  );
}
