import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function IndustryList({ industries = [] }) {
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState('saas');

  if (!industries || industries.length === 0) return null;

  const currentIndustry = industries.find(i => i.slug === selectedIndustrySlug) || industries[0];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--card-warm-white)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span className="editorial-badge">TAILORED DOMAIN EXPERTISE</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: 'var(--brand-primary)' }}>
              Deep Industry Specialization
            </h2>
            <p style={{ marginTop: '0.75rem' }}>
              We adapt our growth architecture to the distinct regulatory, technical, and commercial realities of your market vertical.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile Horizontal Pill Scroll Selector (< 992px) */}
        <div className="mobile-only" style={{ marginBottom: '1.75rem', width: '100%' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '0.75rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            width: '100%'
          }}>
            {industries.map((ind) => {
              const isSelected = selectedIndustrySlug === ind.slug;
              return (
                <button
                  key={ind.id || ind.slug}
                  onClick={() => setSelectedIndustrySlug(ind.slug)}
                  style={{
                    flex: '0 0 auto',
                    background: isSelected ? 'var(--brand-primary)' : 'var(--bg-primary)',
                    color: isSelected ? 'var(--bg-primary)' : 'var(--brand-primary)',
                    border: isSelected ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                    padding: '0.6rem 1.1rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    minHeight: '44px',
                    touchAction: 'manipulation'
                  }}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2rem'
        }}>
          {/* Left Vertical List (Desktop Only) */}
          <div style={{ gridColumn: 'span 12' }} className="desktop-only industry-list-col">
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
                      justifyContent: 'space-between',
                      minHeight: '48px'
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

          {/* Detailed Preview Panel */}
          <div style={{ gridColumn: 'span 12' }} className="industry-detail-col">
            <div className="animate-fade-in" key={currentIndustry.slug} style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              padding: 'clamp(1.25rem, 4vw, 2.75rem)',
              borderRadius: '4px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              maxWidth: '100%'
            }}>
              <div>
                <span className="editorial-badge">{currentIndustry.name} GROWTH STRATEGY</span>
                
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', color: 'var(--brand-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {currentIndustry.tagline}
                </h3>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-charcoal)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  {currentIndustry.description}
                </p>

                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-copper)', marginBottom: '1rem', fontWeight: 700 }}>
                  CORE GROWTH FOCUS AREAS
                </h4>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {currentIndustry.focusAreas && currentIndustry.focusAreas.map((area, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--brand-primary)', fontWeight: 500, lineHeight: 1.5 }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent-copper)', shrink: 0, marginTop: '2px' }} />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Box - Fully Responsive with Zero Edge Overflow */}
              <div style={{
                backgroundColor: 'var(--secondary-sage)',
                padding: '1.1rem 1.25rem',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: '100%',
                boxSizing: 'border-box'
              }} className="industry-impact-box">
                <div>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--brand-primary)', display: 'block', marginBottom: '0.25rem' }}>
                    TYPICAL BENCHMARK IMPACT
                  </span>
                  <div style={{ fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--brand-primary)', lineHeight: 1.4 }}>
                    {currentIndustry.sampleImpact}
                  </div>
                </div>

                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem', fontSize: '0.875rem', boxSizing: 'border-box' }}>
                  <span>Discuss {currentIndustry.name} Strategy</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .industry-list-col { grid-column: span 5 !important; display: block !important; }
            .industry-detail-col { grid-column: span 7 !important; }
            .industry-impact-box { flex-direction: row !important; align-items: center !important; justify-content: space-between !important; }
            .industry-impact-box .btn { width: auto !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
