import React from 'react';
import { BRAND_STATEMENT } from '../data/clientData';
import ScrollReveal from './ScrollReveal';

export default function BrandStatementSection() {
  return (
    <section style={{
      backgroundColor: 'var(--card-warm-white)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      paddingTop: '6rem',
      paddingBottom: '6rem'
    }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
            <span className="editorial-badge">THE QIBIXEL PHILOSOPHY</span>
            
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--brand-primary)',
              marginTop: '1.25rem',
              marginBottom: '2rem'
            }}>
              "{BRAND_STATEMENT.headline}"
            </h2>

            <div style={{
              width: '80px',
              height: '2px',
              backgroundColor: 'var(--accent-copper)',
              margin: '0 auto 2.5rem'
            }}></div>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              maxWidth: '820px',
              margin: '0 auto'
            }}>
              {BRAND_STATEMENT.supportingCopy}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
