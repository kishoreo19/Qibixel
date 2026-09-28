import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function VerticalServiceSystem({ services = [] }) {
  const [activeServiceId, setActiveServiceId] = useState("01");

  if (!services || services.length === 0) return null;

  const toggleService = (id, e) => {
    // If clicking on a child link or button inside, let it navigate
    if (e.target.closest('a')) return;
    setActiveServiceId(prev => prev === id ? null : id);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}>
            <div>
              <span className="editorial-badge">CORE CAPABILITIES</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
                Integrated Search Systems
              </h2>
            </div>
            <p style={{ maxWidth: '460px', color: 'var(--text-muted)' }}>
              We do not sell generic monthly task lists. We build enterprise search infrastructure designed to capture high-value commercial search intent.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Service System */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {services.map((service, index) => {
            const isActive = activeServiceId === service.id;

            return (
              <ScrollReveal key={service.id} direction="up" delay={index * 60}>
                <div
                  onClick={(e) => toggleService(service.id, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleService(service.id, e);
                    }
                  }}
                  style={{
                    backgroundColor: isActive ? 'var(--card-warm-white)' : 'transparent',
                    border: isActive ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    padding: isActive ? '2rem 2.5rem' : '1.5rem 2rem',
                    transition: 'all var(--transition-normal)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  {/* Header row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: isActive ? 'var(--accent-copper)' : 'var(--text-muted)',
                        width: '40px'
                      }}>
                        {service.id}
                      </span>

                      <h3 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: isActive ? '1.85rem' : '1.5rem',
                        fontWeight: 600,
                        color: isActive ? 'var(--brand-primary)' : 'var(--text-charcoal)',
                        transition: 'all var(--transition-fast)'
                      }}>
                        {service.title}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <span className="desktop-only" style={{
                        fontSize: '0.9375rem',
                        color: 'var(--text-muted)',
                        fontStyle: 'italic',
                        opacity: isActive ? 1 : 0.7
                      }}>
                        {service.tagline}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleService(service.id, e);
                        }}
                        aria-label={isActive ? `Collapse ${service.title}` : `Expand ${service.title}`}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: isActive ? 'var(--accent-copper)' : 'var(--brand-primary)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0.25rem'
                        }}
                      >
                        {isActive ? <Minus size={22} /> : <Plus size={22} />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details Body */}
                  {isActive && (
                    <div className="animate-fade-in" style={{
                      marginTop: '1.75rem',
                      paddingTop: '1.75rem',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '2.5rem'
                    }}>
                      <div>
                        <p style={{ color: 'var(--text-charcoal)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                          {service.summary}
                        </p>

                        <div style={{
                          backgroundColor: 'var(--secondary-sage)',
                          padding: '1rem 1.25rem',
                          borderRadius: '2px',
                          borderLeft: '3px solid var(--brand-primary)',
                          marginBottom: '1.5rem'
                        }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand-primary)', display: 'block', marginBottom: '0.25rem' }}>
                            MEASURABLE OUTCOME
                          </span>
                          <p style={{ fontSize: '0.9375rem', color: 'var(--brand-primary)', margin: 0, fontWeight: 500 }}>
                            {service.outcomes}
                          </p>
                        </div>

                        <Link to={`/services/${service.slug}`} className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
                          <span>Explore {service.title} Strategy</span>
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--brand-primary)' }}>
                          Key Deliverables & Frameworks
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {service.deliverables && service.deliverables.map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--text-muted)' }}>
                              <CheckCircle2 size={18} style={{ color: 'var(--accent-copper)', shrink: 0, marginTop: '2px' }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
