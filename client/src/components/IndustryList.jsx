import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndustryList({ industries = [] }) {
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState('saas');

  if (!industries || industries.length === 0) return null;

  const currentIndustry = industries.find(i => i.slug === selectedIndustrySlug) || industries[0];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--card-warm-white)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <span className="editorial-badge">TAILORED DOMAIN EXPERTISE</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', color: 'var(--brand-primary)' }}>
            Deep Industry Focus
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.0625rem' }}>
            We adapt our search architecture to the distinct regulatory, technical, and commercial realities of your market vertical.
          </p>
        </div>

        {/* Interactive Editorial Split Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem'
        }}>
          {/* Left Vertical List */}
          <div style={{ gridColumn: 'span 12', '@media (min-width: 992px)': { gridColumn: 'span 5' } }} className="industry-list-col">
            <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid var(--border-subtle)' }}>
              {industries.map((ind) => {
                const isSelected = selectedIndustrySlug === ind.slug;
                return (
                  <button
                    key={ind.id || ind.slug}
                    onClick={() => setSelectedIndustrySlug(ind.slug)}
                    onMouseEnter={() => setSelectedIndustrySlug(ind.slug)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '1.1rem 1.5rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      borderLeft: isSelected ? '4px solid var(--accent-copper)' : '4px solid transparent',
                      marginLeft: '-2px',
                      backgroundColor: isSelected ? 'var(--bg-primary)' : 'transparent',
                      transition: 'all var(--transition-fast)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: isSelected ? 700 : 500,
                      color: isSelected ? 'var(--brand-primary)' : 'var(--text-muted)'
                    }}>
                      {ind.name}
                    </span>
                    {isSelected && <ArrowUpRight size={18} style={{ color: 'var(--accent-copper)' }} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Detailed Preview Panel */}
          <div style={{ gridColumn: 'span 12' }} className="industry-detail-col">
            <div className="animate-fade-in" key={currentIndustry.slug} style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              padding: '3rem',
              borderRadius: '4px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span className="editorial-badge">{currentIndustry.name} SEARCH STRATEGY</span>
                
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
                  {currentIndustry.tagline}
                </h3>

                <p style={{ fontSize: '1.0625rem', color: 'var(--text-charcoal)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  {currentIndustry.description}
                </p>

                <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-copper)', marginBottom: '1rem' }}>
                  CORE SEARCH FOCUS AREAS
                </h4>

                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                  {currentIndustry.focusAreas && currentIndustry.focusAreas.map((area, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9375rem', color: 'var(--brand-primary)', fontWeight: 500 }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-copper)', shrink: 0 }} />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                backgroundColor: 'var(--secondary-sage)',
                padding: '1.25rem 1.75rem',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--brand-primary)' }}>
                    TYPICAL BENCHMARK IMPACT
                  </span>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--brand-primary)' }}>
                    {currentIndustry.sampleImpact}
                  </div>
                </div>

                <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8125rem' }}>
                  <span>Discuss {currentIndustry.name} Strategy</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .industry-list-col { grid-column: span 5 !important; }
            .industry-detail-col { grid-column: span 7 !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
