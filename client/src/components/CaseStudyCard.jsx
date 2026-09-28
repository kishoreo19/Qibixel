import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, AlertCircle } from 'lucide-react';

export default function CaseStudyCard({ caseStudy }) {
  if (!caseStudy) return null;

  return (
    <article className="card-editorial" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      position: 'relative',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      <div>
        {/* Sample Data Notice Badge */}
        {caseStudy.isSampleData && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.7rem',
            color: 'var(--accent-copper)',
            backgroundColor: 'rgba(181, 106, 69, 0.08)',
            padding: '0.35rem 0.65rem',
            borderRadius: '2px',
            marginBottom: '1.25rem',
            fontWeight: 600,
            maxWidth: '100%',
            overflowWrap: 'break-word'
          }}>
            <AlertCircle size={14} style={{ shrink: 0 }} />
            <span>SAMPLE CASE STUDY & BENCHMARK DATA</span>
          </div>
        )}

        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          {caseStudy.industry} • {caseStudy.timeframe || '12 Months'}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.4rem, 4.5vw, 1.65rem)',
          lineHeight: 1.25,
          color: 'var(--brand-primary)',
          marginBottom: '1rem'
        }}>
          {caseStudy.title}
        </h3>

        <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.65 }}>
          {caseStudy.summary}
        </p>

        {/* Highlighted Results Grid - Zero Mobile Overflow */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 80px), 1fr))',
          gap: '0.65rem',
          backgroundColor: 'var(--bg-primary)',
          padding: '1rem 0.75rem',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.75rem',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {caseStudy.results && caseStudy.results.map((res, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.25rem, 4vw, 1.45rem)', fontWeight: 700, color: 'var(--brand-primary)' }}>
                {res.metric}
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', lineHeight: 1.2, marginTop: '2px' }}>
                {res.label.replace('(Sample Data)', '')}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Link to={`/case-studies/${caseStudy.slug}`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '0.75rem 1rem', boxSizing: 'border-box' }}>
          <span>View Detailed Case Study</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
