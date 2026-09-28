import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICE_NAV_ITEMS } from '../data/clientData';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--brand-primary)',
      color: 'var(--bg-primary)',
      paddingTop: '5rem',
      paddingBottom: '3rem',
      borderTop: '1px solid var(--border-brand)'
    }}>
      <div className="container">
        {/* Top Editorial Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(220, 228, 218, 0.15)'
        }}>
          <div>
            <span className="editorial-badge dark">QIBIXEL SEARCH LABS</span>
            <h2 style={{
              color: 'var(--bg-primary)',
              fontFamily: 'var(--font-serif)',
              fontSize: '2.5rem',
              lineHeight: 1.15,
              marginBottom: '1rem'
            }}>
              Search Higher. <br />Grow Smarter.
            </h2>
            <p style={{ color: 'var(--secondary-sage)', maxWidth: '420px', fontSize: '1rem' }}>
              QIBIXEL helps ambitious businesses turn search visibility into sustainable organic growth through strategy, technical SEO, content, and data.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(220, 228, 218, 0.05)',
            border: '1px solid rgba(220, 228, 218, 0.12)',
            padding: '2.25rem',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h4 style={{ color: 'var(--bg-primary)', marginBottom: '0.5rem' }}>Ready for Organic Dominance?</h4>
              <p style={{ color: 'var(--secondary-sage)', fontSize: '0.9375rem' }}>
                Schedule a technical search consultation with our senior strategy team.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Initiate Strategic Audit</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem'
        }}>
          {/* Services Column */}
          <div>
            <h4 style={{ color: 'var(--bg-primary)', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {SERVICE_NAV_ITEMS.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/services/${item.slug}`}
                    style={{ color: 'var(--secondary-sage)', fontSize: '0.9375rem' }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-copper)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--secondary-sage)'}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 style={{ color: 'var(--bg-primary)', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
              Industries
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['SaaS', 'Technology', 'E-commerce', 'Healthcare', 'Finance', 'Legal', 'Real Estate', 'Startups'].map((ind) => (
                <li key={ind}>
                  <Link
                    to="/industries"
                    style={{ color: 'var(--secondary-sage)', fontSize: '0.9375rem' }}
                    onMouseOver={(e) => e.target.style.color = 'var(--accent-copper)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--secondary-sage)'}
                  >
                    {ind}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Editorial */}
          <div>
            <h4 style={{ color: 'var(--bg-primary)', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link to="/about" style={{ color: 'var(--secondary-sage)', fontSize: '0.9375rem' }}>About QIBIXEL</Link></li>
              <li><Link to="/case-studies" style={{ color: 'var(--secondary-sage)', fontSize: '0.9375rem' }}>Case Studies</Link></li>
              <li><Link to="/insights" style={{ color: 'var(--secondary-sage)', fontSize: '0.9375rem' }}>Editorial Insights</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--secondary-sage)', fontSize: '0.9375rem' }}>Contact & Enquiries</Link></li>
            </ul>
          </div>

          {/* Standards & Indexing */}
          <div>
            <h4 style={{ color: 'var(--bg-primary)', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
              Indexation & Sitemap
            </h4>
            <p style={{ color: 'var(--secondary-sage)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
              Built strictly according to Google Search Quality Rater Guidelines & Schema.org specifications.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/sitemap.xml" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-copper)', fontSize: '0.875rem', textDecoration: 'underline' }}>
                XML Sitemap (/sitemap.xml)
              </a>
              <a href="/robots.txt" target="_blank" rel="noreferrer" style={{ color: 'var(--secondary-sage)', fontSize: '0.875rem' }}>
                Robots Directives (/robots.txt)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid rgba(220, 228, 218, 0.12)',
          fontSize: '0.875rem',
          color: 'var(--secondary-sage)'
        }}>
          <div>
            © {new Date().getFullYear()} QIBIXEL. All rights reserved. Precision Organic Search Growth.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
            <span>Security Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
