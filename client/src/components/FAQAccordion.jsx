import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ maxWidth: '720px', margin: '0 auto 4rem', textAlign: 'center' }}>
            <span className="editorial-badge">CLEAR ANSWERS</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', color: 'var(--brand-primary)' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ marginTop: '0.75rem', fontSize: '1.0625rem' }}>
              Direct clarity on our strategic methodologies, expectations, and operational frameworks.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={faq.id || idx} direction="up" delay={idx * 60}>
                <div
                  style={{
                    backgroundColor: 'var(--card-warm-white)',
                    border: isOpen ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                    borderRadius: '4px',
                    padding: '1.75rem 2rem',
                    transition: 'all var(--transition-normal)'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1.5rem',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                    aria-expanded={isOpen}
                  >
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      color: isOpen ? 'var(--brand-primary)' : 'var(--text-charcoal)'
                    }}>
                      {faq.question}
                    </h3>
                    <div style={{ color: isOpen ? 'var(--accent-copper)' : 'var(--brand-primary)', shrink: 0 }}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="animate-fade-in" style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
                        {faq.answer}
                      </p>
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
