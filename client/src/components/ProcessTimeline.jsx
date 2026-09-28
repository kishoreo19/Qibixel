import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/clientData';
import ScrollReveal from './ScrollReveal';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState('01');

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ maxWidth: '640px', marginBottom: '4rem' }}>
            <span className="editorial-badge">THE METHODOLOGY</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
              Methodical Organic Execution
            </h2>
            <p style={{ marginTop: '0.75rem' }}>
              Our 6-stage operational timeline ensures zero guesswork, clear technical accountability, and predictable search performance momentum.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Step Navigation Bar */}
        <ScrollReveal direction="up" delay={100}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '1rem',
            borderBottom: '2px solid var(--border-subtle)',
            paddingBottom: '1rem',
            marginBottom: '3rem',
            overflowX: 'auto'
          }}>
            {PROCESS_STEPS.map((step) => {
              const isSelected = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0.75rem 0.5rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderBottom: isSelected ? '3px solid var(--accent-copper)' : '3px solid transparent',
                    marginBottom: '-1.25rem',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--accent-copper)' : 'var(--text-muted)'
                  }}>
                    {step.step}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? 'var(--brand-primary)' : 'var(--text-charcoal)',
                    whiteSpace: 'nowrap'
                  }}>
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Stage Detail Panel */}
        {PROCESS_STEPS.filter(s => s.step === activeStep).map((current) => (
          <ScrollReveal key={current.step} direction="up" delay={150}>
            <div
              className="animate-fade-in"
              style={{
                backgroundColor: 'var(--card-warm-white)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                padding: '3rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{
                    backgroundColor: 'var(--brand-primary)',
                    color: 'var(--bg-primary)',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    width: '44px',
                    height: '44px',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {current.step}
                  </span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-copper)' }}>
                    STAGE {current.step} / 06 — {current.name.toUpperCase()}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', color: 'var(--brand-primary)', marginBottom: '1.25rem' }}>
                  {current.title}
                </h3>

                <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--text-charcoal)' }}>
                  {current.description}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--secondary-sage)',
                border: '1px solid rgba(24, 60, 50, 0.1)',
                padding: '2rem',
                borderRadius: '4px'
              }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  STAGE OUTPUT DELIVERABLE
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--brand-primary)' }}>
                  <li>✓ Full technical documentation & developer sprint tickets</li>
                  <li>✓ Search intent matrix mapped against conversion goals</li>
                  <li>✓ Direct access to senior SEO strategist via dedicated Slack/Teams</li>
                  <li>✓ Executive report with zero fluff metrics</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
