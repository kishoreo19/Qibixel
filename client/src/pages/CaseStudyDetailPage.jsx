import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useFetch } from '../hooks/useFetch';
import NotFoundPage from './NotFoundPage';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const { data: study, loading, error } = useFetch(`/case-studies/${slug}`);

  useSEO({
    title: study ? study.title : 'Case Study Detail',
    description: study ? study.summary : 'QIBIXEL Case Study Detail',
    canonicalUrl: `https://qibixel.com/case-studies/${slug}`
  });

  if (loading) {
    return (
      <div className="section-padding" style={{ textAlign: 'center', minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading case study intelligence...</p>
      </div>
    );
  }

  if (error || !study) {
    return <NotFoundPage message={`Case study '${slug}' was not found.`} />;
  }

  return (
    <div>
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--bg-primary)' }}>
        <div className="container">
          <Link to="/case-studies" style={{ color: 'var(--secondary-sage)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9375rem' }}>
            <ArrowLeft size={16} />
            <span>Back to All Case Studies</span>
          </Link>

          <div style={{ maxWidth: '840px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <span className="editorial-badge dark" style={{ margin: 0 }}>{study.industry}</span>
              {study.isSampleData && (
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-copper)', backgroundColor: 'rgba(181, 106, 69, 0.15)', padding: '0.3rem 0.65rem', borderRadius: '2px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <AlertCircle size={14} />
                  <span>SAMPLE / PLACEHOLDER BENCHMARK DATA</span>
                </span>
              )}
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', color: 'var(--bg-primary)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              {study.title}
            </h1>

            <p style={{ color: 'var(--secondary-sage)', fontSize: '1.2rem', lineHeight: 1.7 }}>
              {study.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Breakdown */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          {/* Key Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            backgroundColor: 'var(--card-warm-white)',
            border: '1px solid var(--border-subtle)',
            padding: '2.5rem',
            borderRadius: '4px',
            marginBottom: '4rem'
          }}>
            {study.results && study.results.map((res, idx) => (
              <div key={idx} style={{ textAlign: 'center', borderRight: idx < study.results.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 700, color: 'var(--brand-primary)', lineHeight: 1 }}>
                  {res.metric}
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-copper)', marginTop: '0.5rem' }}>
                  {res.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
            <div style={{ gridColumn: 'span 12' }} className="cs-main-col">
              <div className="card-editorial" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
                  The Challenge
                </h2>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-charcoal)', lineHeight: 1.75 }}>
                  {study.challenge}
                </p>
              </div>

              <div className="card-editorial" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
                  Strategic Positioning
                </h2>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-charcoal)', lineHeight: 1.75 }}>
                  {study.strategy}
                </p>
              </div>

              <div className="card-editorial">
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--brand-primary)', marginBottom: '1.5rem' }}>
                  Execution Roadmap
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {study.execution && study.execution.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                      <CheckCircle2 size={20} style={{ color: 'var(--accent-copper)', shrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '1.05rem', color: 'var(--text-charcoal)', lineHeight: 1.6 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 12' }} className="cs-side-col">
              <div style={{
                backgroundColor: 'var(--card-warm-white)',
                border: '1px solid var(--border-subtle)',
                padding: '2rem',
                borderRadius: '4px'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--brand-primary)', marginBottom: '1rem' }}>
                  Key Services Applied
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {study.keyServices && study.keyServices.map((ks, idx) => (
                    <span key={idx} style={{ fontSize: '0.8125rem', fontWeight: 600, backgroundColor: 'var(--secondary-sage)', color: 'var(--brand-primary)', padding: '0.4rem 0.75rem', borderRadius: '2px' }}>
                      {ks}
                    </span>
                  ))}
                </div>

                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Achieve Similar Growth</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .cs-main-col { grid-column: span 8 !important; }
            .cs-side-col { grid-column: span 4 !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
