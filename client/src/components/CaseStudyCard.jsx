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
      position: 'relative'
    }}>
      <div>
        {/* Sample Data Notice Badge */}
        {caseStudy.isSampleData && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.75rem',
            color: 'var(--accent-copper)',
            backgroundColor: 'rgba(181, 106, 69, 0.08)',
            padding: '0.3rem 0.6rem',
            borderRadius: '2px',
            marginBottom: '1.25rem',
            fontWeight: 600
          }}>
            <AlertCircle size={14} />
            <span>SAMPLE CASE STUDY & BENCHMARK DATA</span>
          </div>
        )}

        <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          {caseStudy.industry} • {caseStudy.timeframe || '12 Months'}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.65rem',
          lineHeight: 1.25,
          color: 'var(--brand-primary)',
          marginBottom: '1rem'
        }}>
          {caseStudy.title}
        </h3>

        <p style={{ fontSize: '0.9625rem', color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: 1.65 }}>
          {caseStudy.summary}
        </p>

        {/* Highlighted Results Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.75rem',
          backgroundColor: 'var(--bg-primary)',
          padding: '1.25rem 1rem',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
          marginBottom: '2rem'
        }}>
          {caseStudy.results && caseStudy.results.map((res, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                {res.metric}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.2, marginTop: '2px' }}>
                {res.label.replace('(Sample Data)', '')}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Link to={`/case-studies/${caseStudy.slug}`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '0.65rem 1rem' }}>
          <span>View Detailed Case Study</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
