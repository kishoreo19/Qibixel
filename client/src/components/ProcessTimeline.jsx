import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/clientData';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState('01');

  const activeIndex = PROCESS_STEPS.findIndex(s => s.step === activeStep);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveStep(PROCESS_STEPS[activeIndex - 1].step);
    }
  };

  const handleNext = () => {
    if (activeIndex < PROCESS_STEPS.length - 1) {
      setActiveStep(PROCESS_STEPS[activeIndex + 1].step);
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <span className="editorial-badge">THE METHODOLOGY</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 6vw, 3.25rem)' }}>
              Methodical Execution Blueprint
            </h2>
            <p style={{ marginTop: '0.75rem' }}>
              Our 6-stage operational timeline ensures zero guesswork, clear technical accountability, and predictable performance momentum.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile & Desktop Horizontal Pill Step Bar (Zero Overlap) */}
        <ScrollReveal direction="up" delay={100}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '0.85rem',
            marginBottom: '2.5rem',
            scrollbarWidth: 'none',
            borderBottom: '1px solid var(--border-subtle)',
            msOverflowStyle: 'none'
          }} className="no-scrollbar">
            {PROCESS_STEPS.map((step) => {
              const isSelected = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  style={{
                    flex: '0 0 auto',
                    background: isSelected ? 'var(--brand-primary)' : 'var(--card-warm-white)',
                    color: isSelected ? 'var(--bg-primary)' : 'var(--brand-primary)',
                    border: isSelected ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                    padding: '0.65rem 1.1rem',
                    borderRadius: '4px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    minHeight: '48px',
                    touchAction: 'manipulation'
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--accent-copper)' : 'var(--accent-copper)'
                  }}>
                    {step.step}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: isSelected ? 700 : 500,
                    whiteSpace: 'nowrap'
                  }}>
                    {step.name}
                  </span>
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
                padding: 'clamp(1.5rem, 5vw, 3rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <span style={{
                      backgroundColor: 'var(--brand-primary)',
                      color: 'var(--bg-primary)',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      width: '40px',
                      height: '40px',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      shrink: 0
                    }}>
                      {current.step}
                    </span>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-copper)' }}>
                      STAGE {current.step} / 06 — {current.name.toUpperCase()}
                    </span>
                  </div>

                  {/* Mobile Quick Navigation Prev/Next Arrows */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      onClick={handlePrev}
                      disabled={activeIndex === 0}
                      aria-label="Previous Stage"
                      style={{
                        background: 'none',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '2px',
                        width: '38px',
                        height: '38px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                        opacity: activeIndex === 0 ? 0.3 : 1,
                        color: 'var(--brand-primary)'
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={activeIndex === PROCESS_STEPS.length - 1}
                      aria-label="Next Stage"
                      style={{
                        background: 'none',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '2px',
                        width: '38px',
                        height: '38px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: activeIndex === PROCESS_STEPS.length - 1 ? 'not-allowed' : 'pointer',
                        opacity: activeIndex === PROCESS_STEPS.length - 1 ? 0.3 : 1,
                        color: 'var(--brand-primary)'
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
                  {current.title}
                </h3>

                <p style={{ fontSize: '0.9625rem', lineHeight: 1.7, color: 'var(--text-charcoal)' }}>
                  {current.description}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--secondary-sage)',
                border: '1px solid rgba(24, 60, 50, 0.1)',
                padding: 'clamp(1.25rem, 4vw, 2rem)',
                borderRadius: '4px'
              }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  STAGE OUTPUT DELIVERABLE
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--brand-primary)' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-copper)', shrink: 0, marginTop: '2px' }} />
                    <span>Full technical documentation & developer sprint tickets</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-copper)', shrink: 0, marginTop: '2px' }} />
                    <span>Search intent matrix mapped against conversion goals</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-copper)', shrink: 0, marginTop: '2px' }} />
                    <span>Direct access to senior strategist via dedicated Slack/Teams</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-copper)', shrink: 0, marginTop: '2px' }} />
                    <span>Executive report with zero fluff metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
