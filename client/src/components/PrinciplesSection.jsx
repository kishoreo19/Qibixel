import React from 'react';
import { PRINCIPLES } from '../data/clientData';
import ScrollReveal from './ScrollReveal';

export default function PrinciplesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--card-warm-white)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
            <span className="editorial-badge">OUR OPERATING RATIONALE</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', color: 'var(--brand-primary)' }}>
              Precision Over Noise.
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.125rem' }}>
              In an era flooded with automated spam and low-quality content, precision engineering is the only defensible organic search strategy.
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {PRINCIPLES.map((item, idx) => (
            <ScrollReveal key={item.num} direction="up" delay={idx * 75}>
              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2.25rem',
                  borderRadius: '4px',
                  position: 'relative',
                  height: '100%',
                  transition: 'transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  e.currentTarget.style.borderColor = 'var(--accent-copper)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--accent-copper)',
                  marginBottom: '1rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>{item.num}</span>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>QIBIXEL STANDARD</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--brand-primary)', fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
